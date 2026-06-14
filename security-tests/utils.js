import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import fs from 'fs';
import path from 'path';

export const BASE_URL =
  process.env.BASE_URL || 'http://127.0.0.1:5173/';

export async function setupDriver(viewport = { width: 1920, height: 1080 }) {
  console.log("Creating driver...");
  const serviceBuilder = new chrome.ServiceBuilder(path.resolve('node_modules', 'chromedriver', 'lib', 'chromedriver', 'chromedriver.exe'));

  let options = new chrome.Options();
  //options.addArguments('--headless=new'); // Run headless by default for CI and full suite
  options.addArguments('--disable-gpu');
  options.addArguments(`--window-size=${viewport.width},${viewport.height}`);
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--mute-audio');

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .setChromeService(serviceBuilder)
    .build();

  console.log("Driver created successfully");
  return driver;
}

export async function takeScreenshotOnFailure(driver, testContext) {
  if (testContext.currentTest.state === 'failed') {
    const reportsDir = path.resolve('reports', 'screenshots');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    // Create safe filename from test title
    const safeTitle = testContext.currentTest.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = path.join(reportsDir, `${safeTitle}_${timestamp}.png`);

    try {
      const image = await driver.takeScreenshot();
      fs.writeFileSync(screenshotPath, image, 'base64');
      console.log(`\n📸 Screenshot saved: ${screenshotPath}`);
    } catch (err) {
      console.error('Failed to take screenshot:', err);
    }
  }
}

export async function performLogin(driver, email = 'test@example.com', password = 'testpassword123') {
  console.log("Loading login page:", `${BASE_URL}#/login`);
  const { until, By } = await import('selenium-webdriver');
  await driver.get(`${BASE_URL}#/login`);
  console.log("Page loaded");

  console.log("Waiting for email input...");
  const emailInput = await driver.wait(until.elementLocated(By.css('input[type="email"]')), 10000);
  console.log("Waiting for password input...");
  const passwordInput = await driver.wait(until.elementLocated(By.css('input[type="password"]')), 10000);
  console.log("Waiting for login button...");
  const loginBtn = await driver.wait(until.elementLocated(By.css('button[type="submit"]')), 10000);

  console.log("Entering credentials...");
  await emailInput.sendKeys(email);
  await passwordInput.sendKeys(password);
  await loginBtn.click();

  // Wait for navigation away from login
  console.log("Waiting for navigation to /app/dashboard...");
  await driver.wait(until.urlContains('/app/dashboard'), 10000);
  console.log("Login successful, navigated to dashboard.");
}
