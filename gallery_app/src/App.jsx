import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader, ArrowBigRight, ArrowBigLeft } from 'lucide-react';
import Card from './componets/card';

const App = () => {
  const [UserData, setUserData] = useState([]);
  const [Userindex, setUserindex] = useState(2);

  async function getdata() {
    setUserData([]);
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${Userindex}&limit=21`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getdata();
  }, [Userindex]);

  let userdata = "No data available";

  if (UserData.length > 0) {
    userdata = UserData.map(function (user) {
      return (
        <a key={user.id} href={user.url} target='_blank' rel="noopener noreferrer">
          <div>
            <Card user={user} />
          </div>
        </a>
      );
    });
  } else {
    return (
      <div className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Loader size={100} className="animate-spin" />
        <br />
        <span>Loading......</span>
      </div>
    );
  }

  return (
    <div>
      <div className='flex flex-wrap gap-2 h-[80%]'>
        {userdata}
      </div>

      <div className='flex justify-center items-center gap-5 my-5'>
        <button

          className='bg-amber-500 text-white px-4 py-2 text-sm active:scale-110 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'

          disabled={Userindex <= 2}
          onClick={() => {
            setUserindex(Userindex - 1);
          }}
        >
          <ArrowBigLeft size={32} />
        </button>

        <h1 className="font-bold text-lg">Page {Userindex}</h1>

        <button
          className='bg-amber-500 text-white px-4 py-2 text-sm active:scale-110 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100'
          disabled={Userindex >= 50}
          onClick={() => {
            setUserindex(Userindex + 1);
          }}
        >
          <ArrowBigRight size={32} />
        </button>

        <input className=' text-black px-4 py-2 text-sm active:scale-110 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100' type="text" placeholder='enter page number'
          onChange={(e) => {
            setUserindex(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default App;