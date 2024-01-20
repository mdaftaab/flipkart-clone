import { Box,styled } from "@mui/material";
import NavBar from "./NavBar";

const MainBox = styled(Box)`
background-color: rgb(241, 242, 244);
padding:10px;
`

const Home = () => {
    return (
        <MainBox>
            <NavBar />
        </MainBox>
    )
}

export default Home;