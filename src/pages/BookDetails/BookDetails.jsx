import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const singleBook = data.find(book => book.bookId === parseInt(id));

    const { bookName, author, image, review, rating, category, tags, yearOfPublishing, publisher, totalPages } = singleBook;

     const handleMarkAsRead = id =>{
        addToStoreDB(id)
        
    }


    return (
        <div className="card mb-20 mt-5 border-none grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-base-100 gap-4 md:gap-8  lg:gap-16 ">
            <div >
                <figure className='p-16 bg-gray-100 rounded-2xl'>
                    <img
                        className='h-[580px] w-[430px]'
                        src={image}
                        alt="Movie" />
                </figure>
            </div>
            <div className="pl-8 md:pl-8 lg:pl-0">
                <div className=''>
                    <h2 className="card-title text-5xl font-bold">{bookName}</h2>
                    <p className='text-gray-600 text-xl font-medium my-5'>By : {author}</p>
                </div>
                <div>
                    <div className='border-t-2 border-gray-200 '></div>
                    <p className='my-4 text-gray-600 text-xl font-medium '>{category}</p>
                </div>
                <div className='border-t-2 border-gray-200 '></div>
                <div className='text-lg font-medium my-5 '>Review :
                    <span className='text-gray-600 text-sm font-medium'>{review}</span>
                </div>
                <div className='flex justify-start my-5 gap-10'><span className='font-bold text-lg '>Tag</span>
                    {
                        tags.map((tag, index) => <button key={index}
                            className='bg-[#23be0a0d] font-medium text-[#23be0a] rounded-2xl px-4'>
                            {tag}</button>)
                    }
                </div>
                <div>
                    <div className='flex justify-start gap-10 mb-5' >
                        <div className='text-gray-600 text-sm font-medium'>
                            <p>Number of Pages :</p>
                            <p className='my-4'>Publisher :</p>
                            <p>Year of Publishing :</p>
                            <p className='mt-4'>Rating :</p>
                        </div>
                        <div className='text-black text-sm font-medium'>
                            <p>{totalPages}</p>
                            <p className='my-4'>{publisher} </p>
                            <p>{yearOfPublishing}</p>
                            <p className='mt-4'>{rating}</p>
                        </div>

                    </div>
                </div>
                <div className=''>
                    <button onClick={()=>handleMarkAsRead(id)} className="btn mr-5 ">Read</button>
                    <button className="btn bg-[#50b1c9] text-white ">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;