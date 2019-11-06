import React, {useEffect, useState} from 'react';

function SteelApp() {
  let sensrData = ''
  const [apiData,setApiData] = useState({})
  const [errApi, setErrApi] = useState(false)

  async function fetcherData() {
    const url = "http://127.0.0.1:7410/data"; // site that doesn’t send Access-Control-*

    fetch(url)
    .then( response => response.json())
    .then( data => setApiData(data)) // set data into state
    .catch(err => setErrApi(err));
  }

  // on mount call fetch API 
  // set data into state
  useEffect(() => {
    fetcherData();
  },[])

  return (
    <div className="steel-app">
    <div className="sensor-api">{JSON.stringify(apiData)}</div>
    </div>
  );
}

export default SteelApp;
