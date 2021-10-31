import React from 'react';
import MyOrder from './MyOrder';


const MyOrderS = ({ order, orders, setOrders }) => {

    //Delete an user
    const handleDeletUser = id => {
        console.log(id);
        const url = `http://localhost:5000/delete/${id}`
        const proceed = window.confirm('Are you sure,you want to ddelete?');
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, 'tuhin')
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = orders.filter(order => order._id !== id)
                        setOrders(remainingUsers);
                    }
                })
        }
    }
    const { name, img, description, price, status } = order
    return (
        <div className="card-group col-md-4">
            <div className="card">
                <img src={img} className="card-img-top img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                    <p className="card-text">{price}</p>
                    <p>{status}</p>
                    <br />
                    <button onClick={() => handleDeletUser(order._id)}>Delet</button>
                </div>
            </div>
        </div>
    );
};


export default MyOrderS;