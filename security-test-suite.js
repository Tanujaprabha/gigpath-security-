// Auto-generated Security Test Suite
// Total tests: 180 (36 screens x 5 tests)

const securityTestSuite = [
  {
    testCaseId: 'TC-SEC-SPLASH-001',
    module: 'Auth',
    screenName: 'SplashScreen',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Examine API keys in background network calls',
    expectedResult: 'No sensitive keys exposed during load'
  },
  {
    testCaseId: 'TC-SEC-SPLASH-002',
    module: 'Auth',
    screenName: 'SplashScreen',
    securityCategory: 'Session Management',
    scenarioName: 'Verify silent token refresh on app launch',
    expectedResult: 'Tokens are refreshed securely without exposure'
  },
  {
    testCaseId: 'TC-SEC-SPLASH-003',
    module: 'Auth',
    screenName: 'SplashScreen',
    securityCategory: 'Data Leakage',
    scenarioName: 'Check for hardcoded credentials in bundle',
    expectedResult: 'No hardcoded credentials found'
  },
  {
    testCaseId: 'TC-SEC-SPLASH-004',
    module: 'Auth',
    screenName: 'SplashScreen',
    securityCategory: 'Platform Security',
    scenarioName: 'Validate root/jailbreak detection mechanisms',
    expectedResult: 'App detects compromised devices'
  },
  {
    testCaseId: 'TC-SEC-SPLASH-005',
    module: 'Auth',
    screenName: 'SplashScreen',
    securityCategory: 'Local Storage',
    scenarioName: 'Ensure no PII is loaded from unencrypted cache',
    expectedResult: 'All loaded data is encrypted'
  },
  {
    testCaseId: 'TC-SEC-WELCOME-001',
    module: 'Auth',
    screenName: 'WelcomeScreen',
    securityCategory: 'Authentication Bypass',
    scenarioName: 'Attempt to bypass welcome screen via deep linking',
    expectedResult: 'Unauthenticated users are redirected to login'
  },
  {
    testCaseId: 'TC-SEC-WELCOME-002',
    module: 'Auth',
    screenName: 'WelcomeScreen',
    securityCategory: 'UI Redressing',
    scenarioName: 'Clickjacking prevention check',
    expectedResult: 'Headers prevent UI redressing'
  },
  {
    testCaseId: 'TC-SEC-WELCOME-003',
    module: 'Auth',
    screenName: 'WelcomeScreen',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Validate version information leakage',
    expectedResult: 'No internal framework versions disclosed'
  },
  {
    testCaseId: 'TC-SEC-WELCOME-004',
    module: 'Auth',
    screenName: 'WelcomeScreen',
    securityCategory: 'Platform Security',
    scenarioName: 'Check app permissions requested on first load',
    expectedResult: 'Only minimal permissions requested'
  },
  {
    testCaseId: 'TC-SEC-WELCOME-005',
    module: 'Auth',
    screenName: 'WelcomeScreen',
    securityCategory: 'Network Security',
    scenarioName: 'Ensure all onboarding videos/assets load over HTTPS',
    expectedResult: 'No mixed content allowed'
  },
  {
    testCaseId: 'TC-SEC-LOGIN-001',
    module: 'Auth',
    screenName: 'LoginPage',
    securityCategory: 'Authentication',
    scenarioName: 'Brute Force Login Attempt',
    expectedResult: 'Account lockout after multiple failed attempts'
  },
  {
    testCaseId: 'TC-SEC-LOGIN-002',
    module: 'Auth',
    screenName: 'LoginPage',
    securityCategory: 'Injection',
    scenarioName: 'SQL Injection in Email Field',
    expectedResult: 'Input is sanitized, no DB error thrown'
  },
  {
    testCaseId: 'TC-SEC-LOGIN-003',
    module: 'Auth',
    screenName: 'LoginPage',
    securityCategory: 'Session Management',
    scenarioName: 'Session Timeout Validation',
    expectedResult: 'User logged out automatically after inactivity'
  },
  {
    testCaseId: 'TC-SEC-LOGIN-004',
    module: 'Auth',
    screenName: 'LoginPage',
    securityCategory: 'Authorization',
    scenarioName: 'Unauthorized Dashboard Access',
    expectedResult: 'Blocked without valid token'
  },
  {
    testCaseId: 'TC-SEC-LOGIN-005',
    module: 'Auth',
    screenName: 'LoginPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Password Enumeration Check',
    expectedResult: 'Generic error message for invalid credentials'
  },
  {
    testCaseId: 'TC-SEC-SIGNUP-001',
    module: 'Auth',
    screenName: 'SignupPage',
    securityCategory: 'Account Creation',
    scenarioName: 'Mass Registration Attack',
    expectedResult: 'Rate limiting prevents mass account creation'
  },
  {
    testCaseId: 'TC-SEC-SIGNUP-002',
    module: 'Auth',
    screenName: 'SignupPage',
    securityCategory: 'Validation',
    scenarioName: 'Weak Password Acceptance',
    expectedResult: 'Passwords must meet complexity requirements'
  },
  {
    testCaseId: 'TC-SEC-SIGNUP-003',
    module: 'Auth',
    screenName: 'SignupPage',
    securityCategory: 'Injection',
    scenarioName: 'XSS in Full Name field',
    expectedResult: 'Scripts are escaped properly'
  },
  {
    testCaseId: 'TC-SEC-SIGNUP-004',
    module: 'Auth',
    screenName: 'SignupPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Email Enumeration during signup',
    expectedResult: 'Generic response when email already exists'
  },
  {
    testCaseId: 'TC-SEC-SIGNUP-005',
    module: 'Auth',
    screenName: 'SignupPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Bypass Terms of Service acceptance',
    expectedResult: 'Registration fails without TOS flag'
  },
  {
    testCaseId: 'TC-SEC-FORGOT-001',
    module: 'Auth',
    screenName: 'ForgotPasswordPage',
    securityCategory: 'Rate Limiting',
    scenarioName: 'Flood password reset requests',
    expectedResult: 'Rate limit applied after 3 requests'
  },
  {
    testCaseId: 'TC-SEC-FORGOT-002',
    module: 'Auth',
    screenName: 'ForgotPasswordPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'User enumeration via reset password',
    expectedResult: 'Generic success message regardless of email existence'
  },
  {
    testCaseId: 'TC-SEC-FORGOT-003',
    module: 'Auth',
    screenName: 'ForgotPasswordPage',
    securityCategory: 'Token Security',
    scenarioName: 'Predictable reset token generation',
    expectedResult: 'Tokens are cryptographically secure and random'
  },
  {
    testCaseId: 'TC-SEC-FORGOT-004',
    module: 'Auth',
    screenName: 'ForgotPasswordPage',
    securityCategory: 'Session Management',
    scenarioName: 'Reset link expiration check',
    expectedResult: 'Links expire after 15 minutes'
  },
  {
    testCaseId: 'TC-SEC-FORGOT-005',
    module: 'Auth',
    screenName: 'ForgotPasswordPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Host header injection in reset email',
    expectedResult: 'Reset URL uses strictly defined host'
  },
  {
    testCaseId: 'TC-SEC-OTP-001',
    module: 'Auth',
    screenName: 'OtpVerificationPage',
    securityCategory: 'Authentication',
    scenarioName: 'OTP Brute Force',
    expectedResult: 'OTP locked after 3 failed attempts'
  },
  {
    testCaseId: 'TC-SEC-OTP-002',
    module: 'Auth',
    screenName: 'OtpVerificationPage',
    securityCategory: 'Session Management',
    scenarioName: 'OTP Replay Attack',
    expectedResult: 'OTP cannot be reused once successful'
  },
  {
    testCaseId: 'TC-SEC-OTP-003',
    module: 'Auth',
    screenName: 'OtpVerificationPage',
    securityCategory: 'Logic Flaw',
    scenarioName: 'Bypass OTP via parameter manipulation',
    expectedResult: 'Verification fails without valid OTP'
  },
  {
    testCaseId: 'TC-SEC-OTP-004',
    module: 'Auth',
    screenName: 'OtpVerificationPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'OTP leakage in API response',
    expectedResult: 'OTP is not returned in the initial API response'
  },
  {
    testCaseId: 'TC-SEC-OTP-005',
    module: 'Auth',
    screenName: 'OtpVerificationPage',
    securityCategory: 'Cryptography',
    scenarioName: 'Predictable OTP generation',
    expectedResult: 'OTP generated is sufficiently random'
  },
  {
    testCaseId: 'TC-SEC-RESET-001',
    module: 'Auth',
    screenName: 'ResetPasswordPage',
    securityCategory: 'Authentication',
    scenarioName: 'Reset password without valid token',
    expectedResult: 'Operation denied'
  },
  {
    testCaseId: 'TC-SEC-RESET-002',
    module: 'Auth',
    screenName: 'ResetPasswordPage',
    securityCategory: 'Validation',
    scenarioName: 'New password complexity check bypass',
    expectedResult: 'Backend enforces password policies'
  },
  {
    testCaseId: 'TC-SEC-RESET-003',
    module: 'Auth',
    screenName: 'ResetPasswordPage',
    securityCategory: 'Session Management',
    scenarioName: 'Invalidate all other sessions after reset',
    expectedResult: 'Existing sessions are terminated'
  },
  {
    testCaseId: 'TC-SEC-RESET-004',
    module: 'Auth',
    screenName: 'ResetPasswordPage',
    securityCategory: 'Logic Flaw',
    scenarioName: 'Token reuse after password reset',
    expectedResult: 'Token is invalidated immediately'
  },
  {
    testCaseId: 'TC-SEC-RESET-005',
    module: 'Auth',
    screenName: 'ResetPasswordPage',
    securityCategory: 'Authorization',
    scenarioName: 'Reset password for a different user (IDOR)',
    expectedResult: 'Reset is tied only to token owner'
  },
  {
    testCaseId: 'TC-SEC-DASH-001',
    module: 'Dashboard',
    screenName: 'DashboardPage',
    securityCategory: 'Authorization',
    scenarioName: 'Horizontal Privilege Escalation',
    expectedResult: 'Cannot view other user dashboards'
  },
  {
    testCaseId: 'TC-SEC-DASH-002',
    module: 'Dashboard',
    screenName: 'DashboardPage',
    securityCategory: 'Data Validation',
    scenarioName: 'GraphQL Introspection attack',
    expectedResult: 'Introspection is disabled'
  },
  {
    testCaseId: 'TC-SEC-DASH-003',
    module: 'Dashboard',
    screenName: 'DashboardPage',
    securityCategory: 'Session Management',
    scenarioName: 'Concurrent session limits',
    expectedResult: 'Oldest session is logged out if limit exceeded'
  },
  {
    testCaseId: 'TC-SEC-DASH-004',
    module: 'Dashboard',
    screenName: 'DashboardPage',
    securityCategory: 'Data Leakage',
    scenarioName: 'Sensitive metrics in URL parameters',
    expectedResult: 'No PII or financial data in URLs'
  },
  {
    testCaseId: 'TC-SEC-DASH-005',
    module: 'Dashboard',
    screenName: 'DashboardPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Forced browsing to admin dashboard',
    expectedResult: 'Access denied for non-admin roles'
  },
  {
    testCaseId: 'TC-SEC-CHAT-001',
    module: 'Chat',
    screenName: 'ChatPage',
    securityCategory: 'Injection',
    scenarioName: 'Prompt Injection Attempt',
    expectedResult: 'AI safely handles malicious prompts'
  },
  {
    testCaseId: 'TC-SEC-CHAT-002',
    module: 'Chat',
    screenName: 'ChatPage',
    securityCategory: 'Data Leakage',
    scenarioName: 'Sensitive Data Leakage Validation',
    expectedResult: 'PII in chat is masked/redacted'
  },
  {
    testCaseId: 'TC-SEC-CHAT-003',
    module: 'Chat',
    screenName: 'ChatPage',
    securityCategory: 'Authorization',
    scenarioName: 'Unauthorized Chat Access',
    expectedResult: 'Users can only view their own chat histories'
  },
  {
    testCaseId: 'TC-SEC-CHAT-004',
    module: 'Chat',
    screenName: 'ChatPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Oversized Payload Submission',
    expectedResult: 'Payloads over 5MB are rejected'
  },
  {
    testCaseId: 'TC-SEC-CHAT-005',
    module: 'Chat',
    screenName: 'ChatPage',
    securityCategory: 'Injection',
    scenarioName: 'Script Injection in Message',
    expectedResult: 'Messages are sanitized to prevent XSS'
  },
  {
    testCaseId: 'TC-SEC-BUDG_REC-001',
    module: 'Budget',
    screenName: 'BudgetRecommendationPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Manipulate AI recommendation parameters',
    expectedResult: 'Invalid parameters rejected'
  },
  {
    testCaseId: 'TC-SEC-BUDG_REC-002',
    module: 'Budget',
    screenName: 'BudgetRecommendationPage',
    securityCategory: 'Authorization',
    scenarioName: 'Access recommendations of another user',
    expectedResult: 'IDOR prevented'
  },
  {
    testCaseId: 'TC-SEC-BUDG_REC-003',
    module: 'Budget',
    screenName: 'BudgetRecommendationPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Apply negative budget limits',
    expectedResult: 'Negative values are rejected'
  },
  {
    testCaseId: 'TC-SEC-BUDG_REC-004',
    module: 'Budget',
    screenName: 'BudgetRecommendationPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'AI model prompt extraction',
    expectedResult: 'System prompt cannot be extracted'
  },
  {
    testCaseId: 'TC-SEC-BUDG_REC-005',
    module: 'Budget',
    screenName: 'BudgetRecommendationPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Repeated intensive recommendation generation',
    expectedResult: 'Rate limiting applied'
  },
  {
    testCaseId: 'TC-SEC-SUGGEST-001',
    module: 'Budget',
    screenName: 'SuggestionsPage',
    securityCategory: 'Injection',
    scenarioName: 'HTML Injection in feedback/suggestions',
    expectedResult: 'Input is safely encoded'
  },
  {
    testCaseId: 'TC-SEC-SUGGEST-002',
    module: 'Budget',
    screenName: 'SuggestionsPage',
    securityCategory: 'Authorization',
    scenarioName: 'Approve/reject suggestions as regular user',
    expectedResult: 'Only admins can alter suggestion state'
  },
  {
    testCaseId: 'TC-SEC-SUGGEST-003',
    module: 'Budget',
    screenName: 'SuggestionsPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Exceed maximum suggestion length',
    expectedResult: 'String truncated securely'
  },
  {
    testCaseId: 'TC-SEC-SUGGEST-004',
    module: 'Budget',
    screenName: 'SuggestionsPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Duplicate suggestion submission spam',
    expectedResult: 'Duplicate detection implemented'
  },
  {
    testCaseId: 'TC-SEC-SUGGEST-005',
    module: 'Budget',
    screenName: 'SuggestionsPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Discover hidden features via suggestion errors',
    expectedResult: 'Generic error messages displayed'
  },
  {
    testCaseId: 'TC-SEC-ADD_TX-001',
    module: 'Transaction',
    screenName: 'AddTransactionPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Negative transaction amount',
    expectedResult: 'Amount must be valid based on type'
  },
  {
    testCaseId: 'TC-SEC-ADD_TX-002',
    module: 'Transaction',
    screenName: 'AddTransactionPage',
    securityCategory: 'Injection',
    scenarioName: 'NoSQL Injection in transaction notes',
    expectedResult: 'Input sanitized, payload ineffective'
  },
  {
    testCaseId: 'TC-SEC-ADD_TX-003',
    module: 'Transaction',
    screenName: 'AddTransactionPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Submit transaction in past/future far dates',
    expectedResult: 'Date boundary constraints enforced'
  },
  {
    testCaseId: 'TC-SEC-ADD_TX-004',
    module: 'Transaction',
    screenName: 'AddTransactionPage',
    securityCategory: 'Authorization',
    scenarioName: 'Add transaction to another user account',
    expectedResult: 'User can only modify their own ledger'
  },
  {
    testCaseId: 'TC-SEC-ADD_TX-005',
    module: 'Transaction',
    screenName: 'AddTransactionPage',
    securityCategory: 'File Upload',
    scenarioName: 'Upload malicious receipt image (e.g. PHP file)',
    expectedResult: 'Only valid image types accepted, malware scanned'
  },
  {
    testCaseId: 'TC-SEC-EDIT_TX-001',
    module: 'Transaction',
    screenName: 'EditTransactionPage',
    securityCategory: 'Authorization',
    scenarioName: 'IDOR on transaction ID',
    expectedResult: 'Cannot edit transaction belonging to another user'
  },
  {
    testCaseId: 'TC-SEC-EDIT_TX-002',
    module: 'Transaction',
    screenName: 'EditTransactionPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Modify transaction status to bypass approval',
    expectedResult: 'Status field is ignored on update'
  },
  {
    testCaseId: 'TC-SEC-EDIT_TX-003',
    module: 'Transaction',
    screenName: 'EditTransactionPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Change currency to unsupported type',
    expectedResult: 'Validation error thrown'
  },
  {
    testCaseId: 'TC-SEC-EDIT_TX-004',
    module: 'Transaction',
    screenName: 'EditTransactionPage',
    securityCategory: 'Audit Logging',
    scenarioName: 'Verify audit logs on amount change',
    expectedResult: 'Changes are logged with timestamp and user'
  },
  {
    testCaseId: 'TC-SEC-EDIT_TX-005',
    module: 'Transaction',
    screenName: 'EditTransactionPage',
    securityCategory: 'Concurrency',
    scenarioName: 'Race condition on concurrent transaction edits',
    expectedResult: 'Latest edit wins or lock prevents collision'
  },
  {
    testCaseId: 'TC-SEC-TX_DET-001',
    module: 'Transaction',
    screenName: 'TransactionDetailPage',
    securityCategory: 'Authorization',
    scenarioName: 'Access detail via direct URL manipulation',
    expectedResult: 'Access denied if not owner'
  },
  {
    testCaseId: 'TC-SEC-TX_DET-002',
    module: 'Transaction',
    screenName: 'TransactionDetailPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Full credit card number visibility',
    expectedResult: 'Card numbers are masked (e.g., **** 1234)'
  },
  {
    testCaseId: 'TC-SEC-TX_DET-003',
    module: 'Transaction',
    screenName: 'TransactionDetailPage',
    securityCategory: 'Injection',
    scenarioName: 'Stored XSS in transaction metadata display',
    expectedResult: 'Metadata safely rendered'
  },
  {
    testCaseId: 'TC-SEC-TX_DET-004',
    module: 'Transaction',
    screenName: 'TransactionDetailPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Path traversal in receipt download',
    expectedResult: 'File paths are secured and randomized'
  },
  {
    testCaseId: 'TC-SEC-TX_DET-005',
    module: 'Transaction',
    screenName: 'TransactionDetailPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Delete transaction via GET request',
    expectedResult: 'State changes require POST/DELETE methods'
  },
  {
    testCaseId: 'TC-SEC-TX_LIST-001',
    module: 'Transaction',
    screenName: 'TransactionListPage',
    securityCategory: 'Data Validation',
    scenarioName: 'SQL Injection in search/filter parameters',
    expectedResult: 'Filters use parameterized queries'
  },
  {
    testCaseId: 'TC-SEC-TX_LIST-002',
    module: 'Transaction',
    screenName: 'TransactionListPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Request extremely large page sizes',
    expectedResult: 'Max pagination limit enforced (e.g., 100)'
  },
  {
    testCaseId: 'TC-SEC-TX_LIST-003',
    module: 'Transaction',
    screenName: 'TransactionListPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Export data of other users',
    expectedResult: 'Export contains only current user data'
  },
  {
    testCaseId: 'TC-SEC-TX_LIST-004',
    module: 'Transaction',
    screenName: 'TransactionListPage',
    securityCategory: 'Injection',
    scenarioName: 'CSV Injection in export functionality',
    expectedResult: 'CSV cells beginning with formulas are escaped'
  },
  {
    testCaseId: 'TC-SEC-TX_LIST-005',
    module: 'Transaction',
    screenName: 'TransactionListPage',
    securityCategory: 'Authorization',
    scenarioName: 'Bypass filter to see deleted transactions',
    expectedResult: 'Soft-deleted records are filtered at DB level'
  },
  {
    testCaseId: 'TC-SEC-ADD_REC-001',
    module: 'Recurring',
    screenName: 'AddRecurringExpensePage',
    securityCategory: 'Business Logic',
    scenarioName: 'Set recurrence interval to 0 or negative',
    expectedResult: 'Interval must be strictly positive'
  },
  {
    testCaseId: 'TC-SEC-ADD_REC-002',
    module: 'Recurring',
    screenName: 'AddRecurringExpensePage',
    securityCategory: 'Authorization',
    scenarioName: 'Assign recurring expense to admin group',
    expectedResult: 'Cannot assign expenses outside user scope'
  },
  {
    testCaseId: 'TC-SEC-ADD_REC-003',
    module: 'Recurring',
    screenName: 'AddRecurringExpensePage',
    securityCategory: 'Data Validation',
    scenarioName: 'Submit massive integer for expense amount',
    expectedResult: 'Integer overflow prevented'
  },
  {
    testCaseId: 'TC-SEC-ADD_REC-004',
    module: 'Recurring',
    screenName: 'AddRecurringExpensePage',
    securityCategory: 'Injection',
    scenarioName: 'Command Injection in cron job scheduling',
    expectedResult: 'Schedules managed securely without OS commands'
  },
  {
    testCaseId: 'TC-SEC-ADD_REC-005',
    module: 'Recurring',
    screenName: 'AddRecurringExpensePage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Create 10,000 recurring expenses',
    expectedResult: 'User quota limit enforced'
  },
  {
    testCaseId: 'TC-SEC-REC_LIST-001',
    module: 'Recurring',
    screenName: 'RecurringExpensesPage',
    securityCategory: 'Authorization',
    scenarioName: 'Cancel another user recurring expense',
    expectedResult: 'IDOR prevented'
  },
  {
    testCaseId: 'TC-SEC-REC_LIST-002',
    module: 'Recurring',
    screenName: 'RecurringExpensesPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Manipulate active/inactive state arbitrarily',
    expectedResult: 'State transitions validated'
  },
  {
    testCaseId: 'TC-SEC-REC_LIST-003',
    module: 'Recurring',
    screenName: 'RecurringExpensesPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Expose internal chron job IDs in API',
    expectedResult: 'Uses abstract UUIDs for frontend'
  },
  {
    testCaseId: 'TC-SEC-REC_LIST-004',
    module: 'Recurring',
    screenName: 'RecurringExpensesPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Pause expense via unprotected API endpoint',
    expectedResult: 'Authentication required'
  },
  {
    testCaseId: 'TC-SEC-REC_LIST-005',
    module: 'Recurring',
    screenName: 'RecurringExpensesPage',
    securityCategory: 'Concurrency',
    scenarioName: 'Race condition during auto-billing execution',
    expectedResult: 'Idempotency keys prevent double billing'
  },
  {
    testCaseId: 'TC-SEC-CAT_BRK-001',
    module: 'Reports',
    screenName: 'CategoryBreakdownPage',
    securityCategory: 'Data Validation',
    scenarioName: 'XSS via custom category names',
    expectedResult: 'Custom categories safely rendered'
  },
  {
    testCaseId: 'TC-SEC-CAT_BRK-002',
    module: 'Reports',
    screenName: 'CategoryBreakdownPage',
    securityCategory: 'Authorization',
    scenarioName: 'View breakdown for unassigned company categories',
    expectedResult: 'Restricted to user assigned categories'
  },
  {
    testCaseId: 'TC-SEC-CAT_BRK-003',
    module: 'Reports',
    screenName: 'CategoryBreakdownPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Request breakdown over 100-year span',
    expectedResult: 'Date range restricted to max 5 years'
  },
  {
    testCaseId: 'TC-SEC-CAT_BRK-004',
    module: 'Reports',
    screenName: 'CategoryBreakdownPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Extract precise aggregate values via timing attack',
    expectedResult: 'Constant time queries used'
  },
  {
    testCaseId: 'TC-SEC-CAT_BRK-005',
    module: 'Reports',
    screenName: 'CategoryBreakdownPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Bypass premium features lock',
    expectedResult: 'API validates subscription level'
  },
  {
    testCaseId: 'TC-SEC-MON_REP-001',
    module: 'Reports',
    screenName: 'MonthlyReportPage',
    securityCategory: 'Authorization',
    scenarioName: 'Download monthly report for another user (IDOR)',
    expectedResult: 'Access denied'
  },
  {
    testCaseId: 'TC-SEC-MON_REP-002',
    module: 'Reports',
    screenName: 'MonthlyReportPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Server-Side Request Forgery (SSRF) in PDF generation',
    expectedResult: 'External URLs blocked in PDF renderer'
  },
  {
    testCaseId: 'TC-SEC-MON_REP-003',
    module: 'Reports',
    screenName: 'MonthlyReportPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Cache control headers on report data',
    expectedResult: 'Cache-Control: no-store on sensitive reports'
  },
  {
    testCaseId: 'TC-SEC-MON_REP-004',
    module: 'Reports',
    screenName: 'MonthlyReportPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Access future month reports before generated',
    expectedResult: 'Future dates return 404/empty'
  },
  {
    testCaseId: 'TC-SEC-MON_REP-005',
    module: 'Reports',
    screenName: 'MonthlyReportPage',
    securityCategory: 'Injection',
    scenarioName: 'Template injection in report generation',
    expectedResult: 'Templates are locked and sanitized'
  },
  {
    testCaseId: 'TC-SEC-ADD_GOAL-001',
    module: 'Goals',
    screenName: 'AddGoalPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Goal Amount Parameter Tampering',
    expectedResult: 'Amount cannot exceed system limits'
  },
  {
    testCaseId: 'TC-SEC-ADD_GOAL-002',
    module: 'Goals',
    screenName: 'AddGoalPage',
    securityCategory: 'Authorization',
    scenarioName: 'Unauthorized Goal Creation',
    expectedResult: 'Cannot create goals for other users'
  },
  {
    testCaseId: 'TC-SEC-ADD_GOAL-003',
    module: 'Goals',
    screenName: 'AddGoalPage',
    securityCategory: 'Injection',
    scenarioName: 'Script Injection in Goal Name',
    expectedResult: 'XSS blocked on save'
  },
  {
    testCaseId: 'TC-SEC-ADD_GOAL-004',
    module: 'Goals',
    screenName: 'AddGoalPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Negative Value Manipulation',
    expectedResult: 'Negative target rejected'
  },
  {
    testCaseId: 'TC-SEC-ADD_GOAL-005',
    module: 'Goals',
    screenName: 'AddGoalPage',
    securityCategory: 'Authorization',
    scenarioName: 'Goal Ownership Validation',
    expectedResult: 'Strict checks on session ID vs payload ID'
  },
  {
    testCaseId: 'TC-SEC-EDIT_GOAL-001',
    module: 'Goals',
    screenName: 'EditGoalPage',
    securityCategory: 'Authorization',
    scenarioName: 'IDOR vulnerability on goal edit',
    expectedResult: 'Validation of ownership prior to save'
  },
  {
    testCaseId: 'TC-SEC-EDIT_GOAL-002',
    module: 'Goals',
    screenName: 'EditGoalPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Change goal target below currently saved amount',
    expectedResult: 'Logic validated gracefully'
  },
  {
    testCaseId: 'TC-SEC-EDIT_GOAL-003',
    module: 'Goals',
    screenName: 'EditGoalPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Modify goal deadline to past date',
    expectedResult: 'Past dates rejected'
  },
  {
    testCaseId: 'TC-SEC-EDIT_GOAL-004',
    module: 'Goals',
    screenName: 'EditGoalPage',
    securityCategory: 'Concurrency',
    scenarioName: 'Concurrent edits by shared owners',
    expectedResult: 'Optimistic locking handles conflicts'
  },
  {
    testCaseId: 'TC-SEC-EDIT_GOAL-005',
    module: 'Goals',
    screenName: 'EditGoalPage',
    securityCategory: 'Injection',
    scenarioName: 'NoSQL injection in goal update query',
    expectedResult: 'ORM parameterizes queries safely'
  },
  {
    testCaseId: 'TC-SEC-GOAL_DET-001',
    module: 'Goals',
    screenName: 'GoalDetailPage',
    securityCategory: 'Authorization',
    scenarioName: 'Access private goal via link sharing',
    expectedResult: 'Private goals require authentication'
  },
  {
    testCaseId: 'TC-SEC-GOAL_DET-002',
    module: 'Goals',
    screenName: 'GoalDetailPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Hidden field manipulation to see contributor details',
    expectedResult: 'API strictly filters response'
  },
  {
    testCaseId: 'TC-SEC-GOAL_DET-003',
    module: 'Goals',
    screenName: 'GoalDetailPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Delete goal without resolving funds',
    expectedResult: 'Funds must be reallocated before delete'
  },
  {
    testCaseId: 'TC-SEC-GOAL_DET-004',
    module: 'Goals',
    screenName: 'GoalDetailPage',
    securityCategory: 'Injection',
    scenarioName: 'Stored XSS in goal description',
    expectedResult: 'Description rendered as text/safe HTML'
  },
  {
    testCaseId: 'TC-SEC-GOAL_DET-005',
    module: 'Goals',
    screenName: 'GoalDetailPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Exceed maximum integer for goal progress',
    expectedResult: 'Boundary checks applied'
  },
  {
    testCaseId: 'TC-SEC-GOAL_PRG-001',
    module: 'Goals',
    screenName: 'GoalProgressPage',
    securityCategory: 'Authorization',
    scenarioName: 'Update progress of another user goal',
    expectedResult: 'Access denied'
  },
  {
    testCaseId: 'TC-SEC-GOAL_PRG-002',
    module: 'Goals',
    screenName: 'GoalProgressPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Submit progress exceeding 100%',
    expectedResult: 'Progress capped at 100% or overflow handled'
  },
  {
    testCaseId: 'TC-SEC-GOAL_PRG-003',
    module: 'Goals',
    screenName: 'GoalProgressPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Manipulate progress via replay attacks',
    expectedResult: 'Idempotent updates'
  },
  {
    testCaseId: 'TC-SEC-GOAL_PRG-004',
    module: 'Goals',
    screenName: 'GoalProgressPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Exposure of full transaction history in progress API',
    expectedResult: 'Only aggregated data sent'
  },
  {
    testCaseId: 'TC-SEC-GOAL_PRG-005',
    module: 'Goals',
    screenName: 'GoalProgressPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Flood progress updates to degrade DB',
    expectedResult: 'Rate limiting on progress updates'
  },
  {
    testCaseId: 'TC-SEC-GOAL_LIST-001',
    module: 'Goals',
    screenName: 'GoalsListPage',
    securityCategory: 'Data Validation',
    scenarioName: 'SQL injection in goal sorting criteria',
    expectedResult: 'Sorting criteria strictly whitelisted'
  },
  {
    testCaseId: 'TC-SEC-GOAL_LIST-002',
    module: 'Goals',
    screenName: 'GoalsListPage',
    securityCategory: 'Authorization',
    scenarioName: 'View archived goals without permission',
    expectedResult: 'Archived goals only visible to owner'
  },
  {
    testCaseId: 'TC-SEC-GOAL_LIST-003',
    module: 'Goals',
    screenName: 'GoalsListPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Pagination token predictable',
    expectedResult: 'Opaque/encrypted cursor pagination used'
  },
  {
    testCaseId: 'TC-SEC-GOAL_LIST-004',
    module: 'Goals',
    screenName: 'GoalsListPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Bypass max active goals limit',
    expectedResult: 'Enforced at the database transaction level'
  },
  {
    testCaseId: 'TC-SEC-GOAL_LIST-005',
    module: 'Goals',
    screenName: 'GoalsListPage',
    securityCategory: 'Injection',
    scenarioName: 'XSS in goal list rendering',
    expectedResult: 'All goal titles HTML escaped'
  },
  {
    testCaseId: 'TC-SEC-CASH_FLW-001',
    module: 'Finance',
    screenName: 'CashFlowPage',
    securityCategory: 'Authorization',
    scenarioName: 'View cash flow of different tenant/organization',
    expectedResult: 'Tenant isolation enforced'
  },
  {
    testCaseId: 'TC-SEC-CASH_FLW-002',
    module: 'Finance',
    screenName: 'CashFlowPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Parameter pollution in date ranges',
    expectedResult: 'First/last parameter prioritized and validated'
  },
  {
    testCaseId: 'TC-SEC-CASH_FLW-003',
    module: 'Finance',
    screenName: 'CashFlowPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'API exposes raw bank sync credentials',
    expectedResult: 'Tokens are never sent to frontend'
  },
  {
    testCaseId: 'TC-SEC-CASH_FLW-004',
    module: 'Finance',
    screenName: 'CashFlowPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Trigger multiple syncs to exhaust API limits',
    expectedResult: 'Sync debounced and rate limited'
  },
  {
    testCaseId: 'TC-SEC-CASH_FLW-005',
    module: 'Finance',
    screenName: 'CashFlowPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Calculate cashflow for 10 million transactions',
    expectedResult: 'Query timeout and limits enforced'
  },
  {
    testCaseId: 'TC-SEC-FIN_HLTH-001',
    module: 'Finance',
    screenName: 'FinancialHealthPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Tamper with health score calculation inputs',
    expectedResult: 'Score calculated securely on backend'
  },
  {
    testCaseId: 'TC-SEC-FIN_HLTH-002',
    module: 'Finance',
    screenName: 'FinancialHealthPage',
    securityCategory: 'Authorization',
    scenarioName: 'Access health metrics of administrative accounts',
    expectedResult: 'Strict RBAC checks'
  },
  {
    testCaseId: 'TC-SEC-FIN_HLTH-003',
    module: 'Finance',
    screenName: 'FinancialHealthPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Manipulate credit score integrations',
    expectedResult: 'External API calls signed and verified'
  },
  {
    testCaseId: 'TC-SEC-FIN_HLTH-004',
    module: 'Finance',
    screenName: 'FinancialHealthPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Leakage of external credit report data',
    expectedResult: 'Data masked and securely transmitted'
  },
  {
    testCaseId: 'TC-SEC-FIN_HLTH-005',
    module: 'Finance',
    screenName: 'FinancialHealthPage',
    securityCategory: 'Injection',
    scenarioName: 'XSS in health tips generated by AI',
    expectedResult: 'Markdown parsed securely'
  },
  {
    testCaseId: 'TC-SEC-INSIGHTS-001',
    module: 'Finance',
    screenName: 'InsightsOverviewPage',
    securityCategory: 'Authorization',
    scenarioName: 'Bypass paywall for premium insights',
    expectedResult: 'Paywall enforced server-side'
  },
  {
    testCaseId: 'TC-SEC-INSIGHTS-002',
    module: 'Finance',
    screenName: 'InsightsOverviewPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Send malicious payload to tracking pixel',
    expectedResult: 'Analytics endpoints sanitize inputs'
  },
  {
    testCaseId: 'TC-SEC-INSIGHTS-003',
    module: 'Finance',
    screenName: 'InsightsOverviewPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Exposure of peer comparison data (PII)',
    expectedResult: 'Peer data is strictly anonymized'
  },
  {
    testCaseId: 'TC-SEC-INSIGHTS-004',
    module: 'Finance',
    screenName: 'InsightsOverviewPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Force generation of cached insights',
    expectedResult: 'Cache invalidation is protected'
  },
  {
    testCaseId: 'TC-SEC-INSIGHTS-005',
    module: 'Finance',
    screenName: 'InsightsOverviewPage',
    securityCategory: 'Injection',
    scenarioName: 'Stored XSS in insight feedback comments',
    expectedResult: 'Comments are stripped of tags'
  },
  {
    testCaseId: 'TC-SEC-PREDICT-001',
    module: 'Finance',
    screenName: 'PredictionsPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Submit fabricated historical data for predictions',
    expectedResult: 'System only uses verified ledger data'
  },
  {
    testCaseId: 'TC-SEC-PREDICT-002',
    module: 'Finance',
    screenName: 'PredictionsPage',
    securityCategory: 'Authorization',
    scenarioName: 'Execute prediction model retraining as user',
    expectedResult: 'Training endpoints are internal only'
  },
  {
    testCaseId: 'TC-SEC-PREDICT-003',
    module: 'Finance',
    screenName: 'PredictionsPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Request ultra-high resolution predictions',
    expectedResult: 'Resolution bounded by system configuration'
  },
  {
    testCaseId: 'TC-SEC-PREDICT-004',
    module: 'Finance',
    screenName: 'PredictionsPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Model inversion attack to extract training data',
    expectedResult: 'API only provides high-level inferences'
  },
  {
    testCaseId: 'TC-SEC-PREDICT-005',
    module: 'Finance',
    screenName: 'PredictionsPage',
    securityCategory: 'Data Validation',
    scenarioName: 'SSRF via external data source integration',
    expectedResult: 'External URLs restricted by allowlist'
  },
  {
    testCaseId: 'TC-SEC-WK_REP-001',
    module: 'Reports',
    screenName: 'WeeklyReportPage',
    securityCategory: 'Authorization',
    scenarioName: 'IDOR on weekly report generation',
    expectedResult: 'Reports bound to authenticated session'
  },
  {
    testCaseId: 'TC-SEC-WK_REP-002',
    module: 'Reports',
    screenName: 'WeeklyReportPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Resend weekly email 100 times',
    expectedResult: 'Email dispatch rate limited'
  },
  {
    testCaseId: 'TC-SEC-WK_REP-003',
    module: 'Reports',
    screenName: 'WeeklyReportPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Unsubscribe link lacks CSRF protection',
    expectedResult: 'Unsubscribe uses secure token'
  },
  {
    testCaseId: 'TC-SEC-WK_REP-004',
    module: 'Reports',
    screenName: 'WeeklyReportPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Tamper with report timezone offset',
    expectedResult: 'Offset validated against known tz database'
  },
  {
    testCaseId: 'TC-SEC-WK_REP-005',
    module: 'Reports',
    screenName: 'WeeklyReportPage',
    securityCategory: 'Injection',
    scenarioName: 'XSS via malicious category names in report',
    expectedResult: 'Category names sanitized in email template'
  },
  {
    testCaseId: 'TC-SEC-PROF-001',
    module: 'Settings',
    screenName: 'ProfilePage',
    securityCategory: 'Authorization',
    scenarioName: 'View private profile fields of another user',
    expectedResult: 'Access strictly limited to public info'
  },
  {
    testCaseId: 'TC-SEC-PROF-002',
    module: 'Settings',
    screenName: 'ProfilePage',
    securityCategory: 'Data Validation',
    scenarioName: 'Upload 100MB profile picture',
    expectedResult: 'File size restricted to 5MB max'
  },
  {
    testCaseId: 'TC-SEC-PROF-003',
    module: 'Settings',
    screenName: 'ProfilePage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Examine API response for hidden user status',
    expectedResult: 'No internal flags exposed'
  },
  {
    testCaseId: 'TC-SEC-PROF-004',
    module: 'Settings',
    screenName: 'ProfilePage',
    securityCategory: 'Injection',
    scenarioName: 'Stored XSS in bio field',
    expectedResult: 'Bio is sanitized and escaped'
  },
  {
    testCaseId: 'TC-SEC-PROF-005',
    module: 'Settings',
    screenName: 'ProfilePage',
    securityCategory: 'Business Logic',
    scenarioName: 'Bypass email verification check',
    expectedResult: 'Unverified emails restrict critical features'
  },
  {
    testCaseId: 'TC-SEC-EDIT_PROF-001',
    module: 'Settings',
    screenName: 'EditProfilePage',
    securityCategory: 'Authorization',
    scenarioName: 'Change email without current password validation',
    expectedResult: 'Re-authentication required for sensitive changes'
  },
  {
    testCaseId: 'TC-SEC-EDIT_PROF-002',
    module: 'Settings',
    screenName: 'EditProfilePage',
    securityCategory: 'Data Validation',
    scenarioName: 'Bypass client-side phone number validation',
    expectedResult: 'Backend strictly validates format'
  },
  {
    testCaseId: 'TC-SEC-EDIT_PROF-003',
    module: 'Settings',
    screenName: 'EditProfilePage',
    securityCategory: 'Business Logic',
    scenarioName: 'Update role parameter to "admin"',
    expectedResult: 'Role updates ignored by user endpoint'
  },
  {
    testCaseId: 'TC-SEC-EDIT_PROF-004',
    module: 'Settings',
    screenName: 'EditProfilePage',
    securityCategory: 'CSRF',
    scenarioName: 'Cross-Site Request Forgery on profile update',
    expectedResult: 'CSRF tokens validated successfully'
  },
  {
    testCaseId: 'TC-SEC-EDIT_PROF-005',
    module: 'Settings',
    screenName: 'EditProfilePage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Verbose error on taken usernames',
    expectedResult: 'Standardized error prevents timing attacks'
  },
  {
    testCaseId: 'TC-SEC-PREF-001',
    module: 'Settings',
    screenName: 'PreferencesPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Submit invalid JSON for preferences blob',
    expectedResult: 'Schema validation rejects bad payloads'
  },
  {
    testCaseId: 'TC-SEC-PREF-002',
    module: 'Settings',
    screenName: 'PreferencesPage',
    securityCategory: 'Authorization',
    scenarioName: 'Update system-wide preferences',
    expectedResult: 'Only user-scoped preferences updated'
  },
  {
    testCaseId: 'TC-SEC-PREF-003',
    module: 'Settings',
    screenName: 'PreferencesPage',
    securityCategory: 'Injection',
    scenarioName: 'NoSQL injection in theme settings',
    expectedResult: 'Theme strings strictly matched to enum'
  },
  {
    testCaseId: 'TC-SEC-PREF-004',
    module: 'Settings',
    screenName: 'PreferencesPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Enable restricted beta features',
    expectedResult: 'Feature flags enforced server-side'
  },
  {
    testCaseId: 'TC-SEC-PREF-005',
    module: 'Settings',
    screenName: 'PreferencesPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Leakage of marketing opt-in statuses',
    expectedResult: 'Opt-in stats kept private'
  },
  {
    testCaseId: 'TC-SEC-NOTIF-001',
    module: 'Settings',
    screenName: 'NotificationsPage',
    securityCategory: 'Authorization',
    scenarioName: 'Mark all notifications read for another user',
    expectedResult: 'IDOR mitigated'
  },
  {
    testCaseId: 'TC-SEC-NOTIF-002',
    module: 'Settings',
    screenName: 'NotificationsPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Send push notification to arbitrary device token',
    expectedResult: 'Tokens bound to user sessions'
  },
  {
    testCaseId: 'TC-SEC-NOTIF-003',
    module: 'Settings',
    screenName: 'NotificationsPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Delete un-deletable system alerts',
    expectedResult: 'System alerts protected from deletion'
  },
  {
    testCaseId: 'TC-SEC-NOTIF-004',
    module: 'Settings',
    screenName: 'NotificationsPage',
    securityCategory: 'Injection',
    scenarioName: 'HTML injection in notification title',
    expectedResult: 'Titles rendered as plain text'
  },
  {
    testCaseId: 'TC-SEC-NOTIF-005',
    module: 'Settings',
    screenName: 'NotificationsPage',
    securityCategory: 'Denial of Service',
    scenarioName: 'Generate massive notification spam',
    expectedResult: 'Event deduplication and rate limits active'
  },
  {
    testCaseId: 'TC-SEC-SETT-001',
    module: 'Settings',
    screenName: 'SettingsPage',
    securityCategory: 'Authorization',
    scenarioName: 'Access developer menu via hidden clicks',
    expectedResult: 'Developer menu disabled in production builds'
  },
  {
    testCaseId: 'TC-SEC-SETT-002',
    module: 'Settings',
    screenName: 'SettingsPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Change language to trigger buffer overflow',
    expectedResult: 'Locale string length strictly checked'
  },
  {
    testCaseId: 'TC-SEC-SETT-003',
    module: 'Settings',
    screenName: 'SettingsPage',
    securityCategory: 'CSRF',
    scenarioName: 'Change critical setting via CSRF',
    expectedResult: 'SameSite cookies and CSRF tokens protect endpoints'
  },
  {
    testCaseId: 'TC-SEC-SETT-004',
    module: 'Settings',
    screenName: 'SettingsPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Downgrade subscription tier without penalty',
    expectedResult: 'Proration logic handles downgrade correctly'
  },
  {
    testCaseId: 'TC-SEC-SETT-005',
    module: 'Settings',
    screenName: 'SettingsPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'Settings API reveals integrated 3rd party keys',
    expectedResult: 'No API keys sent to frontend'
  },
  {
    testCaseId: 'TC-SEC-SEC-001',
    module: 'Settings',
    screenName: 'SecurityPage',
    securityCategory: 'Authentication',
    scenarioName: 'Disable 2FA without current OTP',
    expectedResult: '2FA modification requires verification'
  },
  {
    testCaseId: 'TC-SEC-SEC-002',
    module: 'Settings',
    screenName: 'SecurityPage',
    securityCategory: 'Authorization',
    scenarioName: 'Revoke active sessions of other users',
    expectedResult: 'Can only revoke own sessions'
  },
  {
    testCaseId: 'TC-SEC-SEC-003',
    module: 'Settings',
    screenName: 'SecurityPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Enable biometric login with compromised token',
    expectedResult: 'Biometrics tied to hardware keystore'
  },
  {
    testCaseId: 'TC-SEC-SEC-004',
    module: 'Settings',
    screenName: 'SecurityPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'View full IP addresses in login history',
    expectedResult: 'IPs partially masked for privacy'
  },
  {
    testCaseId: 'TC-SEC-SEC-005',
    module: 'Settings',
    screenName: 'SecurityPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Submit extremely long string as recovery code',
    expectedResult: 'Recovery codes validated strictly'
  },
  {
    testCaseId: 'TC-SEC-HELP-001',
    module: 'Settings',
    screenName: 'HelpPage',
    securityCategory: 'Data Validation',
    scenarioName: 'Submit empty support ticket to crash parser',
    expectedResult: 'Empty submissions rejected gracefully'
  },
  {
    testCaseId: 'TC-SEC-HELP-002',
    module: 'Settings',
    screenName: 'HelpPage',
    securityCategory: 'Injection',
    scenarioName: 'XSS in support ticket description',
    expectedResult: 'Support desk integration sanitizes inputs'
  },
  {
    testCaseId: 'TC-SEC-HELP-003',
    module: 'Settings',
    screenName: 'HelpPage',
    securityCategory: 'Authorization',
    scenarioName: 'Access internal knowledge base articles',
    expectedResult: 'Internal articles require employee VPN'
  },
  {
    testCaseId: 'TC-SEC-HELP-004',
    module: 'Settings',
    screenName: 'HelpPage',
    securityCategory: 'Information Disclosure',
    scenarioName: 'File path disclosure in attachment error',
    expectedResult: 'Generic upload error returned'
  },
  {
    testCaseId: 'TC-SEC-HELP-005',
    module: 'Settings',
    screenName: 'HelpPage',
    securityCategory: 'Business Logic',
    scenarioName: 'Spam creation of high priority tickets',
    expectedResult: 'Rate limiting and CAPTCHA enforced'
  },
];

export default securityTestSuite;
