import React from 'react';

const Success = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1>Payment Successful!</h1>
            <p>Thank you for your purchase. Your transaction was successful.</p>
        </div>
    );
};

export default Success;