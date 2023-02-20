const Browser = require("./world.js");
const browser = new Browser();
const timeout = 20000;

const assert = require('assert');
const { Given, When, Then} = require('@cucumber/cucumber');
// const { BeforeAll, BeforeStep, AfterAll } = require('@cucumber/cucumber');


// ----------------------------------------------------------------------------

// BeforeAll(async function () {
//     browser.browserBuild();
// }, timeout);

// BeforeStep(async function () {
//     await browser.browserNavigate('http://127.0.0.1:5500/');
// }, timeout);

// AfterAll(async function () {
//     await browser.browserExit();
// }, timeout);


Given("", function () {

})

When("the webpage has loaded", async function () {

});

Then("check for a h2", async function () {

    // const element = await browser.findElement(By.id('#formtitle'));
    // const text = await element.getText();
    // expect(text).to.Equal('Welcome to Login Page.');

});