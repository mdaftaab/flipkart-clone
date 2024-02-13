import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../constants/data'

const Component = styled(Box)`
padding:0 100px 10px 100px;
display:flex;
justify-content:space-between;
align-items:center;
background: #fff;
min-height: 126px;
color: #111112;
text-align:center;
margin:0 10px;
`

const TextStyle = styled(Typography)`
color:#333;
font-size:14px;
line-height:20px;
font-weight:500;
`

function NavBar() {
    return (
        <Component>
            {navData.map(data => (
                <Box key={data.id}>
                    <img src={data.url} alt="nav" style={{width:'64px'}} />
                    <TextStyle>
                        {data.text}
                    </TextStyle>
                </Box>
            ))}
        </Component>
    )
}

export default NavBar;