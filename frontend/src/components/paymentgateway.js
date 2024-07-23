import React, { useState } from 'react';
import payment from './images/payment.jpg';
import './payment.css';
import { loadStripe } from '@stripe/stripe-js';

const Paymentgateway = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        cardName: '',
        cardNumber: '',
        cw: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const makePayment = async (e) => {
        e.preventDefault();

        const stripe = await loadStripe('pk_test_51PbhWvRsq9qZTEZD4IFWTmIHVMBo3CiWupTVWs8ozGQ0Wx8skZE9jKGvd6ticH2ODIR3bcsogLgqmk7ny8ZsZI9m00Ema80CQO');
        const headers = {
            "Content-Type": "application/json"
        };
        const response = await fetch('http://localhost:3001/create-checkout-session', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ formData }) 
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });
        if (result.error) {
            console.log(result.error);
        }
    };

    return (
        <div>
            <div className="payment">
                <form onSubmit={makePayment}>
                    <div className="row">
                        <div className="col">
                            <h3 className="title mt-20">Billing address</h3>
                            <div className="inputBox">
                                <span>Name: </span>
                                <input type="text" name="name" placeholder='Name' onChange={handleChange} />
                            </div>

                            <div className="inputBox">
                                <span>Email: </span>
                                <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                            </div>

                            <div className="inputBox">
                                <span>Phone no: </span>
                                <input type="number" name="phone" placeholder='Enter Number' onChange={handleChange} />
                            </div>

                            <div className="inputBox">
                                <span>State: </span>
                                <input type="text" name="state" placeholder='Enter State' onChange={handleChange} />
                            </div>
                        </div>
                        <div className="col">
                            <h3 className="title -ml-20">Payment Gateway</h3>
                            <div className="inputBox">
                                <span>Cards accepted</span>
                                <img src={payment} alt="" className='h-30 w-60 paying' />
                            </div>
                            <div className="inputBox">
                                <span>name on cards: </span>
                                <input type="text" name="cardName" placeholder='card name' onChange={handleChange} />
                            </div>
                            <div className="inputBox">
                                <span>Credit card number: </span>
                                <input type="number" name="cardNumber" placeholder='1111 2222 3333 4444' onChange={handleChange} />
                            </div>

                            <div className="inputBox">
                                <span>CW: </span>
                                <input type="text" name="cw" placeholder='1234' onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='submit-btn'>Proceed to Checkout</button>
                </form>
            </div>
        </div>
    );
};

export default Paymentgateway;
