import {AppBar,Toolbar,styled, Box, Typography} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height:55px;
`;

const BoxComponents = styled(Box)`
  margin-left:12%;
  line-height:0;
`;

const SubHeading = styled(Typography)`
  font-size:10px;
  font-style:italic;
`;

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <>
        <StyleHeader position="static">
            <Toolbar style={{minHeight:'55px'}}>
                <BoxComponents>
                  <img src={logoURL} style={{width:'75px'}} alt="logo"/>
                  <Box style={{display:'flex'}}>
                    <SubHeading>Explore &nbsp;
                      <Box component="span" style={{color:'#ffe500'}}>Plus</Box>
                    </SubHeading>
                    <img src={subURL} style={{width:'12px',height:'10px'}} alt="logo"/>
                  </Box>
                </BoxComponents>
                <Search/>
                <Box>
                  <CustomButtons/>
                </Box>
            </Toolbar>
        </StyleHeader>
    </>
  )
}

export default Header