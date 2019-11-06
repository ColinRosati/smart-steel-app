import React, {useEffect, useState} from 'react';

function SteelApp() {
  let sensrData = ''
  const  [apiData,setApiData ]= useState({})
  useEffect(() => {

  const url = "http://127.0.0.1:7410/data"; // site that doesn’t send Access-Control-*

    fetch(url).then( response => response.json().then( data => {
      console.log('fetch',data)
      sensrData = data.sensor_data
      setApiData(data)
    })
    ).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  },[])

  return (
    <div className="steel-app">
    <div className="sensor-api">{JSON.stringify(apiData)}</div>
    </div>
  );
}

export default SteelApp;
