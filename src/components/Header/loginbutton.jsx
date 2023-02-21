import { Box,Button ,styled,Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TranslateIcon from '@mui/icons-material/Translate';

const NewBox= styled(Box)`
    margin-left:4%;
    display:flex;

`
const InnerBox=styled(Box)`
    display:flex;
    margin-left:60px;

`
const NButton= styled(Button)`
    color:blue;
    background:white;
    width:20px;
    height:30px;
    text-transform:none;
    border-radius:1%
`

function LoginButton(){
    return(
        <NewBox>
            <NButton variant="contained" style={{minWidth:"90px"}}>Login</NButton>
            <InnerBox> 
                <InnerBox>
                    <TranslateIcon />
                    <Typography>Change language</Typography>
                </InnerBox>
                <InnerBox>
                    <LocationOnIcon />
                    <Typography>Select your address</Typography>
                </InnerBox>
                <InnerBox>
                    <ShoppingCartIcon/>
                    <Typography>cart</Typography>
                </InnerBox>

            </InnerBox>
        </NewBox>
    )
}

export default LoginButton;