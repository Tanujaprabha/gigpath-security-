const fs = require('fs');

const screens = [
    { name: 'SplashScreen', module: 'Auth', prefix: 'SPLASH' },
    { name: 'WelcomeScreen', module: 'Auth', prefix: 'WELCOME' },
    { name: 'LoginPage', module: 'Auth', prefix: 'LOGIN' },
    { name: 'SignupPage', module: 'Auth', prefix: 'SIGNUP' },
    { name: 'ForgotPasswordPage', module: 'Auth', prefix: 'FORGOT' },
    { name: 'OtpVerificationPage', module: 'Auth', prefix: 'OTP' },
    { name: 'ResetPasswordPage', module: 'Auth', prefix: 'RESET' },
    { name: 'DashboardPage', module: 'Dashboard', prefix: 'DASH' },
    { name: 'ChatPage', module: 'Chat', prefix: 'CHAT' },
    { name: 'BudgetRecommendationPage', module: 'Budget', prefix: 'BUDG_REC' },
    { name: 'SuggestionsPage', module: 'Budget', prefix: 'SUGGEST' },
    { name: 'AddTransactionPage', module: 'Transaction', prefix: 'ADD_TX' },
    { name: 'EditTransactionPage', module: 'Transaction', prefix: 'EDIT_TX' },
    { name: 'TransactionDetailPage', module: 'Transaction', prefix: 'TX_DET' },
    { name: 'TransactionListPage', module: 'Transaction', prefix: 'TX_LIST' },
    { name: 'AddRecurringExpensePage', module: 'Recurring', prefix: 'ADD_REC' },
    { name: 'RecurringExpensesPage', module: 'Recurring', prefix: 'REC_LIST' },
    { name: 'CategoryBreakdownPage', module: 'Reports', prefix: 'CAT_BRK' },
    { name: 'MonthlyReportPage', module: 'Reports', prefix: 'MON_REP' },
    { name: 'AddGoalPage', module: 'Goals', prefix: 'ADD_GOAL' },
    { name: 'EditGoalPage', module: 'Goals', prefix: 'EDIT_GOAL' },
    { name: 'GoalDetailPage', module: 'Goals', prefix: 'GOAL_DET' },
    { name: 'GoalProgressPage', module: 'Goals', prefix: 'GOAL_PRG' },
    { name: 'GoalsListPage', module: 'Goals', prefix: 'GOAL_LIST' },
    { name: 'CashFlowPage', module: 'Finance', prefix: 'CASH_FLW' },
    { name: 'FinancialHealthPage', module: 'Finance', prefix: 'FIN_HLTH' },
    { name: 'InsightsOverviewPage', module: 'Finance', prefix: 'INSIGHTS' },
    { name: 'PredictionsPage', module: 'Finance', prefix: 'PREDICT' },
    { name: 'WeeklyReportPage', module: 'Reports', prefix: 'WK_REP' },
    { name: 'ProfilePage', module: 'Settings', prefix: 'PROF' },
    { name: 'EditProfilePage', module: 'Settings', prefix: 'EDIT_PROF' },
    { name: 'PreferencesPage', module: 'Settings', prefix: 'PREF' },
    { name: 'NotificationsPage', module: 'Settings', prefix: 'NOTIF' },
    { name: 'SettingsPage', module: 'Settings', prefix: 'SETT' },
    { name: 'SecurityPage', module: 'Settings', prefix: 'SEC' },
    { name: 'HelpPage', module: 'Settings', prefix: 'HELP' }
];

