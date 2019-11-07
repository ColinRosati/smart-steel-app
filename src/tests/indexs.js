// // test
// // TODO load API 
// // TODO highcharts option
// // TODO populate highcharts data 


// const fetchMock = require('fetch-mock');
// const { SteelApp } = require('../components/SteelApp.js')
// const puppeteer = require('puppeteer')

// // let browser;
// const appPath = "http://localhost:3000/"

// // test("should expect API to return data", () => {
// //     const res = fetchMock.mock('http://fake-hotel-api.herokuapp.com/api/hotels', 200);
// //     expect(res).toBeTruthy()
// // })

// // test("should expect API to populate results div", async() => {
// //     browser = await puppeteer.launch({
// //         headless: true
// //     });

// //     const page = await browser.newPage();
// //     await page.goto(appPath);

// //     const res = await page.waitForSelector(".results");

// //     expect(res).toBeTruthy()
// // })


// // test("should expect sorting filter", async() => {
// //     browser = await puppeteer.launch({
// //         headless: true
// //     });

// //     const page = await browser.newPage();
// //     await page.goto(appPath);

// //     const sortAsc = await page.waitForSelector("#sort-btn").textContent;
// //     const sortFilt = await page.waitForSelector("#select-filter").value;

// //     expect(sortAsc === "Ascending" || sortAsc === "Descending")
// //     expect(sortFilt);
// // })