import React, { useState } from 'react';
import './login.css';
import Footer from '../../Ccomponents/Footer/Footer';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LinearProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';




function Login() {
  const [username, setUserName] = useState()
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [reTypepassword, setReTypePassword] = useState()
  const [showLogin, setShowLogin] = useState(true);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [reTypePasswordError, setReTypePasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const navigate = useNavigate(); // Get the navigate function from React Router

  let baseUrl = "http://localhost:3000"
let BEUrl = "http://localhost:8000"
let DeployURL = "https://glorious-hat-bat.cyclic.app"
  const LoginForm = async () => {
    if (!email || !password) {
      console.log('Value is not Given');
      return
    }
    // https://glorious-hat-bat.cyclic.app      // old url
    else {
      setLoading(true);
      try {
        let response = await axios.post(`http://localhost:8000/login`, {
          email: email,
          password: password
        }, {
          withCredentials: true
        })

        setSuccessMessage('You have successfully logged in');
        setShowSuccessAlert(true);
          console.log("login successful");
          navigate('/dashboard', { replace: true })
    
      } catch (error) {
        console.log(error)
        setErrorMessage('Email or Password is incorrect'); 
        setShowErrorAlert(true);
      }
      finally{
        setLoading(false);
      }
    }
  };


  const signupForm = async () => {


    console.log('Signup Form');
    if (!email || !password || !reTypepassword) {
      setEmailError(!email);
      setPasswordError(!password);
      setReTypePasswordError(!reTypepassword);
      return;
    }

    if (password !== reTypepassword) {
      setPasswordMatchError(true);
      setErrorMessage('Passwords do not match');
      return;
    }
    if (email && password && reTypepassword) {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:8000/signup', {
          username,
          email,
          password,
        });

        // Handle the response according to your needs
        if (response.status === 201) {
          console.log('Signup successful');
          setSnackbarMessage('You have successfully registered');
          setSnackbarSeverity('success');
          setOpenSnackbar(true);
          setShowLogin(true);
          // Perform any necessary actions on successful signup
        } else {
          console.log('Signup failed');
          // Handle signup failure
        }
      } catch (error) {
        console.error(error);
        setSnackbarMessage('An error occurred while signing up');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
        // Handle error
      }
      finally {
        setLoading(false);}

    }



  };



  const toggleSignup = () => {
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Navbars />
      <div className="form-modal">
        <div className="form-toggle">
          <button
            id="login-toggle"
            onClick={toggleLogin}
            style={{
              backgroundColor: showLogin ? 'rgb(236, 116, 12)' : '#fff',
              color: showLogin ? '#fff' : '#222',
            }}
          >
            log in
          </button>
          <button
            id="signup-toggle"
            onClick={toggleSignup}
            style={{
              backgroundColor: showLogin ? '#fff' : 'rgb(236, 116, 12)',
              color: showLogin ? '#222' : '#fff',
            }}
          >
            sign up
          </button>
        </div>

        <div id="login-form" style={{ display: showLogin ? 'block' : 'none' }}>
          <form>
            <input
              onChange={(event) => { setemail(event.target.value); setEmailError(false); }}
              type="text"
              placeholder="Enter email or username"
              className={emailError ? 'error' : ''}
            />
            {emailError && <p className="error-message">Email is required</p>}

            <input onChange={(event) => { setPassword(event.target.value) }} type="password" placeholder="Enter password" />
            <button onClick={LoginForm} type="button" className="btn login">
            {loading ? (
           <LinearProgress  size={31} font = "bold" color= "inherit" />
            ) : (
            'LogIn'
            )}

            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>
              <a href="javascript:void(0)">Forgotten account</a>
            </p>
            <hr />
          </form>
        </div>

        <div id="signup-form" style={{ display: showLogin ? 'none' : 'block' }}>
          <form>
            <input
              onChange={(event) => { setemail(event.target.value); setEmailError(false); }}
              type="email"
              placeholder="Enter your email"
              className={emailError ? 'error' : ''}
            />
            <input
              onChange={(event) => { setUserName(event.target.value); setEmailError(false); }}
              type="text"
              placeholder="Enter your UserName"
              className={emailError ? 'error' : ''}
            />
            {emailError && <p className="error-message">UserName  is required</p>}

            <input
              onChange={(event) => { setPassword(event.target.value); setPasswordError(false); }}
              type="password"
              placeholder="Create password"
              className={passwordError ? 'error' : ''}
            />
            {passwordError && <p className="error-message">Password is required</p>}

            <input
              onChange={(event) => { setReTypePassword(event.target.value); setReTypePasswordError(false); }}
              type="password"
              placeholder="Retype Password"
              className={reTypePasswordError ? 'error' : ''}
            />
            {reTypePasswordError && <p className="error-message">Retype password is required</p>}
            {passwordMatchError && <p className="error-message">{errorMessage}</p>}

            <button type="button" onClick={signupForm} className="btn signup">
            {loading ? (
    <LinearProgress  size={31} font = "bold" color= "inherit" />
  ) : (
    'Create Account'
  )}
            </button>
            <p>
              Clicking <strong>create account</strong> means that you agree to our{' '}
              <a href="javascript:void(0)">terms of services</a>.
            </p>
            <hr />
          </form>
        </div>
      </div>

      {/* Snackbar component */}
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          elevation={6}
          variant='filled'
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>

      <Footer />
    </div>
  );
}

export default Login;
