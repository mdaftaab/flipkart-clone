import {AppBar,Toolbar,styled, Box} from '@mui/material';

const StyleHeader = styled(AppBar)`
  background: #2874f0;
  height:55px;
`;

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <>
        <StyleHeader position="static">
            <Toolbar>
                <Box>
                  <img src={logoURL} style={{width:'75'}} alt="logo"/>
                </Box>
            </Toolbar>
        </StyleHeader>
    </>
  )
}

export default Header