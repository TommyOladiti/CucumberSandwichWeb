const Browser = require("../../Browser.js");
const browser = new Browser();
const timeout = 20000;
const {By} = require('selenium-webdriver');


const assert = require('assert');
const { Given, When, Then, BeforeAll, Before, AfterAll } = require('@cucumber/cucumber');


// ----------------------------------------------------------------------------
BeforeAll(async function (){
    browser.browserBuild();
}, timeout);

Before(async function () {
    await browser.browserNavigate('http://127.0.0.1:5500/');
}, timeout);

AfterAll(async function () {
    await browser.browserExit();
}, timeout);


Given("the page has loaded",  function () {

});

When("a button is clicked", async function () {
    // const element = await this.getElement(id);
    // element.click();
    await browser.elementClick('backbutton')
});


Then("the title should be {string}", async function (title) {
    const actual = await browser.headless.getTitle();
    assert(actual == title)

});
Then("the h2 should be {string}", async function (header) {

    const element = await browser.headless.findElement(By.id('formtitle')).getText();
    assert(element == header)

});

Then("there should be a list", async function () {

    const element = await browser.headless.findElement(By.className('list')).getTagName();
    assert(element == "div")

});

Then("there is a different background color within the page", async function () {

    const element = await browser.elementColor('formtitle');
    assert(element == "rgba(0, 255, 255, 1)")
    
});
















    // console.log('*****************************************');
    // console.log('*****************************************');
    // console.log('*****************************************');
    // console.log('*****************************************');
    // console.log('*****************************************');

    // browser.browserBuild();
    // await browser.browserNavigate('http://127.0.0.1:5500/');// the page has been loaded
    // await browser.browserNavigate('https://www.bbc.co.uk/news');