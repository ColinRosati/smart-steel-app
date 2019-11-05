import React, {useEffect} from 'react';

function SteelApp() {
  useEffect(() => {
    fetch('http://127.0.0.1:7410/data', {
      headers: {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin':'*'
      }}).then( response => response.json().then( data => {
      console.log('fetch',data)
    })
    );
  },[])

  return (
    <div className="SteelApp">
      hi
    </div>
  );
}

export default SteelApp;
