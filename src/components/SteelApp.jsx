import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function SteelApp() {
  let sensrData = ''
  const [apiData,setApiData] = useState({}) // data state
  const [errApi, setErrApi] = useState(false) // error state

  // async function to await sever response
  async function fetcherData() {
    const url = "http://127.0.0.1:7410/data"; // api url

    fetch(url) // call api endpoint
    .then( (response: any) => response.json()) // coerse data into JSON
    .then( data => setApiData(Object.values(data)[0]))   // only grab the nested object value
    .catch(err => {// catch any error
      setErrApi(true) // set error state
      setApiData("Error Response")  // set error into data state
      console.log("error api response try again") // print error in console
      setTimeout(()=> fetcherData(),2000); // try api endpoint again
    });
  }

  // on mount call fetch API 
  // set data into state
  // wrap effect in subscribed to only call once. useful when testing
  useEffect(() => {
    let isSubscribed = true
      if (isSubscribed) {
        fetcherData()
      }
    return () => isSubscribed = false
  },[])


  // creata sensor variables
  const sns0 = Object.values(apiData)[2];
  const sns1 = Object.values(apiData)[3];
  const sns2 = Object.values(apiData)[4];
  const sns3 = Object.values(apiData)[5];
  const sns4 = Object.values(apiData)[6];
  const sns5 = Object.values(apiData)[7];
  const sns6 = Object.values(apiData)[8];
  const sns7 = Object.values(apiData)[9];
  const sns8 = Object.values(apiData)[10];
  const sns9 = Object.values(apiData)[11];


  //hight charts options
  const options = {
    title: {
      text: 'Sensor data'
    },
    yAxis: {
      title: {
          text: 'class'
      }
  },xAxis: {
    title: {
        text: 'samples'
    }
},
chart:{
  height:800
},
  series: [{
      name: 'sensor 0',
      data: sns0
  }, {
      name: 'sensor 1',
      data: sns1
  }, {
    name: 'sensor 2',
    data: sns2
  }, {
    name: 'sensor 3',
    data: sns3
  }, {
    name: 'sensor 4',
    data: sns4
  }, {
    name: 'sensor 5',
    data: sns5
  }, {
    name: 'sensor 6',
    data: sns6
  }, {
    name: 'sensor 7',
    data: sns7
  }, {
    name: 'sensor 8',
    data: sns8
  }, {
    name: 'sensor 9',
    data: sns9
  }],
  legend: {
    enabled: true,
    y: 20,
    align: 'center',
    verticalAlign: 'bottom',
    margin: 30,
    width: 1300,
    maxHeight: 400,
    padding:70,
    borderWidth: 0,
    itemMarginTop: 15,
    itemMarginBottom: 15,
    backgroundColor:'#F6D7F9',
    itemStyle: {
            color: '#1D4DF8',
            fontFamily: '',
            fontSize:"18px",
            padding:"20px"
    }
},
    responsive: {
      rules: [{
          condition: {
              maxWidth: 800
          },
          chartOptions: {
              legend: {
                  layout: 'horizontal',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }
  }

  //render header & highcharts 
  return (
    <div>
    <div className="Header">
      <h1>Smart Steel</h1>
      <h5>Data analytics for steel sensors. 400 samples taken on 10 sensors</h5>
    </div>
    <div className="high-charts">
    <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    </div>
  );
}

export default SteelApp;
