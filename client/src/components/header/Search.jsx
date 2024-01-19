import { InputBase, Box, styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
background:#fff;
padding:2px 8px;
width:38%;
margin-left:10px;
border-radius:2px;
display:flex;
`;

const SearchWrap = styled(Box)`
color:#000;
padding:5px;
position:relative;
top:4px;
`;

function Search() {
  return (
    <>  
        <SearchContainer>
            <InputBase style={{width:'100%'}} placeholder="Search for products, brands and more"/>
            <SearchWrap>
              <SearchIcon/>
            </SearchWrap>
        </SearchContainer>
    </>
  )
}

export default Search