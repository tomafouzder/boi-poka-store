import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    // const data =use(bookPromise);
    // console.log(data);
    console.log(singleBook);
    const {bookId, bookName, image, rating, category, tags, yearOfPublishing, publisher } = singleBook;

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm border border-gray-100 p-5">
                <figure className='p-6 bg-gray-100 rounded-2xl'>
                    <img
                        className='h-[166px] w-[134px]'
                        src={image} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-10'>
                        {
                            tags.map(tag => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by : {publisher}</p>

                    <div className='border-t-3 border-gray-200 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline border-none">{category}</div>
                        <div className="badge badge-outline border-none">{rating}<FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;