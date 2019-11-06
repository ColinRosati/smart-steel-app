import React, {useEffect} from 'react';

function SteelApp() {
  useEffect(() => {

  const url = "http://127.0.0.1:7410/data"; // site that doesn’t send Access-Control-*

    fetch(url).then( response => response.json().then( data => {
      console.log('fetch',data)
    })
    ).catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
  },[])

  return (
    <div className="SteelApp">
      hi
    </div>
  );
}

export default SteelApp;
