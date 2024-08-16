import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Payment from './Payment';
import { useEffect, useContext } from 'react';
import { auth } from './firebase'; // Import auth from firebase
import { StateContext } from './StateProvider'; // Adjust the path according to your project structure
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise=loadStripe('pk_test_51Po3Q4GpQcocRgogqHWindlX70Vll4OadWX2JIGmeoeQnALXpe4HRmFw7BqI5cEtjW6tXuTXDdmz0SRkLdxls3Rq00UScXXaF6');

function App() {
  const [{}, dispatch] = useContext(StateContext); // Use useContext to access dispatch

  useEffect(() => {
    // will only run once when the app component loads...

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe(); // Clean up the subscription on unmount
    };
  }, [dispatch]); // Add dispatch to the dependency array

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/checkout" element={<><Header /><Checkout /></>} />
        <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment/></Elements></>} />
        <Route path="/login" element={<><Login/></>} />
      </Routes>
    </Router>
  );
}

export default App;