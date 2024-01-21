import {Box,Typography, Dialog, TextField, styled,Button} from '@mui/material';

const PopupBox = styled(Box)`
display:flex;
background: #fff;
height: 80vh;
width: 60vw;
`
const BlueBox = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png);
background-repeat: no-repeat;
background-size: 150px;
background-position: center 80%;
color: #fff;
padding: 40px 33px;
font-size: 15px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
width:35%;
`
const ContentBox = styled(Box)`
padding: 56px 35px 16px;
position: relative;
background-color: #fff;
width:65%;
`

const LoginDialog = ({open, setOpen}) =>{
    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
            open={open} 
            onClose={handleClose} 
            // fullScreen={fullScreen}
            aria-labelledby="responsive-dialog-title">
                <PopupBox>
                    <BlueBox>
                        <Typography variant="h4" gutterBottom>Login</Typography>
                        <Typography>Get access to your Orders, Wishlist and Recommendations</Typography>
                    </BlueBox>
                    <ContentBox>
                        <TextField variant="standard" label="Enter Email/Mobile number" />
                        <TextField variant="standard" label="Enter Password" />
                        <Typography>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button>Login</Button>
                        <Typography>OR</Typography>
                        <Button>Request OTP</Button>
                        <Typography>New to Flipkart? create an account</Typography>
                    </ContentBox>
                </PopupBox>
            </Dialog>
        </>
    )
}

export default LoginDialog;