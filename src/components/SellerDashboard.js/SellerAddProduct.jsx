import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, InputAdornment, OutlinedInput, Snackbar, TextField, Typography,Alert,CircularProgress,Grid, IconButton } from "@mui/material"
import React, { useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {CheckBox, ExpandMoreOutlined} from "@mui/icons-material"
import { useParams } from "react-router-dom";
import BackendLink from "../../data_resourses/BackendLink";
export default function SellerAddProduct() {
  const SellerId=useParams().SellerId
  const [Category, setCategory] = useState('');
  const [Files,setFiles]=useState(Array(5).fill(null))
  const [age, setAge] = useState()
  const [droppedImage, setDroppedImage] = useState(null);
  const [boxes, setBoxes] = useState(Array(5).fill(null));
  const [ImagePublicID,setImagePublicId]=useState(Array(5).fill(null))
  const [UploadImageSnackbar,setUploadImageSnackbarControl]=useState(false)
  const [ProductName,setProductName]=useState('')
  const [ProductDescription,setProductDescription]=useState('')
  const [ProductBrandName,setProductBrandName]=useState('')
  const [ProductMRP,setProductMRP]=useState(0)
  const [ProductSellingPrice,setProductSellingPrice]=useState(0)
  const [ProductQuantity,setProductQuantity]=useState('')
  const [SnackbarControl,setSnackbarControl]=useState(false)
  const [EmptyFeildError,setEmptyFeildError]=useState("")
  const [specifications, setSpecifications] = useState([{ key: "", value: "" }]);
  const [DescriptionHelper,setDescriptionHelper]=useState("Add a detailed explanation of your product at least of 30 words")

  const handleAddSpecification = () => {
    if (specifications.length < 12) {
      setSpecifications([...specifications, { key: "", value: "" }]);
    }
  };
  const handleSpecificationChange = (index, field, value) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications[index][field] = value;
    if (field === "value" && updatedSpecifications[index].key === "" && value !== "") {
      updatedSpecifications[index].key = "Untitled";
    }

    setSpecifications(updatedSpecifications);
  };
  const handleRemoveSpecification = (index) => {
    const updatedSpecifications = [...specifications];
    updatedSpecifications.splice(index, 1);
    setSpecifications(updatedSpecifications);
  };
  const InputFeildsStyle={
    margin:"20px 0px"
  }
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };


  // Handle Function for Image
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const UpdatedFiles=[...Files]
      UpdatedFiles[index]=file
      setFiles(UpdatedFiles)
      const updatedBoxes = [...boxes];
      updatedBoxes[index] = URL.createObjectURL(file);
      setBoxes(updatedBoxes);
    }
  };
  const handleInputChange = (event, index) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const updatedBoxes = [...boxes];
      const UpdatedFiles=[...Files]
      UpdatedFiles[index]=file
      setFiles(UpdatedFiles)
      updatedBoxes[index] = URL.createObjectURL(file);
      setBoxes(updatedBoxes);
      console.log(updatedBoxes,UpdatedFiles)
    }
  };
  
  const handleDelete = async (index,setUploadingImage) => {
    const updatedBoxes = [...boxes];
    const updatedFiles=[...Files]
    const updatePublicImage=[...ImagePublicID]
    
    try{
    let result = await axios.post(BackendLink+"/deleteimage",ImagePublicID[index])
  } catch(e){
    console.log(e)
  }
    
    updatedFiles[index]=null;
    setFiles(updatedFiles)
    updatePublicImage[index]=null;
    setImagePublicId(updatePublicImage)
    updatedBoxes[index] = null;
    setBoxes(updatedBoxes);
  };
  const AddProduct=async ()=>{
    if (ProductName.length===0 || ProductDescription.length ===0 || ProductBrandName.length===0 || ProductMRP===0 || ProductSellingPrice===0){
      setEmptyFeildError('Fill all feilds in General')
      setSnackbarControl(true)
      return 
    }
    ImagePublicID.map((e)=>{
      if (e==null){
        setEmptyFeildError("Upload all images of Product")
        setSnackbarControl(true)
        return 
      }
    })

    const filteredSpecifications = specifications.filter(
      (specification) => specification.key !== "Untitled"
    );
    setSpecifications(filteredSpecifications);
    const isValid = specifications.every((specification) => specification.key !== "" && specification.value !== "");
    if(!isValid || specifications.length===0){
      setEmptyFeildError("Specifcation cannot be empty")
      setSnackbarControl(true)
      return 
    }
    const UploadLoad={
      Category:age,
      ProductTitle:ProductName,
      ProductDescription,
      ProductMRP,ProductSellingPrice,ProductQuantity,ProductBrandName,specifications,ImagePublicID
    }    
    try{
    let UploadResponse=await axios.post(BackendLink+"/AddProductToCatlog/"+SellerId,UploadLoad)
    if (UploadResponse.status==200){
      setUploadImageSnackbarControl(true)
    }
  }catch(error){
    console.log(error);
  }
  }
  const RenderBoxes = () => {
    const [UploadingImage,setUploadingImage]=useState(false)
    const handleUpload = async (index) => {
      const imageFile = Files[index];
      if (imageFile) {
        try {        
          setUploadingImage(true)
          const formData = new FormData();
          formData.append('file', imageFile);
          const response = await axios.post(BackendLink+'/upload', formData);
          setUploadingImage(false)
          setUploadImageSnackbarControl(true)
          const UpdatedImageId=[...ImagePublicID]
          UpdatedImageId[index]=response.data.result
          setImagePublicId(UpdatedImageId)
          console.log('Image uploaded successfully',UpdatedImageId);
          // Handle success response from the backend
        } catch (error) {
          console.error('Error uploading image', error);
          // Handle error response or any other errors that may occur
        }
      }
    };
    return boxes.map((box, index) => (
      <div
      style={{
        margin:"10px"
      }}
      >
      <div
        key={index}
        style={{
          width: '300px',
          height: '250px',
          border: '1px solid black',
          marginBottom: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          flexDirection:"column"
        }}
        onDragOver={handleDragOver}
        onDrop={(event) => handleDrop(event, index)}
      >
        {box ? (
          <img
            src={box}
            alt="Dropped"
            style={{ maxWidth: '300px', maxHeight: '400px', objectFit: 'contain' }}
          />
        ) : (
          <p>Drag and Drop Product image here  </p>
        )}
        {!Files[index] && <p>OR</p>}
        {!Files[index] &&<input type="file" accept="image/*" onChange={(event) => handleInputChange(event, index)} />}

      </div>
        {<div>
          <Button disable={UploadingImage} style={{display:Files[index] ? "inline":"none"}} color="success" variant="contained" size="small" onClick={() => handleUpload(index,setUploadingImage)}>{UploadingImage ? <CircularProgress size={15} style={{color:"white"}} /> : 'Upload'}</Button>
          {Files[index] && <Button  color="error" variant="contained" size="small" onClick={() => handleDelete(index)}>Delete</Button>}
        </div>}
      </div>
    ));
  };




  const HandleDescriptionChange=(e)=>{
    if(e.target.value.length<=30){
      setDescriptionHelper("Minimum required is 30 words. Please Enter More")
    }
    setProductDescription(e.target.value)
  }


  return <div  className="selleraddproductDiv" style={{ width: "100%", background: "white", padding: "2vw" }}>
    <h2>Add Product</h2>
    
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreOutlined />}
      >
        <Typography>General Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <h5>* fields are required</h5>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label"> Product Category *</InputLabel>
      <Select
        id="demo-simple-select"
        value={age}
        label="Product Category (*)"
        onChange={handleChange}
        size="small"
      >
        <MenuItem value={10}>Clothes</MenuItem>
        <MenuItem value={20}>Grocery</MenuItem>
        <MenuItem value={30}>Electronics</MenuItem>
      </Select>
    </FormControl>
    <div style={InputFeildsStyle}>
    <label>Product Name *</label>
    <br></br>
    <TextField required value={ProductName} onChange={(e)=>setProductName(e.target.value.slice(0,30))} size="small" m={3} helperText="Product name must not excced 30 words" />
    </div>
    <div style={InputFeildsStyle}>
    <label>Product Description *</label>
    <TextField required value={ProductDescription} onChange={(e)=>HandleDescriptionChange(e)} size="small"  helperText={DescriptionHelper} multiline fullWidth />
    </div>
    <div style={InputFeildsStyle}>
    <label>Brand Name *</label>
    <br />
    <TextField required onChange={(e)=>setProductBrandName(e.target.value)} value={ProductBrandName} size="small" helperText="Brand name must not excced 30 words" />
    </div>
    <span>
      <label>MRP *</label>
      <br />
      <TextField 
      InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }} 
        size="small" type="number" onChange={(e)=>setProductMRP(e.target.value)} value={ProductMRP} /></span>
    <br></br>
    <span>
      <label>Selling Price *</label><br />
      <TextField 
      InputProps={{
        startAdornment: <InputAdornment position="start">₹</InputAdornment>,
      }} 
      size="small" onChange={(e)=>setProductSellingPrice(e.target.value)} value={ProductSellingPrice} type="number" />
    </span>
    <br></br>
    <div style={InputFeildsStyle}>
    <label>Quantity *</label>
    <br />
    <TextField onChange={(e)=>setProductQuantity(e.target.value)} required value={ProductQuantity} size="small" type="number" />
    </div>
    </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreOutlined />}
      >
        <Typography>Add Images</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <h5>*Upload 5 images of Product</h5>
    <div
    className="productImageContainer"
    >
    {RenderBoxes()}
    </div>
    </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreOutlined/>}
      >
        <Typography>Add Specification</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {specifications.map((element,index)=>
          <Grid m={2} key={index} container >
          <Grid item>
            <TextField
            value={element.key}
            onChange={(e) => handleSpecificationChange(index, "key", e.target.value)}
            label="Field Name" />
          </Grid>
          <Grid item>
            <TextField
            value={element.value}
            onChange={(e) => handleSpecificationChange(index, "value", e.target.value)}
            label="Field Value" />
          </Grid>
          <Grid item>
            <IconButton onClick={() => handleRemoveSpecification(index)} ><RemoveIcon /></IconButton>
          </Grid>
        </Grid>
        )}
        <IconButton onClick={handleAddSpecification}><AddIcon/></IconButton>
      </AccordionDetails>
    </Accordion>  
    <Button color="success" onClick={AddProduct} variant="contained">Add to Catalog</Button>
    <Snackbar
    open={SnackbarControl}
    autoHideDuration={6000}
    onClose={()=>setSnackbarControl(false)}
    message={EmptyFeildError}
    anchorOrigin={{vertical:"bottom",horizontal: "center"}}
    >
       <Alert onClose={()=>setSnackbarControl(false)} severity="warning" sx={{ width: '100%' }}>
          {EmptyFeildError}
        </Alert>
    </Snackbar>
    <Snackbar
      open={UploadImageSnackbar}
      autoHideDuration={3000}
      onClose={()=>setUploadImageSnackbarControl(false)}
      message={EmptyFeildError}
      anchorOrigin={{vertical:"bottom",horizontal: "center"}}
      >
      <Alert onClose={()=>setSnackbarControl(false)} severity="success" sx={{ width: '100%' }}>
       Operation Successful
      </Alert>
    </Snackbar>
  </div>
}