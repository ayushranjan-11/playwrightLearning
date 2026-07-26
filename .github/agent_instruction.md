# Playwright + JavaScript Roadmap
### From Selenium/Java to job-ready

**How to use this guide:** each phase lists what to learn, a hands-on task to lock it in, and a "done when" checkpoint. It's not tied to one course or book — use it as a checklist against *any* resource (official docs, a course, an article, a book). Check off phases as you go. Time estimates assume roughly 30 min–2 hr/day, averaging ~1 hr.

---

## First: the mental model shift

You're not learning test automation from scratch — you're re-mapping concepts you already know onto new syntax plus a couple of genuinely new ideas. Keep this table open for the first few weeks:

| Selenium (Java) | Playwright (JS) | Notes |
|---|---|---|
| WebDriver instance | `Browser` → `BrowserContext` → `Page` | A context is an isolated "incognito" session — cheap to spin up many |
| Explicit/Implicit Waits, `WebDriverWait` | Auto-waiting, built into every action & `expect` | You'll delete most of the waiting code you're used to writing |
| `By.id`, `By.xpath`, `By.cssSelector` | `getByRole()`, `getByText()`, `getByLabel()`, `getByTestId()`, `locator()` | Playwright pushes you toward accessibility-first locators |
| TestNG / JUnit | Playwright Test (built-in runner) | No wiring a separate runner + assertion library + reporter |
| `@BeforeMethod` / `@AfterMethod` | `test.beforeEach()` / `test.afterEach()` | Same idea, new syntax |
| Page Factory / POM | POM + **fixtures** | Fixtures are the one concept with no real Selenium equivalent — budget real time here |
| Selenium Grid | Built-in parallel workers + sharding | No separate grid infrastructure to run in parallel |
| Stale element exceptions | Locators re-query on every action | A structural fix, not a workaround, for one of Selenium's most annoying problems |
| Selenium IDE (limited) | `codegen`, Trace Viewer, UI Mode | Genuinely useful tooling, worth learning early |

---

## Phase 0 — Environment (~1–2 hrs, one sitting)
**Learn:** Node.js/npm basics, what `npm init playwright@latest` scaffolds.
**Do:** Install Node LTS → run `npm init playwright@latest` in a fresh folder → run `npx playwright test` → open the HTML report (`npx playwright show-report`).
**Done when:** you can explain, in your own words, what `playwright.config.js`, `tests/`, and `test-results/` each do.

## Phase 1 — JavaScript fundamentals, from scratch (~10–15 hrs)
No JS background needed going in — but you're not starting like a total beginner either. You already think in variables, functions, loops, and conditionals from Java; this phase is mostly "same ideas, new syntax," which moves faster than it would for someone learning to program for the first time.

