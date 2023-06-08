import React, { useState } from "react"
import { Button, ButtonBase } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import {useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import axios from "axios"
const LittleImagesStyle = {
    padding: "0px", width: "49px", border: " 1px solid #f0f0f0",
    marginBottom: "17px"
}
function Left_part({ product }) {
    const [PrimaryImage, setPrimaryImage] = useState(product.ProductImages[0])
    const ProductId=useParams()
    const navigate=useNavigate()

    const AddProductToCart = ()=>{
        console.log(ProductId.productId)
        axios.put("http://localhost:3001/AddProductToCart/"+ProductId.productId,{user:localStorage.getItem("user")}).then((res)=>{

        })

    }

    const BuyProductFunctionality = ()=>{
        navigate("/buyproduct")
    }
    return (
        <div style={{ minWidth: "40%", padding: "41px 23px 0px 10px", position: "sticky", top: "10vh" }}>
            <div
                style={{
                    display: "flex"
                }}
            >
                <div
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
                </div>
                <div style={{ border: " 1px solid #f0f0f0", width: "90%", position: "sticky", top: "10vh" }} >
                    <img src={PrimaryImage} alt="" style={{ padding: "10px", width: "416px" }} />
                </div>
            </div>
            <Button style={{ backgroundColor: "rgb(255, 173, 51)", width: "49%", height: "51px", borderRadius: "2px" }} startIcon={<ShoppingCartIcon />} variant="filled" onClick={AddProductToCart} >Add to cart</Button>
            <Button style={{ backgroundColor: "#F0721A", width: "49%", height: "51px", marginLeft: "2%", borderRadius: "2px" }} startIcon={<FlashOnIcon />} onClick={BuyProductFunctionality} variant="filled">Buy now</Button>
        </div>
    )
}
export default Left_part;