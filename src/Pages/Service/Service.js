import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Service.css";

const Service = ({ service, index, services }) => {
    const { users } = useAuth()
    const handhAddToCart = (index) => {
        const data = (services[index]);
        data.email = users?.email
        data.status = 'pending';
        console.log(data);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
    }

    const { name, img, price, description } = service;
    return (
        <div className="card-group col-md-4 col-sm-2 mb-4 py-5" >
            <div className="card border-0 shadow">
                <img src={img} className="card-img-top img1" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{description}</p>
                    <p className="card-text">{price}</p>
                    <br />
                    <button className='btn' onClick={() => handhAddToCart(index)}>Oder Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;


/*
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{price}</p>
        <button className='btn' onClick={() => handhAddToCart(index)}>Oder Now</button>
      </div>
    </div>
  </div>
</div> */