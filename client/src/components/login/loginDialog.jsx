import { useState, useContext, useEffect } from 'react';

import { Box, Typography, Dialog, TextField, styled, Button } from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../services/api.js';

import { DataContext } from '../../context/DataProvider';

const PopupBox = styled(Box)`
    display:flex;
    background: #fff;
    height: 80vh;
    width: 55vw;
    max-width:auto;
`
const BlueBox = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png);
    background-repeat: no-repeat;
    background-size: 150px;
    background-position: center 80%;
    color: #fff;
    padding: 40px 28px;
    font-size: 15px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
    width:38%;
`
const ContentBox = styled(Box)`
    padding: 36px 35px 16px;
    position: relative;
    background-color: #fff;
    width:62%;
    display:flex;
    flex-direction: column;
    & > div, & > p{
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    background: #fb641b;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #fff;
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const OTPButton = styled(Button)`
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    border: none;
    color: #2874f0;
    border-redius:2px;
    text-transform:none;
    height:48px;
`
const Text = styled(Typography)`
    font-size: 12px;
    color:#878787;
    margin-bottom:20px;
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    margin-top:20px;
    text-align:center;
    font-weight:600;
    cursor:pointer;
`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const LoginDialog = ({ open, setOpen }) => {
    const [login, setLogin] = useState(loginInitialValues)
    const [signup, setSignup] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);

    useEffect(() => {
        showError(false);
    }, [login])

    const {setAccount} = useContext(DataContext)

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: { maxWidth: 'unset' } }}
                aria-labelledby="responsive-dialog-title">
                <PopupBox>
                    <BlueBox>
                        <Typography variant="h4" gutterBottom>{account.heading}</Typography>
                        <Typography>{account.subHeading}</Typography>
                    </BlueBox>

                    {
                        account.view === 'login' ?

                            <ContentBox>
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Email/Mobile number" />
                                { error && <Error>Please enter valid Email ID/Mobile number</Error> }
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={()=>{loginUser()}}>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <OTPButton>Request OTP</OTPButton>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? create an account</CreateAccount>
                            </ContentBox>

                            :

                            <ContentBox>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone" style={{ marginBottom: '10px' }} />
                                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                            </ContentBox>
                    }
                </PopupBox>
            </Dialog>
        </>
    )
}

export default LoginDialog;