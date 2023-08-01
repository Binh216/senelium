const {Builder} = require ('selenium-webdriver');

let _load = async () => {
    //launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://google.com")
}

_load();