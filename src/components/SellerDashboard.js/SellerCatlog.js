import { Divider, Button, Rating, IconButton, Tooltip, CircularProgress, Snackbar,Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import ButtonBase from '@mui/material/ButtonBase';
import StyledTypography from '../UtlityComponents/StyledTypo';
import { useParams,useNavigate} from 'react-router-dom';
import { SnackbarContext } from '../../Context/SnackbarContext';
import { SuccessSnackBar,WarningSnackBar,ErrorSnackBar } from '../UtlityComponents/Snackbar';
import axios from 'axios';
import emptyImg from "./noitem.jpg"
import BackendLink from '../../data_resourses/BackendLink';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
function CatlogCard({ Detail, index, setCatlogProducts, CatlogProducts,setSnackbarControl }) {
  const [RemoveLoader, setRemoveLoader] = useState(false)
  const [Listed,setListed]=useState(Detail.Listed)
  const navigate=useNavigate()
  const ListProduct=async ()=>{
    let res=await axios.put(BackendLink+"/product/changelisting",{productId:Detail._id,Listed:Listed})
    if(res.status==200){
      setListed(!Listed)
    }
  }
  const RemoveProduct = () => {
    setRemoveLoader(true)
    axios
      .delete(BackendLink+"/deleteProduct/" + Detail._id)
      .then(res => {
        const updatedCatlog = [...CatlogProducts]
        updatedCatlog.splice(index, 1)
        setTimeout(() => {
          setRemoveLoader(false)
          setSnackbarControl(true)
        }, 250);
        setCatlogProducts(updatedCatlog)
      })
      .catch(err => console.error(err));
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        margin: 1,
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item justifyContent="center">
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={Detail.ProductImages[0]} />
          </ButtonBase>
        </Grid>
        <Grid
          
          item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item >
              <Typography style={{cursor:"pointer"}}
          onClick={()=>navigate("/admin/edit/"+Detail._id)}  gutterBottom variant="h3.heading" component="div">
                {Detail.ProductTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                ID: {Detail.productId}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                <div style={{ marginTop: "-1px", display: "flex", fontSize: "13px" }}><span style={{ color: "#838484" }}><Rating readOnly size="small" defaultValue={Detail.ProductNumericalRating} precision={0.5} name="size-small" />
                  <span>&nbsp; {Detail.ProductNumericalRating} Rating&nbsp; & {Detail.reviews.length} Reviews &nbsp;</span></span><span></span></div>
                20/100 Remaining
              </Typography>
            </Grid>
            <Grid item spacing={2}>
              {!Listed && <Button onClick={ListProduct} variant='contained' size='small' color="success"><StyledTypography>List</StyledTypography></Button>}
              {Listed && <Button onClick={ListProduct} variant='contained' size='small' color="error"><StyledTypography>De List</StyledTypography></Button>}
              <Button style={{ margin: "5px" }} size="small" disabled={RemoveLoader ? true : false} onClick={RemoveProduct} variant='contained' color="error"><StyledTypography>{RemoveLoader ? <CircularProgress size={24} /> : "Remove"}</StyledTypography></Button>
            </Grid>
          </Grid>
          <Grid item >
            <p style={{ background: "green", borderRadius: "5px", color: "white", padding: "5px 7.5px", margin: "5px 1px" }}> <StyledTypography>In Stock</StyledTypography></p>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default function SellerCatlog() {

  const [CatlogProducts, setCatlogProducts] = useState([])
  const [LoaderControl, setLoaderControl] = useState(true)
  const [SnackbarControl,setSnackbarControl]=useState(false)
  const [EmptyFeildError,setEmptyFeildError]=useState("")
  const SellerId=useParams().SellerId
  useEffect(() => {
    console.log(SellerId)
    axios
      .post(BackendLink+"/ProvideCatlog/"+SellerId)
      .then(res => {
        if (res.status === 200) {
            setLoaderControl(false)
            setCatlogProducts(res.data.CatlogProducts)
        }
      })
      .catch(err => console.error(err));
  }, [])
  return <div className='SellermanageproductDiv' style={{ width: "100%", background: "white", padding: "2vw" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}><h3>My Catlog</h3><Tooltip title="Refresh"><IconButton ><RefreshIcon /></IconButton></Tooltip></div>
    <Divider />
    {LoaderControl && <div style={{ width: "100%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress /></div>}
    {CatlogProducts.map((e, index) => <><CatlogCard setCatlogProducts={setCatlogProducts} setSnackbarControl={setSnackbarControl} index={index} Detail={e} CatlogProducts={CatlogProducts} /><Divider /></>)}
    {CatlogProducts && CatlogProducts.length<=0 && <div style={{height:"80vh"}}><img style={{maxWidth:"40%" ,marginLeft:"30%"}} src={emptyImg}></img> <Divider /></div>}


    <Snackbar
      open={SnackbarControl}
      autoHideDuration={3000}
      onClose={() => setSnackbarControl(false)}
      message={EmptyFeildError}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={() => setSnackbarControl(false)} severity="success" sx={{ width: '100%' }}>
        Removed Product Successfully
      </Alert>
    </Snackbar>
  </div>
}