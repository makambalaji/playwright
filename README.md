
# Playwright vs Webdriver.io

Key Factors         Playwright                  WebdriverIO
Performance         - Fast                      - Slower
                    - Stable                    - Stable
                    - Reliable                  - Reliable

Developer           - Simple setup              - Additional browser driver set up (v5 and below)
Experience          - Javascript-based          - No additional browser driver set up (v6+)
                                                - Javascript-based

Documentation       - Great documentation       - Fairly good documentation
                    - Detailed instructions     - Great example projects
                    - Good example projects

Community           - New framework
                    - Smaller community         - Larger community
                    - Few maintainers           - Many maintainers

## Getting Started

## Execute the test cases with playwright

Only the tests present in ./tests folder are executed as per the playwright.config.ts

**Perform commands:**

Execute tests in Headless mode with below command

- ```npm run test-headless```

Execute tests in headed mode as per the config file with below command

- ```npm run test```

Open the Allure report with below command

- ```npx allure open ./allure-report```
