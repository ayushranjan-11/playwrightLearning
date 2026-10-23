# 🎭 Playwright Learning & Automation Framework

A hands-on test automation and learning repository built with [Playwright](https://playwright.dev/) and Node.js. This project documents the progression from fundamental Playwright concepts (fixtures, locators, and browser contexts) to scalable test architecture patterns such as the **Page Object Model (POM)** and centralized configuration management using **ES Modules (ESM)** and **dotenv**.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Project Walkthrough & Structure](#-project-walkthrough--structure)
- [Prerequisites](#-prerequisites)
- [Project Setup](#-project-setup)
- [How to Use & Run Tests](#-how-to-use--run-tests)
- [Key Concepts & Best Practices](#-key-concepts--best-practices)
- [Useful Commands Cheat Sheet](#-useful-commands-cheat-sheet)

---

## 📖 About the Project

This repository serves as both a practical test suite and an evolving reference guide for end-to-end web testing with Playwright.

### Core Highlights:
- **Modern ES Modules (`"type": "module"`)**: Uses modern ECMAScript standard `import`/`export` syntax instead of legacy CommonJS (`require`).
- **Page Object Model (POM)**: Decouples UI element selectors and locators from automation test steps for clean and maintainable test suites.
- **Environment Management**: Integrates `dotenv` loaded globally through `playwright.config.js` to protect sensitive test credentials and manage environment URLs securely.
- **Real-world Testing**: Includes end-to-end tests for Rahul Shetty Academy's **EventHub Portal** alongside exploratory and syntax-practice specs.
- **Preconfigured Test Runner**: Configured out-of-the-box with Chromium in headed mode (`headless: false`), custom timeouts, and HTML reporting.

---

## 📂 Project Walkthrough & Structure

Below is the directory map of the project:

```text
playwrightLearning/
├── .env.example                               # Template for environment variables
├── .gitignore                                 # Git ignore rules (node_modules, reports, .env)
├── package.json                               # Project metadata, dependencies, and ESM config
├── playwright.config.js                       # Playwright configuration file (timeouts, reporters, browser settings)
├── tests/
│   ├── example.spec.js                        # Playwright starter demo tests
│   ├── ownWritten.spec.js                     # Hands-on practice with fixtures (page vs browser context), test.only, toHaveTitle
│   ├── revision.spec.js                       # Revision exercises exploring async/await and browser sessions
│   └── eventhub/                              # Structured modular testing suite
│       ├── Automation-Steps/
│       │   └── eventhub_Login.spec.js         # End-to-end login flow using POM locators
│       ├── helper-functions/
│       │   └── login_Helper.js                # Helper utilities and reusable actions
│       └── pages-locator/
│           └── login_page_locator.js          # POM class housing locators for the login page
└── tests-examples/
    └── demo-todo-app.spec.js                  # Standard Playwright reference suite (TodoMVC)
```

### Detailed Component Walkthrough:

1. **`playwright.config.js`**:
   - Central configuration for all test runs.
   - Loads environment variables globally via `import 'dotenv/config'`.
   - Sets test directory to `./tests`.
   - Configured with `headless: false` for visual debugging, test timeout of `60s`, assertion timeout of `5s`, and the `html` reporter.

2. **`tests/eventhub/` (POM Pattern)**:
   - **`pages-locator/login_page_locator.js`**: Encapsulates page elements (`usernameSelector`, `passwordSelector`, `loginButtonSelector`, `homeButtonSelector`) within a dedicated `loginPageLocator` class.
   - **`Automation-Steps/eventhub_Login.spec.js`**: Consumes locators from the page object class and performs end-to-end login actions and state assertions (`toBeEditable()`, `toBeEnabled()`, `toBeVisible()`).

3. **`tests/ownWritten.spec.js` & `tests/revision.spec.js`**:
   - Practical explorations comparing standard `{ page }` fixture vs manual `{ browser }` context creation (`browser.newContext()` and `context.newPage()`).
   - Demonstrations of `test.only`, title validations (`expect(page).toHaveTitle()`), and async operation handling.

4. **`.env` and `.env.example`**:
   - Defines credentials and URLs for test execution without committing sensitive data to source control.

---

## ⚙️ Prerequisites

Before you start, ensure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (bundled with Node.js)
- **Git**

Verify your installation:
```bash
node -v
npm -v
```

---

## 🚀 Project Setup

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd playwrightLearning
```

### 2. Install Project Dependencies
Install the required packages (`@playwright/test`, `dotenv`, `@types/node`):
```bash
npm install
```

### 3. Install Playwright Browsers
Download the required browser binaries (Chromium, Firefox, WebKit):
```bash
npx playwright install
```
*(Or install only Chromium if you wish to save disk space: `npx playwright install chromium`)*

### 4. Configure Environment Variables
Copy the `.env.example` file to create your local `.env`:

**Windows (PowerShell):**
```powershell
Copy-Item .env.example .env
```

**macOS / Linux:**
```bash
cp .env.example .env
```

Open `.env` and verify or update the test values:
```env
LOGIN_URL=https://eventhub.rahulshettyacademy.com/login
LOGIN_USERNAME=your_username@example.com
LOGIN_PASSWORD=your_password
```

---

## 🧪 How to Use & Run Tests

You can execute tests using the Playwright CLI (`npx playwright test`).

### 1. Run All Tests
Runs all tests across the `tests/` directory:
```bash
npx playwright test
```

### 2. Run a Specific Test File
To run only the EventHub Login test:
```bash
npx playwright test tests/eventhub/Automation-Steps/eventhub_Login.spec.js
```

To run exploratory tests:
```bash
npx playwright test tests/ownWritten.spec.js
```
> [!NOTE]
> `tests/ownWritten.spec.js` contains a `test.only` block. When running that file, only the marked test will execute unless `.only` is removed.

### 3. Run in Headless or Headed Mode
By default, `playwright.config.js` runs with `headless: false` (browser UI visible). To run in headless mode:
```bash
npx playwright test --headed=false
```

### 4. Interactive UI Mode
Playwright's UI Mode provides an interactive interface with time-travel debugging, watch mode, and selector inspection:
```bash
npx playwright test --ui
```

### 5. Debug Mode
Launch tests in step-by-step debug mode with the Playwright Inspector:
```bash
npx playwright test --debug
```

### 6. View Test HTML Report
After test execution, open the interactive HTML report to view test traces, screenshots, and logs:
```bash
npx playwright show-report
```

---

## 💡 Key Concepts & Best Practices

| Concept | Explanation | Example in Project |
| :--- | :--- | :--- |
| **ES Modules (ESM)** | Uses `import ... from ...` and `export default` for native module resolution. | `"type": "module"` in `package.json` |
| **Page Object Model** | Separates page locators and UI definitions from test assertions. | `login_page_locator.js` |
| **Global `dotenv` Loading** | Environment variables are loaded once at config level and accessible anywhere via `process.env`. | `import 'dotenv/config'` in `playwright.config.js` |
| **Playwright Fixtures** | Uses `{ page }` for isolated browser tabs or `{ browser }` for custom multi-context tests. | `ownWritten.spec.js` |
| **Web-First Assertions** | Uses auto-waiting assertions like `toBeVisible()`, `toBeEnabled()`, `toBeEditable()`. | `eventhub_Login.spec.js` |

---

## 📋 Useful Commands Cheat Sheet

| Command | Description |
| :--- | :--- |
| `npx playwright test` | Run all test specs |
| `npx playwright test <path-to-file>` | Run a single test file |
| `npx playwright test -g "test title"` | Run a test matching a title pattern |
| `npx playwright test --ui` | Open Playwright interactive UI runner |
| `npx playwright test --debug` | Step through tests in debug mode |
| `npx playwright show-report` | Open the generated HTML test report |
| `npx playwright codegen <url>` | Launch Playwright code generator to record user actions |

---

## 📄 License
This project is for educational and learning purposes under the [ISC](LICENSE) license.

