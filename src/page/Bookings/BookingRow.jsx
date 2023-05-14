import React from 'react';


const BookingRow = ({ book, handelDelete,handelConfirm }) => {
    console.log(book);
    const { userName, email, img, title, date, price, _id , status} = book
    
    return (
        <tr>
            <th>
                <button onClick={() => handelDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={img} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {status==='confirm'?<span className='text-blue-500'>Confirmed</span>:
                    <button onClick={()=>handelConfirm(_id)} className="btn btn-ghost btn-xs">Conform</button>
                    }
            </th>
        </tr>
    );
};

export default BookingRow;