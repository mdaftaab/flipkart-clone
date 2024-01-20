import { Box,styled } from "@mui/material";
import NavBar from "./NavBar";
import Banner from "./Banner";

const MainBox = styled(Box)`
background-color: rgb(241, 242, 244);
padding:10px;
`

const Home = () => {
    return (
        <MainBox>
            <NavBar />
            <Banner/>
        </MainBox>
    )
}

export default Home;