import React from 'react';
import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex bg-gray-100 gap-5 justify-around items-center p-28 rounded-3xl my-10'>
            <div>
                <h1 className='font-bold text-4xl mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <button className='btn btn-primary'>Test Test</button>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;