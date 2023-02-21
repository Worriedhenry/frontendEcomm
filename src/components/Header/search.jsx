import { Box , styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NewBox=styled(Box)`
    color:blue;
    margin-left:-5%;
    padding-top:0.9%;
    position:relative;

`
function Search(){
    return(
        <div id="searchbarcontainer">
        <input  id="searchbar" type="text" placeholder="Search for products "></input> 
        <NewBox>
            <SearchIcon/>
        </NewBox>
        </div>
    )
}
export default Search;