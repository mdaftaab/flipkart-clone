import { Box, Typography, styled } from '@mui/material'
import { navData } from '../../constants/data'

const Componet = styled(Box)`
display:flex;
justify-content:center;
gap:25px;
align-items:center;
background: #fff;
min-height: 126px;
color: #111112;
text-align:center;
`

const TextStyle = styled(Typography)`
color:#333;
font-size:14px;
line-height:20px;
font-weight:500;
`

function NavBar() {
    return (
        <Componet>
            {navData.map(data => (
                <Box key={data.id}>
                    <img src={data.url} alt="nav" style={{width:'64px'}} />
                    <TextStyle>
                        {data.text}
                    </TextStyle>
                </Box>
            ))}
        </Componet>
    )
}

export default NavBar;