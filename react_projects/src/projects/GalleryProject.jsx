import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader, ArrowBigRight, ArrowBigLeft } from 'lucide-react';

// Card Component
const Card = ({ user }) => {
    return (
        <div>
            <div className='h-50 w-50'>
                <img
                    className='h-full w-full object-cover overflow-hidden rounded-xl'
                    src={user.download_url}
                    alt={user.author}
                />
            </div>
            <div className='font-bold text-lg'>{user.author}</div>
        </div>
    );
};

// App Component
const GalleryProject = () => {
    const [UserData, setUserData] = useState([]);
    const [Userindex, setUserindex] = useState(2);

    async function getdata() {
        setUserData([]);
        try {
            const response = await axios.get(
                `https://picsum.photos/v2/list?page=${Userindex}&limit=21`
            );
            setUserData(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        getdata();
    }, [Userindex]);

    if (UserData.length === 0) {
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
                {UserData.map((user) => (
                    <a
                        key={user.id}
                        href={user.url}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <Card user={user} />
                    </a>
                ))}
            </div>

            <div className='flex justify-center items-center gap-5 my-5'>
                {/* Previous Button */}
                <button
                    className='bg-amber-500 text-white px-4 py-2 text-sm active:scale-110 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={Userindex <= 2}
                    onClick={() => setUserindex(Userindex - 1)}
                >
                    <ArrowBigLeft size={32} />
                </button>

                <h1 className="font-bold text-lg">Page {Userindex}</h1>

                {/* Next Button */}
                <button
                    className='bg-amber-500 text-white px-4 py-2 text-sm active:scale-110 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={Userindex >= 50}
                    onClick={() => setUserindex(Userindex + 1)}
                >
                    <ArrowBigRight size={32} />
                </button>

                {/* Input */}
                <input
                    className='text-black px-4 py-2 text-sm rounded-md'
                    type="number"
                    placeholder='Enter page number'
                    onChange={(e) => setUserindex(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default GalleryProject;