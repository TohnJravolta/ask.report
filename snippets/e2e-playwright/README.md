# Playwright E2E Examples (snippets)

These examples assume Playwright is installed in a local environment. They are provided as code snippets only and are not wired into the project tooling.

Quick start
1) npm init -y
2) npm i -D @playwright/test
3) npx playwright install
4) Save the spec files under `tests/e2e/` or run with:
   npx playwright test ASK/ask.report/repo/snippets/e2e-playwright/*.spec.ts

To serve `index.html` locally, any static server works, e.g.:
  npx http-server ASK/ask.report/repo -p 4173 -c-1

Then set BASE_URL=http://localhost:4173/index.html when running tests.

