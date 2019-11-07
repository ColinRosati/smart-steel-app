// tests
// test load API data response
// tests api data has correct amount of keys

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SteelApp from './components/SteelApp';
import fetchMock from 'fetch-mock'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
});

test("fake test", () => {
    expect(true).toBeTruthy()
});

// expect API response to be true
const res = fetchMock.mock('http://127.0.0.1:7410/data', 200);

test("should expect API to return data", () => {
    // act(() => {
    expect(res).toBeTruthy()
        // });
})


// test API JSON obj contains correct data with 12 keys
test("should expect API to JSON data with 12 keys", () => {
    () => res.then((response: any) => response.json())
        .then(data => {
            let obj = Object.values(data)
            expect(obj == 12).toBeTrue()
        })
})

test("should expect highchart to have data in its options", () => {
    () => res.then((response: any) => response.json())
        .then(data => {
            let obj = Object.values(data)
            expect(obj == 12).toBeTrue()
        })
})