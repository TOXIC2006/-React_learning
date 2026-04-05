import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
const App = () => {

  // localStorage.setItem("name", "John");
  // localStorage.setItem("age", "30");
  // localStorage.setItem("city", "New York");
  // const user = localStorage.getItem("name");
  // const idcard = {
  //   nmae: " siddharht",
  //   age: 19,
  //   city: "haridwar"
  // };
  // localStorage.setItem("idcard", JSON.stringify(idcard));
  // const getidcard = localStorage.getItem("idcard");
  // console.log(getidcard);
  // const parseidcard = JSON.parse(getidcard);
  // console.log(parseidcard.age);

  const [data, setdata] = useState([])
  async function getdat() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    setdata(response.data);
  }
  useEffect(() => {
    console.log("hello");
  }, []);

  return (
    <div>
      <button onClick={getdat}>
        get data
      </button>

      <div>
        {data.map((item, index) => {
          return (
            <div key={item.id}>
              <h1>  hello {index}</h1>

            </div>
          );
        })}
      </div>
    </div>
  )
}

export default App