**Learn:**
- Variables: `let`, `const` (skip `var` — it's legacy; modern material teaches `let`/`const` from the start)
- Data types: strings, numbers, booleans, `null`/`undefined` — and that JS is dynamically typed, no declaring `int`/`String` like Java
- Operators: arithmetic, comparison (`===` vs `==` — always use `===`), logical
- Control flow: `if`/`else`, `switch`, `for` and `while` loops
- Functions: declarations, parameters/return values — and that functions in JS are values you can pass around, closer to a Java lambda than a Java method
- Arrays: creating, indexing, basic methods (`push`, `pop`, `.length`)
- Objects: creating, properties, dot vs. bracket notation — think loose, schema-less versions of a Java class instance
- Scope basics: block scope (`{}`) vs. function scope

**Do:** work through small scripts, not just reading — a temperature converter, a script that finds the largest number in an array, a simple grade calculator using if/else. Type every example yourself instead of copy-pasting; the syntax needs to become muscle memory before Phase 2.
**Done when:** you can write a 15–20 line script from a blank file — a function with a loop and a conditional — without looking up basic syntax.

## Phase 2 — Modern JavaScript + async (~5–7 hrs)
The parts Playwright leans on constantly:
- Arrow functions, template literals
- Destructuring, spread/rest
- **Promises and `async`/`await`** — the one non-negotiable. Nearly every Playwright line is `await`ed
- `try/catch` with async code
- `import`/`export` (ES modules)
- Array methods: `map`, `filter`, `forEach`, `find` (useful later for data-driven tests)

**Do:** write 3–4 small async scripts — a function that "fetches" mock data after a delay and awaits it, a script that loops over an array of objects and filters it. Don't move on until `async/await` feels boring, not scary.
**Done when:** you can read a random Playwright example online and understand *why* every line has `await` in front of it.

## Phase 3 — First real tests (~3–5 hrs)
**Learn:** `test()`, `test.describe()`, `expect()`, `beforeEach`/`afterEach`, headed vs. headless, `--debug`, and especially **UI Mode** (`npx playwright test --ui`) — probably the single biggest quality-of-life jump from Selenium.
**Do:** against a stable public practice site (e.g. `the-internet.herokuapp.com`, a long-standing QA-community standard), write 4–5 tests covering a login form and a page with dynamic content.
**Done when:** you're reaching for UI Mode by habit, not console logs, to debug a failing test.

## Phase 4 — Locators, properly (~3–4 hrs)
**Learn:** `getByRole/Text/Label/Placeholder/TestId` and why they're preferred; `locator()` for CSS/XPath when you need it; chaining/filtering (`.filter()`, `.first()`, `.nth()`); `codegen` for locator discovery.
**Do:** run `npx playwright codegen <url>` against your practice site, record a flow, then rewrite the generated locators using `getBy*` where possible.
**Done when:** your default instinct for a new element is "what role or text does this expose," not "what's its CSS selector."

## Phase 5 — Actions, waiting, assertions (~3–4 hrs)
**Learn:** the full action set (drag-drop, file upload/download, keyboard, dialogs); web-first assertions and their auto-retry behavior; `expect.soft`; iframes, new tabs/popups, multi-page flows.
**Do:** build one test with a file upload and one that handles a popup or new tab.
**Done when:** you haven't written a manual `waitForTimeout` in any test — it's almost always avoidable.

## Phase 6 — Fixtures & test organization (~4–6 hrs) — the genuinely new concept
**Learn:** built-in fixtures (`page`, `context`, `browser`), writing **custom fixtures**, `test.use()`, tags/`--grep`, global setup, retries, parallel workers.
**Do:** take your Phase 3–5 tests and refactor shared setup (login, navigation) into a custom fixture.
**Done when:** you can explain fixtures to someone using a dependency-injection analogy — that's essentially what they are.

## Phase 7 — Page Object Model, Playwright-style (~4–5 hrs)
**Learn:** how Playwright POM differs from Selenium's — locators are declared fresh each time rather than cached, which is *why* stale-element errors mostly disappear.
**Do:** build a small POM framework (3–5 pages, e.g. login → search → checkout) on a demo site, wired through your Phase 6 fixtures.
**Done when:** you have a mini framework you'd be comfortable showing in an interview.

## Phase 8 — API testing & network mocking (~3–4 hrs)
**Learn:** the `request` context for pure API calls; combining API setup with UI verification; `page.route()` for intercepting/mocking responses.
**Do:** write one pure-API test and one UI test that mocks a slow or failed network response.
**Done when:** you can explain when you'd seed data via API vs. drive it through the UI.

## Phase 9 — CI, reporting, and debugging tools (~3–4 hrs)
**Learn:** Trace Viewer (`npx playwright show-trace`) in depth; a basic GitHub Actions pipeline (the official docs have a ready template); the HTML reporter (and Allure, if you want parity with Java-world reporting you're used to).
**Do:** get one GitHub Actions workflow running your suite on push.
**Done when:** when a test fails, your first move is opening the trace — not re-running it and hoping.

## Phase 10 — Interview-specific prep (~4–6 hrs, ongoing)
Since this is the actual driver: interview questions for this stack cluster heavily around locators, waits, fixtures, POM, API testing, and explicit **Playwright-vs-Selenium comparisons** — Phase 0's table isn't just for you, it's interview material.
- Be ready to explain, out loud, without notes: auto-waiting vs. explicit waits, what a fixture is and why it beats `@Before` hooks, your locator priority order, and one real debugging story using Trace Viewer.
- Have one polished repo ready to screen-share: clean POM structure, a couple of API tests, a CI badge, a decent README.
- Skim what "AI-assisted testing" means in Playwright's current ecosystem (self-healing locators, agent-assisted test generation) — you don't need to be an expert, but it's increasingly a talking point in interviews right now, and a reasonable answer to have ready for "where do you see this going."

---

## Realistic timeline
Starting JavaScript from zero meaningfully extends things versus a quick refresher — worth planning around honestly rather than optimistically:
- **Fast track** (interview soon, ~1.5–2 hrs on your bigger days): **4–5 weeks**
- **Comfortable pace** (~45 min–1 hr average): **8–10 weeks**

Phases 0–5 are the non-negotiable core (through actions & assertions). If your interview lands closer than the fast-track estimate, prioritize getting solidly through Phase 5, and be upfront that you're newer to JavaScript but bring real Selenium/Java automation depth — that's a common, credible story for a Selenium engineer making this move, not something to hide.

---

## What to look for in any resource (so this works with books, articles, or courses)

**For Phase 1 (JavaScript fundamentals) specifically:**
- Confirm it teaches `let`/`const` and modern syntax by default, not `var`-first — that's a sign the content is outdated
- Look for something that carries you to async/await, not just basic syntax, so Phase 2 has something to build on
- Well-regarded free starting points: Scrimba's "Learn JavaScript" and freeCodeCamp's JavaScript curriculum (the latter comes with a certificate, if that's useful on a resume) are both solid interactive options; javascript.info and MDN work well as references to search when you're stuck. Test Automation University also runs a short "Introduction to JavaScript" course built specifically as a lead-in to their Playwright track.

**For everything from Phase 2 onward (Playwright itself):**
- The **built-in Playwright Test runner**, not just the raw `playwright` library (some older content only covers the library)
- `getBy*` locators as the recommended approach, not only CSS/XPath
- Fixtures, not only vanilla `beforeEach`
- Content published or updated recently — Playwright ships frequently, and locator/tooling recommendations have shifted over time

**Anchors worth trusting, regardless of format:**
- **playwright.dev** official docs — the ground truth, always current, free
- **Test Automation University** (Applitools, free) — dedicated "Introduction to Playwright," "Playwright with JavaScript," and "Advanced Playwright" tracks that fit your background well
- Playwright's own GitHub repo — real example test suites worth reading

Worth knowing: there isn't a single standout dedicated Playwright *book* the way there is for older tools like Selenium — the ecosystem still leans on official docs plus structured online courses.

---

## Common Selenium habits to unlearn
- Reaching for explicit waits out of habit — try without first, add waiting back only if something is genuinely unusual
- Caching a located element in a variable and reusing it — re-locate instead; it's cheap and avoids staleness
- Building your own retry/reporting glue — Playwright Test already has it
- Deep Page Object inheritance hierarchies — Playwright favors composition via fixtures over inheritance chains

---

## Quick checklist
- [ ] Phase 0 — Environment set up, ran the default tests
- [ ] Phase 1 — Comfortable writing plain JS: functions, loops, conditionals, arrays
- [ ] Phase 2 — Comfortable with async/await
- [ ] Phase 3 — 5 tests written, using UI Mode
- [ ] Phase 4 — Using getBy* locators by default
- [ ] Phase 5 — No manual waitForTimeout anywhere
- [ ] Phase 6 — Built a custom fixture
- [ ] Phase 7 — Mini POM framework done
- [ ] Phase 8 — One API test, one mocked test
- [ ] Phase 9 — CI pipeline running, comfortable with Trace Viewer
- [ ] Phase 10 — Can explain Playwright vs. Selenium out loud, repo ready to show

---

*Questions welcome any time — happy to go deeper on any phase, review code, or adjust the pace as you go.*