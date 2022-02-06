import React, {useEffect, useState} from 'react';



export function useUserData ()  {

    const [userData, setUserData] = useState({});

    const url: string = "https://jsonplaceholder.typicode.com/users"
    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then( (json)=>setUserData(json) )
    
    }, []);

    
  return {userData};
};


