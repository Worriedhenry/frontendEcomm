import React, { useEffect, useState } from "react"
import { Button, ButtonBase, Grid, Skeleton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
import { Img } from "../UtlityComponents/StyledImage";
import BackendLink from "../../data_resourses/BackendLink";
const LittleImagesStyle = {
    padding: "0px", width: "49px", border: " 1px solid #f0f0f0",
    marginBottom: "17px"
}

function Left_part({ product,InCart,setInCart }) {
    const Context=React.useContext(AuthContext)
    const {setProducts}=React.useContext(CartContext)
    const {Valid,setLoginOpen}=Context
    const [PrimaryImage, setPrimaryImage] = useState(product ? product.ProductImages[0] : "")
    const ProductId = useParams()
    const navigate=useNavigate()

    const AddProductToCart = () => {
        console.log(InCart)
        if (InCart){
            navigate("/viewcart/"+Valid)
        }
        else{
        if(Valid){
        axios.put(BackendLink+"/AddProductToCart/" + ProductId.productId+"/"+Valid, { user: localStorage.getItem("user") }).then((res) => {
            setInCart(true)
        })}
        else{
            setLoginOpen(true)
        }
        }

    }

    const BuyProductFunctionality = ()=>{
        if (Valid){
        setProducts([product])
        navigate("/buyproduct")
        }
        else{
            setLoginOpen(true)
        }
    }

    useEffect(() => {
        if (product) {
            setPrimaryImage(product.ProductImages[0])
        }
    }, [product])
    return (
        <div style={{ minWidth: "40%", padding: "15px 23px 0px 10px", position: "sticky", top: "10vh" }}>
            <div
                style={{
                    display: "flex"
                }}
            >
                {product && <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <ButtonBase><img onClick={() => setPrimaryImage(product.ProductImages[0])} src={typeof (product.ProductImages) === undefined ? "" : product.ProductImages[0]} alt="" style={LittleImagesStyle} /></ButtonBase>
                    <ButtonBase><img src={product.ProductImages[1]} onClick={() => setPrimaryImage(product.ProductImages[1])} alt="" style={LittleImagesStyle} /></ButtonBase>
                    <ButtonBase><img src={product.ProductImages[2]} onClick={() => setPrimaryImage(product.ProductImages[2])} alt="" style={LittleImagesStyle} /></ButtonBase>
                    <ButtonBase><img src={product.ProductImages[3]} onClick={() => setPrimaryImage(product.ProductImages[3])} alt="" style={LittleImagesStyle} /></ButtonBase>
                    <ButtonBase><img src={product.ProductImages[4]} onClick={() => setPrimaryImage(product.ProductImages[4])} alt="" style={LittleImagesStyle} /></ButtonBase>
                </div>}
                <div style={{ border: " 1px solid #f0f0f0", width: "90%", position: "sticky", top: "10vh" , padding:"3%" }} >
                    {!product && <Skeleton style={{ margin: "0px" }} height={400} />}
                    {product && <Img src={PrimaryImage} alt=""  />}
                </div>
            </div>
            {product && product.Quantity>0 && <>
                <Button style={{ backgroundColor: "rgb(255, 173, 51)", width: "49%", height: "51px", borderRadius: "2px" }} startIcon={<ShoppingCartIcon />} variant="filled" onClick={AddProductToCart} >{InCart ? "Go To Cart" : "Add to cart"}</Button>
                <Button style={{ backgroundColor: "#F0721A", width: "49%", height: "51px", marginLeft: "2%", borderRadius: "2px" }} startIcon={<FlashOnIcon />} onClick={BuyProductFunctionality} variant="filled">Buy now</Button>
            </>}
            {product.Quantity<=0 && 
                <Button style={{ backgroundColor: "rgb(255, 173, 51)", width: "49%", height: "51px", borderRadius: "2px" }}variant="filled" disabled >Out Of Stock</Button>
            }
            {!product && <Grid container ml={3} spacing={3}>
                <Grid item md={5}>
                    <Skeleton height={60} />
                </Grid>
                <Grid item md={5}>
                    <Skeleton height={60} />
                </Grid>
            </Grid>}
        </div>
    )
}
export default Left_part;