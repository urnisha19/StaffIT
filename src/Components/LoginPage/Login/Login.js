import React, { useContext, useState } from 'react';
import logo from '../../../images/staffIT.png';
import googleIcon from '../../../images/googleIcon.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import './Login.css';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        email: '',
        photoURL: ''
    })

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                console.log('login successfully', result.user);
                const signedInUser = {
                    isSignedIn: true,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                // storeAuthToken();
                history.replace(from);
            })
            .catch((error)=> {
                console.log('error', error);
                console.log('error.message', error.message);
            });
    }
    const handleGoogleSignOut = () => {
        firebase.auth().signOut()
            .then(res=> {
                const signedOutUser = {
                    isSignedIn: false,
                    displayName: '',
                    email: '',
                    photoURL: ''
                }
                setUser(signedOutUser);
                setLoggedInUser(signedOutUser);
                sessionStorage.removeItem("token")
            })
            .catch(function (error) {
                console.log('error', error)
            });
    }

    // JWT token 
    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(true)
    //         .then(function (idToken) {
    //             sessionStorage.setItem('token', idToken);
    //         }).catch(function (error) {
    //             // Handle error
    //         });
    // }

    return (
        <div className="container">
            <div className="mt-5">
                <Link to="/home">
                    <Button style={{backgroundColor:"paleVioletRed",border:"none",fontWeight:"500"}}>Go Back</Button>
                </Link>
            </div>
            <div className="text-center">
                <Link to="/home">
                    <img src={logo} alt="logo" className="text-center" style={{width:"60px"}} />
                </Link>
            </div>
            <div className="login-box col-md-6 offset-md-3">
                <h4 className="font-weight-bold text-center">Login With</h4>
                <button className="my-3" onClick={handleGoogleSignIn}>
                    <img src={googleIcon} alt="google-icon" /> Continue with Google
                </button>
                <p className="text-center">Don’t have an account?
                    <a target="blank" href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp"> Create an account</a>
                </p>
            </div>
        </div>
    );
};

export default Login;