const screenScenarios = {
    'SplashScreen': [
        { cat: 'Information Disclosure', scenario: 'Examine API keys in background network calls', exp: 'No sensitive keys exposed during load' },
        { cat: 'Session Management', scenario: 'Verify silent token refresh on app launch', exp: 'Tokens are refreshed securely without exposure' },
        { cat: 'Data Leakage', scenario: 'Check for hardcoded credentials in bundle', exp: 'No hardcoded credentials found' },
        { cat: 'Platform Security', scenario: 'Validate root/jailbreak detection mechanisms', exp: 'App detects compromised devices' },
        { cat: 'Local Storage', scenario: 'Ensure no PII is loaded from unencrypted cache', exp: 'All loaded data is encrypted' }
    ],
    'WelcomeScreen': [
        { cat: 'Authentication Bypass', scenario: 'Attempt to bypass welcome screen via deep linking', exp: 'Unauthenticated users are redirected to login' },
        { cat: 'UI Redressing', scenario: 'Clickjacking prevention check', exp: 'Headers prevent UI redressing' },
        { cat: 'Information Disclosure', scenario: 'Validate version information leakage', exp: 'No internal framework versions disclosed' },
        { cat: 'Platform Security', scenario: 'Check app permissions requested on first load', exp: 'Only minimal permissions requested' },
        { cat: 'Network Security', scenario: 'Ensure all onboarding videos/assets load over HTTPS', exp: 'No mixed content allowed' }
    ],
    'LoginPage': [
        { cat: 'Authentication', scenario: 'Brute Force Login Attempt', exp: 'Account lockout after multiple failed attempts' },
        { cat: 'Injection', scenario: 'SQL Injection in Email Field', exp: 'Input is sanitized, no DB error thrown' },
        { cat: 'Session Management', scenario: 'Session Timeout Validation', exp: 'User logged out automatically after inactivity' },
        { cat: 'Authorization', scenario: 'Unauthorized Dashboard Access', exp: 'Blocked without valid token' },
        { cat: 'Information Disclosure', scenario: 'Password Enumeration Check', exp: 'Generic error message for invalid credentials' }
    ],
    'SignupPage': [
        { cat: 'Account Creation', scenario: 'Mass Registration Attack', exp: 'Rate limiting prevents mass account creation' },
        { cat: 'Validation', scenario: 'Weak Password Acceptance', exp: 'Passwords must meet complexity requirements' },
        { cat: 'Injection', scenario: 'XSS in Full Name field', exp: 'Scripts are escaped properly' },
        { cat: 'Information Disclosure', scenario: 'Email Enumeration during signup', exp: 'Generic response when email already exists' },
        { cat: 'Business Logic', scenario: 'Bypass Terms of Service acceptance', exp: 'Registration fails without TOS flag' }
    ],
    'ForgotPasswordPage': [
        { cat: 'Rate Limiting', scenario: 'Flood password reset requests', exp: 'Rate limit applied after 3 requests' },
        { cat: 'Information Disclosure', scenario: 'User enumeration via reset password', exp: 'Generic success message regardless of email existence' },
        { cat: 'Token Security', scenario: 'Predictable reset token generation', exp: 'Tokens are cryptographically secure and random' },
        { cat: 'Session Management', scenario: 'Reset link expiration check', exp: 'Links expire after 15 minutes' },
        { cat: 'Business Logic', scenario: 'Host header injection in reset email', exp: 'Reset URL uses strictly defined host' }
    ],
    'OtpVerificationPage': [
        { cat: 'Authentication', scenario: 'OTP Brute Force', exp: 'OTP locked after 3 failed attempts' },
        { cat: 'Session Management', scenario: 'OTP Replay Attack', exp: 'OTP cannot be reused once successful' },
        { cat: 'Logic Flaw', scenario: 'Bypass OTP via parameter manipulation', exp: 'Verification fails without valid OTP' },
        { cat: 'Information Disclosure', scenario: 'OTP leakage in API response', exp: 'OTP is not returned in the initial API response' },
        { cat: 'Cryptography', scenario: 'Predictable OTP generation', exp: 'OTP generated is sufficiently random' }
    ],
    'ResetPasswordPage': [
        { cat: 'Authentication', scenario: 'Reset password without valid token', exp: 'Operation denied' },
        { cat: 'Validation', scenario: 'New password complexity check bypass', exp: 'Backend enforces password policies' },
        { cat: 'Session Management', scenario: 'Invalidate all other sessions after reset', exp: 'Existing sessions are terminated' },
        { cat: 'Logic Flaw', scenario: 'Token reuse after password reset', exp: 'Token is invalidated immediately' },
        { cat: 'Authorization', scenario: 'Reset password for a different user (IDOR)', exp: 'Reset is tied only to token owner' }
    ],
    'DashboardPage': [
        { cat: 'Authorization', scenario: 'Horizontal Privilege Escalation', exp: 'Cannot view other user dashboards' },
        { cat: 'Data Validation', scenario: 'GraphQL Introspection attack', exp: 'Introspection is disabled' },
        { cat: 'Session Management', scenario: 'Concurrent session limits', exp: 'Oldest session is logged out if limit exceeded' },
        { cat: 'Data Leakage', scenario: 'Sensitive metrics in URL parameters', exp: 'No PII or financial data in URLs' },
        { cat: 'Business Logic', scenario: 'Forced browsing to admin dashboard', exp: 'Access denied for non-admin roles' }
    ],
    'ChatPage': [
        { cat: 'Injection', scenario: 'Prompt Injection Attempt', exp: 'AI safely handles malicious prompts' },
        { cat: 'Data Leakage', scenario: 'Sensitive Data Leakage Validation', exp: 'PII in chat is masked/redacted' },
        { cat: 'Authorization', scenario: 'Unauthorized Chat Access', exp: 'Users can only view their own chat histories' },
        { cat: 'Denial of Service', scenario: 'Oversized Payload Submission', exp: 'Payloads over 5MB are rejected' },
        { cat: 'Injection', scenario: 'Script Injection in Message', exp: 'Messages are sanitized to prevent XSS' }
    ],
    'BudgetRecommendationPage': [
        { cat: 'Data Validation', scenario: 'Manipulate AI recommendation parameters', exp: 'Invalid parameters rejected' },
        { cat: 'Authorization', scenario: 'Access recommendations of another user', exp: 'IDOR prevented' },
        { cat: 'Business Logic', scenario: 'Apply negative budget limits', exp: 'Negative values are rejected' },
        { cat: 'Information Disclosure', scenario: 'AI model prompt extraction', exp: 'System prompt cannot be extracted' },
        { cat: 'Denial of Service', scenario: 'Repeated intensive recommendation generation', exp: 'Rate limiting applied' }
    ],
    'SuggestionsPage': [
        { cat: 'Injection', scenario: 'HTML Injection in feedback/suggestions', exp: 'Input is safely encoded' },
        { cat: 'Authorization', scenario: 'Approve/reject suggestions as regular user', exp: 'Only admins can alter suggestion state' },
        { cat: 'Data Validation', scenario: 'Exceed maximum suggestion length', exp: 'String truncated securely' },
        { cat: 'Business Logic', scenario: 'Duplicate suggestion submission spam', exp: 'Duplicate detection implemented' },
        { cat: 'Information Disclosure', scenario: 'Discover hidden features via suggestion errors', exp: 'Generic error messages displayed' }
    ],
    'AddTransactionPage': [
        { cat: 'Data Validation', scenario: 'Negative transaction amount', exp: 'Amount must be valid based on type' },
        { cat: 'Injection', scenario: 'NoSQL Injection in transaction notes', exp: 'Input sanitized, payload ineffective' },
        { cat: 'Business Logic', scenario: 'Submit transaction in past/future far dates', exp: 'Date boundary constraints enforced' },
        { cat: 'Authorization', scenario: 'Add transaction to another user account', exp: 'User can only modify their own ledger' },
        { cat: 'File Upload', scenario: 'Upload malicious receipt image (e.g. PHP file)', exp: 'Only valid image types accepted, malware scanned' }
    ],
    'EditTransactionPage': [
        { cat: 'Authorization', scenario: 'IDOR on transaction ID', exp: 'Cannot edit transaction belonging to another user' },
        { cat: 'Business Logic', scenario: 'Modify transaction status to bypass approval', exp: 'Status field is ignored on update' },
        { cat: 'Data Validation', scenario: 'Change currency to unsupported type', exp: 'Validation error thrown' },
        { cat: 'Audit Logging', scenario: 'Verify audit logs on amount change', exp: 'Changes are logged with timestamp and user' },
        { cat: 'Concurrency', scenario: 'Race condition on concurrent transaction edits', exp: 'Latest edit wins or lock prevents collision' }
    ],
    'TransactionDetailPage': [
        { cat: 'Authorization', scenario: 'Access detail via direct URL manipulation', exp: 'Access denied if not owner' },
        { cat: 'Information Disclosure', scenario: 'Full credit card number visibility', exp: 'Card numbers are masked (e.g., **** 1234)' },
        { cat: 'Injection', scenario: 'Stored XSS in transaction metadata display', exp: 'Metadata safely rendered' },
        { cat: 'Data Validation', scenario: 'Path traversal in receipt download', exp: 'File paths are secured and randomized' },
        { cat: 'Business Logic', scenario: 'Delete transaction via GET request', exp: 'State changes require POST/DELETE methods' }
    ],
    'TransactionListPage': [
        { cat: 'Data Validation', scenario: 'SQL Injection in search/filter parameters', exp: 'Filters use parameterized queries' },
        { cat: 'Denial of Service', scenario: 'Request extremely large page sizes', exp: 'Max pagination limit enforced (e.g., 100)' },
        { cat: 'Information Disclosure', scenario: 'Export data of other users', exp: 'Export contains only current user data' },
        { cat: 'Injection', scenario: 'CSV Injection in export functionality', exp: 'CSV cells beginning with formulas are escaped' },
        { cat: 'Authorization', scenario: 'Bypass filter to see deleted transactions', exp: 'Soft-deleted records are filtered at DB level' }
    ],
    'AddRecurringExpensePage': [
        { cat: 'Business Logic', scenario: 'Set recurrence interval to 0 or negative', exp: 'Interval must be strictly positive' },
        { cat: 'Authorization', scenario: 'Assign recurring expense to admin group', exp: 'Cannot assign expenses outside user scope' },
        { cat: 'Data Validation', scenario: 'Submit massive integer for expense amount', exp: 'Integer overflow prevented' },
        { cat: 'Injection', scenario: 'Command Injection in cron job scheduling', exp: 'Schedules managed securely without OS commands' },
        { cat: 'Denial of Service', scenario: 'Create 10,000 recurring expenses', exp: 'User quota limit enforced' }
    ],
    'RecurringExpensesPage': [
        { cat: 'Authorization', scenario: 'Cancel another user recurring expense', exp: 'IDOR prevented' },
        { cat: 'Data Validation', scenario: 'Manipulate active/inactive state arbitrarily', exp: 'State transitions validated' },
        { cat: 'Information Disclosure', scenario: 'Expose internal chron job IDs in API', exp: 'Uses abstract UUIDs for frontend' },
        { cat: 'Business Logic', scenario: 'Pause expense via unprotected API endpoint', exp: 'Authentication required' },
        { cat: 'Concurrency', scenario: 'Race condition during auto-billing execution', exp: 'Idempotency keys prevent double billing' }
    ],
    'CategoryBreakdownPage': [
        { cat: 'Data Validation', scenario: 'XSS via custom category names', exp: 'Custom categories safely rendered' },
        { cat: 'Authorization', scenario: 'View breakdown for unassigned company categories', exp: 'Restricted to user assigned categories' },
        { cat: 'Denial of Service', scenario: 'Request breakdown over 100-year span', exp: 'Date range restricted to max 5 years' },
        { cat: 'Information Disclosure', scenario: 'Extract precise aggregate values via timing attack', exp: 'Constant time queries used' },
        { cat: 'Business Logic', scenario: 'Bypass premium features lock', exp: 'API validates subscription level' }
    ],
    'MonthlyReportPage': [
        { cat: 'Authorization', scenario: 'Download monthly report for another user (IDOR)', exp: 'Access denied' },
        { cat: 'Data Validation', scenario: 'Server-Side Request Forgery (SSRF) in PDF generation', exp: 'External URLs blocked in PDF renderer' },
        { cat: 'Information Disclosure', scenario: 'Cache control headers on report data', exp: 'Cache-Control: no-store on sensitive reports' },
        { cat: 'Business Logic', scenario: 'Access future month reports before generated', exp: 'Future dates return 404/empty' },
        { cat: 'Injection', scenario: 'Template injection in report generation', exp: 'Templates are locked and sanitized' }
    ],
    'AddGoalPage': [
        { cat: 'Data Validation', scenario: 'Goal Amount Parameter Tampering', exp: 'Amount cannot exceed system limits' },
        { cat: 'Authorization', scenario: 'Unauthorized Goal Creation', exp: 'Cannot create goals for other users' },
        { cat: 'Injection', scenario: 'Script Injection in Goal Name', exp: 'XSS blocked on save' },
        { cat: 'Business Logic', scenario: 'Negative Value Manipulation', exp: 'Negative target rejected' },
        { cat: 'Authorization', scenario: 'Goal Ownership Validation', exp: 'Strict checks on session ID vs payload ID' }
    ],
    'EditGoalPage': [
        { cat: 'Authorization', scenario: 'IDOR vulnerability on goal edit', exp: 'Validation of ownership prior to save' },
        { cat: 'Business Logic', scenario: 'Change goal target below currently saved amount', exp: 'Logic validated gracefully' },
        { cat: 'Data Validation', scenario: 'Modify goal deadline to past date', exp: 'Past dates rejected' },
        { cat: 'Concurrency', scenario: 'Concurrent edits by shared owners', exp: 'Optimistic locking handles conflicts' },
        { cat: 'Injection', scenario: 'NoSQL injection in goal update query', exp: 'ORM parameterizes queries safely' }
    ],
    'GoalDetailPage': [
        { cat: 'Authorization', scenario: 'Access private goal via link sharing', exp: 'Private goals require authentication' },
        { cat: 'Information Disclosure', scenario: 'Hidden field manipulation to see contributor details', exp: 'API strictly filters response' },
        { cat: 'Business Logic', scenario: 'Delete goal without resolving funds', exp: 'Funds must be reallocated before delete' },
        { cat: 'Injection', scenario: 'Stored XSS in goal description', exp: 'Description rendered as text/safe HTML' },
        { cat: 'Data Validation', scenario: 'Exceed maximum integer for goal progress', exp: 'Boundary checks applied' }
    ],
    'GoalProgressPage': [
        { cat: 'Authorization', scenario: 'Update progress of another user goal', exp: 'Access denied' },
        { cat: 'Business Logic', scenario: 'Submit progress exceeding 100%', exp: 'Progress capped at 100% or overflow handled' },
        { cat: 'Data Validation', scenario: 'Manipulate progress via replay attacks', exp: 'Idempotent updates' },
        { cat: 'Information Disclosure', scenario: 'Exposure of full transaction history in progress API', exp: 'Only aggregated data sent' },
        { cat: 'Denial of Service', scenario: 'Flood progress updates to degrade DB', exp: 'Rate limiting on progress updates' }
    ],
    'GoalsListPage': [
        { cat: 'Data Validation', scenario: 'SQL injection in goal sorting criteria', exp: 'Sorting criteria strictly whitelisted' },
        { cat: 'Authorization', scenario: 'View archived goals without permission', exp: 'Archived goals only visible to owner' },
        { cat: 'Information Disclosure', scenario: 'Pagination token predictable', exp: 'Opaque/encrypted cursor pagination used' },
        { cat: 'Business Logic', scenario: 'Bypass max active goals limit', exp: 'Enforced at the database transaction level' },
        { cat: 'Injection', scenario: 'XSS in goal list rendering', exp: 'All goal titles HTML escaped' }
    ],
    'CashFlowPage': [
        { cat: 'Authorization', scenario: 'View cash flow of different tenant/organization', exp: 'Tenant isolation enforced' },
        { cat: 'Data Validation', scenario: 'Parameter pollution in date ranges', exp: 'First/last parameter prioritized and validated' },
        { cat: 'Information Disclosure', scenario: 'API exposes raw bank sync credentials', exp: 'Tokens are never sent to frontend' },
        { cat: 'Business Logic', scenario: 'Trigger multiple syncs to exhaust API limits', exp: 'Sync debounced and rate limited' },
        { cat: 'Denial of Service', scenario: 'Calculate cashflow for 10 million transactions', exp: 'Query timeout and limits enforced' }
    ],
    'FinancialHealthPage': [
        { cat: 'Data Validation', scenario: 'Tamper with health score calculation inputs', exp: 'Score calculated securely on backend' },
        { cat: 'Authorization', scenario: 'Access health metrics of administrative accounts', exp: 'Strict RBAC checks' },
        { cat: 'Business Logic', scenario: 'Manipulate credit score integrations', exp: 'External API calls signed and verified' },
        { cat: 'Information Disclosure', scenario: 'Leakage of external credit report data', exp: 'Data masked and securely transmitted' },
        { cat: 'Injection', scenario: 'XSS in health tips generated by AI', exp: 'Markdown parsed securely' }
    ],
    'InsightsOverviewPage': [
        { cat: 'Authorization', scenario: 'Bypass paywall for premium insights', exp: 'Paywall enforced server-side' },
        { cat: 'Data Validation', scenario: 'Send malicious payload to tracking pixel', exp: 'Analytics endpoints sanitize inputs' },
        { cat: 'Information Disclosure', scenario: 'Exposure of peer comparison data (PII)', exp: 'Peer data is strictly anonymized' },
        { cat: 'Business Logic', scenario: 'Force generation of cached insights', exp: 'Cache invalidation is protected' },
        { cat: 'Injection', scenario: 'Stored XSS in insight feedback comments', exp: 'Comments are stripped of tags' }
    ],
    'PredictionsPage': [
        { cat: 'Business Logic', scenario: 'Submit fabricated historical data for predictions', exp: 'System only uses verified ledger data' },
        { cat: 'Authorization', scenario: 'Execute prediction model retraining as user', exp: 'Training endpoints are internal only' },
        { cat: 'Denial of Service', scenario: 'Request ultra-high resolution predictions', exp: 'Resolution bounded by system configuration' },
        { cat: 'Information Disclosure', scenario: 'Model inversion attack to extract training data', exp: 'API only provides high-level inferences' },
        { cat: 'Data Validation', scenario: 'SSRF via external data source integration', exp: 'External URLs restricted by allowlist' }
    ],
    'WeeklyReportPage': [
        { cat: 'Authorization', scenario: 'IDOR on weekly report generation', exp: 'Reports bound to authenticated session' },
        { cat: 'Business Logic', scenario: 'Resend weekly email 100 times', exp: 'Email dispatch rate limited' },
        { cat: 'Information Disclosure', scenario: 'Unsubscribe link lacks CSRF protection', exp: 'Unsubscribe uses secure token' },
        { cat: 'Data Validation', scenario: 'Tamper with report timezone offset', exp: 'Offset validated against known tz database' },
        { cat: 'Injection', scenario: 'XSS via malicious category names in report', exp: 'Category names sanitized in email template' }
    ],
    'ProfilePage': [
        { cat: 'Authorization', scenario: 'View private profile fields of another user', exp: 'Access strictly limited to public info' },
        { cat: 'Data Validation', scenario: 'Upload 100MB profile picture', exp: 'File size restricted to 5MB max' },
        { cat: 'Information Disclosure', scenario: 'Examine API response for hidden user status', exp: 'No internal flags exposed' },
        { cat: 'Injection', scenario: 'Stored XSS in bio field', exp: 'Bio is sanitized and escaped' },
        { cat: 'Business Logic', scenario: 'Bypass email verification check', exp: 'Unverified emails restrict critical features' }
    ],
    'EditProfilePage': [
        { cat: 'Authorization', scenario: 'Change email without current password validation', exp: 'Re-authentication required for sensitive changes' },
        { cat: 'Data Validation', scenario: 'Bypass client-side phone number validation', exp: 'Backend strictly validates format' },
        { cat: 'Business Logic', scenario: 'Update role parameter to "admin"', exp: 'Role updates ignored by user endpoint' },
        { cat: 'CSRF', scenario: 'Cross-Site Request Forgery on profile update', exp: 'CSRF tokens validated successfully' },
        { cat: 'Information Disclosure', scenario: 'Verbose error on taken usernames', exp: 'Standardized error prevents timing attacks' }
    ],
    'PreferencesPage': [
        { cat: 'Data Validation', scenario: 'Submit invalid JSON for preferences blob', exp: 'Schema validation rejects bad payloads' },
        { cat: 'Authorization', scenario: 'Update system-wide preferences', exp: 'Only user-scoped preferences updated' },
        { cat: 'Injection', scenario: 'NoSQL injection in theme settings', exp: 'Theme strings strictly matched to enum' },
        { cat: 'Business Logic', scenario: 'Enable restricted beta features', exp: 'Feature flags enforced server-side' },
        { cat: 'Information Disclosure', scenario: 'Leakage of marketing opt-in statuses', exp: 'Opt-in stats kept private' }
    ],
    'NotificationsPage': [
        { cat: 'Authorization', scenario: 'Mark all notifications read for another user', exp: 'IDOR mitigated' },
        { cat: 'Data Validation', scenario: 'Send push notification to arbitrary device token', exp: 'Tokens bound to user sessions' },
        { cat: 'Business Logic', scenario: 'Delete un-deletable system alerts', exp: 'System alerts protected from deletion' },
        { cat: 'Injection', scenario: 'HTML injection in notification title', exp: 'Titles rendered as plain text' },
        { cat: 'Denial of Service', scenario: 'Generate massive notification spam', exp: 'Event deduplication and rate limits active' }
    ],
    'SettingsPage': [
        { cat: 'Authorization', scenario: 'Access developer menu via hidden clicks', exp: 'Developer menu disabled in production builds' },
        { cat: 'Data Validation', scenario: 'Change language to trigger buffer overflow', exp: 'Locale string length strictly checked' },
        { cat: 'CSRF', scenario: 'Change critical setting via CSRF', exp: 'SameSite cookies and CSRF tokens protect endpoints' },
        { cat: 'Business Logic', scenario: 'Downgrade subscription tier without penalty', exp: 'Proration logic handles downgrade correctly' },
        { cat: 'Information Disclosure', scenario: 'Settings API reveals integrated 3rd party keys', exp: 'No API keys sent to frontend' }
    ],
    'SecurityPage': [
        { cat: 'Authentication', scenario: 'Disable 2FA without current OTP', exp: '2FA modification requires verification' },
        { cat: 'Authorization', scenario: 'Revoke active sessions of other users', exp: 'Can only revoke own sessions' },
        { cat: 'Business Logic', scenario: 'Enable biometric login with compromised token', exp: 'Biometrics tied to hardware keystore' },
        { cat: 'Information Disclosure', scenario: 'View full IP addresses in login history', exp: 'IPs partially masked for privacy' },
        { cat: 'Data Validation', scenario: 'Submit extremely long string as recovery code', exp: 'Recovery codes validated strictly' }
    ],
    'HelpPage': [
        { cat: 'Data Validation', scenario: 'Submit empty support ticket to crash parser', exp: 'Empty submissions rejected gracefully' },
        { cat: 'Injection', scenario: 'XSS in support ticket description', exp: 'Support desk integration sanitizes inputs' },
        { cat: 'Authorization', scenario: 'Access internal knowledge base articles', exp: 'Internal articles require employee VPN' },
        { cat: 'Information Disclosure', scenario: 'File path disclosure in attachment error', exp: 'Generic upload error returned' },
        { cat: 'Business Logic', scenario: 'Spam creation of high priority tickets', exp: 'Rate limiting and CAPTCHA enforced' }
    ]
};

// Generate test suite file
let suiteContent = `// Auto-generated Security Test Suite
// Total tests: 180 (36 screens x 5 tests)

const securityTestSuite = [\n`;

let idCounter = 1;

for (const screen of screens) {
    let count = 1;
    const scenarios = screenScenarios[screen.name];
    if (!scenarios || scenarios.length !== 5) {
        console.error('Missing or invalid scenarios for', screen.name);
        process.exit(1);
    }

    for (const test of scenarios) {
        const testId = `TC-SEC-${screen.prefix}-${String(count).padStart(3, '0')}`;
        suiteContent += `  {
    testCaseId: '${testId}',
    module: '${screen.module}',
    screenName: '${screen.name}',
    securityCategory: '${test.cat}',
    scenarioName: '${test.scenario}',
    expectedResult: '${test.exp}'
  },\n`;
        count++;
        idCounter++;
    }
}

suiteContent += `];

export default securityTestSuite;
`;

fs.writeFileSync('security-test-suite.js', suiteContent);
console.log('Successfully generated security-test-suite.js with 180 tests.');
