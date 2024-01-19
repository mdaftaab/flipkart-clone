import { Box, Button, Typography, styled } from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';

const Wrapper = styled(Box)`
    display: flex;
    margin:0 3% 0 auto;
    & > Button {
        width:100px;
        background:#fff;
        color:#000;
    }
`;

const CustomButtons = () =>{
    return (
        <>
        <Wrapper>
            <Button variant="contained">Login</Button>
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>

            <Box>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Box>
        </Wrapper>

        
        </>
    )
}

export default CustomButtons;