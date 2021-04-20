import React, { useMemo } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import useResponsiveFontSize from './useResponsiveFontSize';

const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monoSpace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        [fontSize]
    );

    return options;
};

const SplitCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        console.log("[PaymentMethod]", payload);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Card number<CardNumberElement
                options={options}
                onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}
            />
            </label>
            <br />
            <label>Expiration date<CardExpiryElement
                options={options}
                onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}
            />
            </label>
            <br />
            <label>CVC<CardCvcElement
                options={options}
                onReady={() => {
                    console.log("CardNumberElement [ready]");
                }}
                onChange={event => {
                    console.log("CardNumberElement [change]", event);
                }}
                onBlur={() => {
                    console.log("CardNumberElement [blur]");
                }}
                onFocus={() => {
                    console.log("CardNumberElement [focus]");
                }}
            />
            </label>
            <br />
            <button style={{border:"none",padding:".5em"}} type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

export default SplitCardForm;