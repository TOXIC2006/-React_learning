import React from 'react';

// Notice the curly braces around { user } to destructure the props
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

export default Card;