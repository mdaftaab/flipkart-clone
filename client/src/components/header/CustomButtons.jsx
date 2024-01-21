import { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from '../login/loginDialog';

const Wrapper = styled(Box)`
    display: flex;
    margin:0 3% 0 auto;
    align-items:center;
    & > Button{
        padding:5px 25px;
        background:#fff;
        color:#000;
        align-self: center;
        margin-left:20px;
    },
    & > p{
        margin-left:20px;
    }

`;
const CardBox = styled(Box)`
display:flex;
align-items: center;
gap: 5px;
margin-left:20px;
`;
const CustomButtons = () =>{
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    return (
        <>
        <Wrapper>
            <Button variant="contained" onClick={()=>handleClickOpen()}>Login</Button>
            <Typography style={{width:'140px'}}>Become a Seller</Typography>
            <Typography>More</Typography>

            <CardBox>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </CardBox>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>

        
        </>
    )
}

export default CustomButtons;