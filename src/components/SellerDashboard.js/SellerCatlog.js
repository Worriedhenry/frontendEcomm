import { Divider, Button, Rating, IconButton, Tooltip, CircularProgress, Snackbar,Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';
import ButtonBase from '@mui/material/ButtonBase';
import axios from 'axios';
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
function CatlogCard({ Detail, index, setCatlogProducts, CatlogProducts,setSnackbarControl }) {
  console.log(Detail)
  const [RemoveLoader, setRemoveLoader] = useState(false)
  const RemoveProduct = () => {
    setRemoveLoader(true)
    axios
      .delete("http://localhost:3001/deleteProduct/" + Detail._id)
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
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={Detail.ProductImages[0]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item >
              <Typography gutterBottom variant="h3.heading" component="div">
                {Detail.ProductTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                ID: {Detail.productId}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                <div style={{ marginTop: "-1px", display: "flex", fontSize: "13px" }}><span style={{ color: "#838484" }}><Rating readOnly size="small" defaultValue={Detail.ProductNumericalRating} precision={0.5} name="size-small" />
                  <span>&nbsp; {Detail.ProductNumericalRating} Rating&nbsp; & {Detail.reviews.length} Reviews &nbsp;</span></span><span></span>{true ? <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{ width: "80px", marginLeft: "20px" }} /> : <></>}</div>
                20/100 Remaining
              </Typography>
            </Grid>
            <Grid item spacing={2}>
              {!Detail.Listed && <Button variant='contained' size='small' color="success">List</Button>}
              {Detail.Listed && <Button variant='contained' size='small' color="error">De-List</Button>}
              <Button style={{ margin: "5px" }} size="small" disabled={RemoveLoader ? true : false} onClick={RemoveProduct} variant='contained' color="error">{RemoveLoader ? <CircularProgress size={24} /> : "Remove"}</Button>
            </Grid>
          </Grid>
          <Grid item>
            <p style={{ background: "green", borderRadius: "5px", color: "white", padding: "5px 7.5px", margin: "5px 1px" }}> In Stock</p>
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

  useEffect(() => {
    axios
      .post("http://localhost:3001/ProvideCatlog")
      .then(res => {
        if (res.status === 200) {
          setTimeout(() => {

            setLoaderControl(false)
            setCatlogProducts(res.data.CatlogProducts)
          }, 500);
          console.log(LoaderControl)
        }
      })
      .catch(err => console.error(err));
  }, [])
  return <div className='RightProfile'>
    <div style={{ display: "flex", justifyContent: "space-between" }}><h3>My Catlog</h3><Tooltip title="Refresh"><IconButton ><RefreshIcon /></IconButton></Tooltip></div>
    <Divider />
    {LoaderControl && <div style={{ width: "100%", height: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}><CircularProgress /></div>}
    {CatlogProducts.map((e, index) => <><CatlogCard setCatlogProducts={setCatlogProducts} setSnackbarControl={setSnackbarControl} index={index} Detail={e} CatlogProducts={CatlogProducts} /><Divider /></>)}
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