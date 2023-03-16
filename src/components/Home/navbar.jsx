import { Box , styled ,Typography } from '@mui/material';
import Data from "../../data_resourses/nav_data"
const StyBox =styled(Box)`
    display:flex;
    margin: 55px 110px 0 110px;
    justify-content:space-between;
`
const StyTypo= styled(Typography)`
    font-size:14px;
    font-weight:500;

`
const InnerImgBox=styled(Box)`
    padding:12px 8px;
    text-align:center;

`
function data(info){
    return(
        <InnerImgBox>
            <img src={info.url} style={{width:"64px" ,height:"64px"}}></img>
            <StyTypo>{info.text}</StyTypo>
        </InnerImgBox>

    )
}
function nav(){

    return(
        <StyBox>
            {
                Data.map(data)
            }
        </StyBox>
    )
}
export default nav;
//a