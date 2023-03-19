import React from "react"
import ElectronicData from "../../data_resourses/productdatas/Elctronics"
import Toydata from "../../data_resourses/productdatas/Toysdata"
import ProductWindow from "./Prod_row";


const Elecdata=ElectronicData;
const ToyData=Toydata;
const FullProductWindow=function(){
    return(
        <>
            <ProductWindow tagline="Best of Electronics" url="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" data={Elecdata}/>
            <ProductWindow tagline="Beauty ,Toys ,Food & more" url="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90" data={ToyData} />

        </>
    )
}
export default FullProductWindow;