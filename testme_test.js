Feature('TestMe');

Scenario('test something', async I => {
  await I.customAmOnPage("https://google.com");
  await I.retry({
    retries: 5,
    minTimeout: 2e3,
    maxTimeout: 2e3
  }).see("Google");
  await I.waitForText("Not found here", 5);
});
