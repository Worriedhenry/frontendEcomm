import { Box , styled } from '@mui/material';
import Mycarousel from './carousel';
import Nav from "./navbar"
import FullProductWindow from './Fullproduct';
function home(){
    return(
        <>
        <Nav />
        <Mycarousel />
        <FullProductWindow />
        </>
    )
}
export default home;