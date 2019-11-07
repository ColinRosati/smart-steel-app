import React, {useEffect, useState} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function SteelApp() {
  let sensrData = ''
  const [apiData,setApiData] = useState({})
  const [errApi, setErrApi] = useState(false)

  async function fetcherData() {
    const url = "http://127.0.0.1:7410/data"; // site that doesn’t send Access-Control-*

    fetch(url)
    .then( (response: any) => response.json())
    //.then( data => setApiData(data)) // set data into state
    .then( data => setApiData(Object.values(data)[0]))  
    .catch(err => setErrApi(true));
  }

  // on mount call fetch API 
  // set data into state
  useEffect(() => {
    fetcherData();
  },[])

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
  const options = {
    title: {
      text: 'Sensor data'
    },
    yAxis: {
      title: {
          text: 'sensor data'
      }
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
    responsive: {
      rules: [{
          condition: {
              maxWidth: 500
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

  console.log(apiData)
  var snsrData = Object.values(apiData)[2]; 
  console.log(snsrData)


  return (
    <div className="steel-app">
    {/* <div className="sensor-api">{JSON.stringify(apiData)}</div> */}
    <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default SteelApp;
