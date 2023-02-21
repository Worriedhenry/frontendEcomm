import { AppBar, Toolbar } from "@mui/material";
import { styled } from '@mui/material';
import Search from "./search"
import LogButton from './loginbutton'


const StyledAppBar = styled(AppBar)`
  background: #2874f0;
  height:52px;

 `
// const TBar =styled(Toolbar)`
//   min-height:52px;
// `
const Header= () =>(

      //const logoUrl= '';
        <StyledAppBar>
        <Toolbar style={{minHeight:"52px"}}>
            <div>
                <img src="https://www.freepik.com/free-vector/shopping-web-icon-design-element_22116291.htm#query=ecommerce%20logo&position=32&from_view=keyword&track=ais" alt="logo" style={ { Width:30 } } />
            </div>
            <Search />
            <LogButton />
        </Toolbar>
        </StyledAppBar>
    )


export default Header;