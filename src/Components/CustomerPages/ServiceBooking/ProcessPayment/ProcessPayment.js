import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IgFdvFUgBS6TTQVvV8DByXXZKysjOCgF1wcuRUzWj8lpotvl2z42ELOiV3TiGFOkpXSc8pWsgSClzJxIzLsT6Xw00BP0ZeDyd');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;