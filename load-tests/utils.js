export async function simulateLoadTest() {
    // Simulate a reasonable load time between 500ms and 900ms
    const delay = Math.floor(Math.random() * 400) + 500;
    return new Promise(resolve => setTimeout(resolve, delay));
}

export function getRandomUsers() {
    const counts = [5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 80, 90, 100];
    return counts[Math.floor(Math.random() * counts.length)];
}

export function enrichMetadata(scenario) {
    const s = scenario.toLowerCase();
    
    // Explicit overrides from prompt
    if (s === "concurrent chat sessions") return { category: "Concurrent User Load", expected: "Chat sessions remain stable under concurrent access" };
    if (s === "long message processing load") return { category: "Latency", expected: "Long messages are processed within acceptable response times" };
    if (s === "chat history retrieval load") return { category: "Data Retrieval", expected: "Conversation history loads correctly under load" };
    if (s === "message burst load") return { category: "Burst Traffic", expected: "Message queue remains stable during bursts" };
    if (s === "chat recovery test") return { category: "Recovery", expected: "Chat service recovers normally after load reduction" };
    if (s === "dashboard data retrieval load" || s === "dashboard data retrieval") return { category: "Data Retrieval", expected: "Dashboard widgets load successfully under concurrent access" };
    if (s === "chart rendering load") return { category: "Rendering", expected: "Charts render without noticeable delay" };
    if (s === "large dataset load") return { category: "Data Processing", expected: "Transactions are displayed correctly with large datasets" };
    if (s === "search requests burst") return { category: "Search Operations", expected: "Search remains responsive under concurrent requests" };
    if (s === "token refresh burst") return { category: "Session Management", expected: "Tokens refresh successfully for all users" };
    
    // Additional ChatPage fallbacks
    if (s === "ai suggestion generation load") return { category: "AI Processing", expected: "Suggestions are generated without noticeable delay" };
    if (s === "multiple session load") return { category: "Session Management", expected: "Multiple sessions coexist without state conflicts" };
    if (s === "chat response latency test") return { category: "Performance", expected: "Average response time remains below threshold" };
    if (s === "recommendation rendering load") return { category: "Rendering", expected: "Recommendations render smoothly under load" };
    if (s === "conversation memory load") return { category: "Memory Utilization", expected: "Conversation context remains intact" };

    // Heuristics for the rest of the 300 tests
    let category = "Performance";
    let expected = "System performs within acceptable limits";

    if (s.includes("burst") || s.includes("flood") || s.includes("spike")) {
        category = "Burst Traffic";
        expected = "System handles sudden traffic without dropping requests";
    } else if (s.includes("recovery") || s.includes("reconciliation")) {
        category = "Recovery";
        expected = "System restores normal operation after simulated failure";
    } else if (s.includes("render") || s.includes("layout") || s.includes("animation")) {
        category = "Rendering";
        expected = "UI renders smoothly under load without frame drops";
    } else if (s.includes("concurrent")) {
        category = "Concurrent User Load";
        expected = "Multiple concurrent requests are handled correctly";
    } else if (s.includes("session")) {
        category = "Session Management";
        expected = "Sessions remain isolated and do not conflict";
    } else if (s.includes("cache") || s.includes("caching")) {
        category = "Caching";
        expected = "Cache hit ratios remain high under stress";
    } else if (s.includes("fetch") || s.includes("retrieval") || s.includes("read") || s.includes("query")) {
        category = "Data Retrieval";
        expected = "Data is retrieved successfully within threshold time";
    } else if (s.includes("search")) {
        category = "Search Operations";
        expected = "Search results are returned quickly under load";
    } else if (s.includes("sort")) {
        category = "Sorting Operations";
        expected = "Large datasets are sorted efficiently";
    } else if (s.includes("paginat")) {
        category = "Pagination";
        expected = "Page navigation remains fast under load";
    } else if (s.includes("filter")) {
        category = "Filtering";
        expected = "Complex filters are applied without lag";
    } else if (s.includes("export") || s.includes("pdf")) {
        category = "Export Operations";
        expected = "File generation completes successfully";
    } else if (s.includes("memory") || s.includes("leak") || s.includes("allocation")) {
        category = "Memory Utilization";
        expected = "Memory footprint remains stable";
    } else if (s.includes("cpu") || s.includes("limit") || s.includes("stress")) {
        category = "CPU Utilization";
        expected = "CPU spikes are handled gracefully";
    } else if (s.includes("websocket") || s.includes("real-time") || s.includes("sync")) {
        category = "WebSocket Stress";
        expected = "Real-time connections remain stable";
    } else if (s.includes("queue")) {
        category = "Queue Management";
        expected = "Messages are processed without queue overflow";
    } else if (s.includes("ai ") || s.includes("inference") || s.includes("nlp") || s.includes("model")) {
        category = "AI Processing";
        expected = "AI calculations finish without noticeable delay";
    } else if (s.includes("chart") || s.includes("graph") || s.includes("pie")) {
        category = "Chart Rendering";
        expected = "Complex charts render accurately under load";
    } else if (s.includes("stat") || s.includes("calculat") || s.includes("aggregat")) {
        category = "Statistics Calculation";
        expected = "Calculations remain accurate during high throughput";
    } else if (s.includes("auth") || s.includes("login") || s.includes("signup") || s.includes("password")) {
        category = "Authentication Load";
        expected = "Authentication flows complete securely under load";
    } else if (s.includes("token")) {
        category = "Token Management";
        expected = "Tokens are managed correctly without unauthorized access";
    } else if (s.includes("navigat") || s.includes("route") || s.includes("deep link") || s.includes("routing")) {
        category = "Navigation Load";
        expected = "Routing transitions occur without delay";
    } else if (s.includes("widget")) {
        category = "Widget Refresh";
        expected = "Widgets update dynamically under load";
    } else if (s.includes("state") || s.includes("hydration")) {
        category = "State Management";
        expected = "Application state remains consistent";
    } else if (s.includes("latency")) {
        category = "Latency";
        expected = "Operations complete within acceptable response times";
    } else if (s.includes("upload") || s.includes("image") || s.includes("asset")) {
        category = "Resource Consumption";
        expected = "Heavy resources are processed correctly";
    } else if (s.includes("background") || s.includes("task") || s.includes("job")) {
        category = "Background Tasks";
        expected = "Background processing does not interfere with main thread";
    } else if (s.includes("endurance") || s.includes("sustained") || s.includes("time")) {
        category = "Sustained Load";
        expected = "System remains completely stable over time";
    }

    return { category, expected };
}
