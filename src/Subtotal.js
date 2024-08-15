import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
// Function to calculate the total value of the basket


function Subtotal() { // Pass basket as a prop
  // Ensure basket is defined and is an array
//   const itemCount = Array.isArray(basket) ? basket.length : 0; // Safely get the length
const [{basket},dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` ₹${value}`}</strong> {/* Changed to ₹ */}
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Calculate total using the updated function
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"} // Changed prefix to "₹"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;