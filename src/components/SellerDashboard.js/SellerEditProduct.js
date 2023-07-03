import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, InputAdornment, OutlinedInput, Snackbar, TextField, Typography,Alert } from "@mui/material"
import React, { useState } from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import {CheckBox, ExpandMoreOutlined} from "@mui/icons-material"
import BackendLink from "../../data_resourses/BackendLink";

export default function AddProduct() {

  const [Category, setCategory] = useState('');
  const [Files,setFiles]=useState(Array(5).fill(null))
  const [age, setAge] = useState()
  const [droppedImage, setDroppedImage] = useState(null);
  const [boxes, setBoxes] = useState(Array(5).fill(null));
  const [ImagePublicID,setImagePublicId]=useState(Array(5).fill(null))
  const [ProductName,setProductName]=useState('')
  const [ProductDescription,setProductDescription]=useState('')
  const [ProductBrandName,setProductBrandName]=useState('')
  const [ProductMRP,setProductMRP]=useState(0)
  const [ProductSellingPrice,setProductSellingPrice]=useState(0)
  const [ProductQuantity,setProductQuantity]=useState('')
  const [ProductModelNumber,setProductModelNumber]=useState(0)
  const [ProductModelName,setProductModelName]=useState("")
  const [ProductColor,setProductColor]=useState('')
  const [ProductLength,setProductLength]=useState('')
  const [ProductHeight,setProductHeight]=useState(0)
  const [ProductWeight,setProductWeight]=useState()
  const [ProductWidth,setProductWidth]=useState()
  const [ProductWarrantySummary,setProductWarrantySummary]=useState()
  const [ProductServiceType,setProductServiceType]=useState()
  const [ProductServiceCover,setProductServiceCover]=useState()
  const [SnackbarControl,setSnackbarControl]=useState(false)
  const [EmptyFeildError,setEmptyFeildError]=useState("")
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
  const handleUpload = async (index) => {
    const imageFile = Files[index];
    if (imageFile) {
      try {        
        const formData = new FormData();
        formData.append('file', imageFile);
        const response = await axios.post(BackendLink+'/upload', formData);
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
  const handleDelete = async (index) => {
    const updatedBoxes = [...boxes];
    const updatedFiles=[...Files]
    const updatePublicImage=[...ImagePublicID]
    try{
    let result = await axios.post(BackendLink+"/deleteimage",ImagePublicID[index])
  } catch(e){
    console.log(e)
  }
    updatedFiles[index]=null;
    updatePublicImage[index]=null;
    updatedBoxes[index] = null;
    setBoxes(updatedBoxes);
  };
  const AddProduct=async ()=>{
    if (ProductName.length===0 || ProductDescription.length ===0 || ProductBrandName.length===0 || ProductMRP===0 || ProductSellingPrice===0){
      setEmptyFeildError('Fill all feilds in General')
      setSnackbarControl(true)
      return 
    }
    else if (ProductModelName.length===0 || ProductModelNumber===0 || ProductColor.length===0){
      setEmptyFeildError("Fill all feilds in Specification")
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
    if(ProductLength===0 || ProductWeight===0 || ProductWidth===0){
      setEmptyFeildError("Fill all required feilds in Dimensions")
      setSnackbarControl(true)
      return 
    }
    if (ProductWarrantySummary.length===0 || ProductServiceType.length===0 || ProductServiceCover.length===0){
      setEmptyFeildError("Fill the warranty details")
      setSnackbarControl(true)
      return 
    }
    const UploadLoad={
      Category:age,
      ProductTitle:ProductName,
      ProductDescription,
      ProductMRP,ProductSellingPrice,ProductQuantity,ProductBrandName,ProductColor,ProductHeight,ProductLength,ProductModelName,ProductModelNumber,ProductWidth,ProductWarrantySummary,ProductWeight,ProductServiceCover,ProductServiceType,ImagePublicID
    }
    let UploadResponse=await axios.post(BackendLink+"/AddProductToCatlog",UploadLoad)
  }
  const renderBoxes = () => {
    return boxes.map((box, index) => (
      <div
        key={index}
        style={{
          width: '300px',
          height: '250px',
          border: '1px solid black',
          marginBottom: '10px',
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
        <p>OR</p>
        <input type="file" accept="image/*" onChange={(event) => handleInputChange(event, index)} />

        <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
          <Button color="success" onClick={() => handleUpload(index)}>Upload</Button>
          <Button  color="error" onClick={() => handleDelete(index)}>Delete</Button>
        </div>
      </div>
    ));
  };





  return <div className="RightProfile">
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
    <TextField required value={ProductName} onChange={(e)=>setProductName(e.target.value)} size="small" m={3} helperText="Product name must not excced 30 words" />
    </div>
    <div style={InputFeildsStyle}>
    <label>Product Description *</label>
    <TextField required value={ProductDescription} onChange={(e)=>setProductDescription(e.target.value)} size="small"  helperText={"Add a detailed explanation of your product at least of 30 words"} multiline fullWidth />
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
    {renderBoxes()}
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
        <div style={InputFeildsStyle}>
        <label>Model Number/ID *</label>
        <br />
        <TextField onChange={(e)=>setProductModelNumber(e.target.value)} required size="small" value={ProductModelNumber} ></TextField>
        </div>
        <div style={InputFeildsStyle}>
        <label>Model Name/Type *</label>
        <br />
        <TextField onChange={(e)=>setProductModelName(e.target.value)} required size="small" value={ProductModelName} ></TextField>
        </div>
        <div style={InputFeildsStyle}>
        <label>Color *</label>
        <br />
        <TextField onChange={(e)=>setProductColor(e.target.value)} required value={ProductColor} size="small" ></TextField>
        </div>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreOutlined/>}
      >
        <Typography>Add Dimensions</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <h5>* fields are required</h5>
        <div style={InputFeildsStyle}>
        <label>Length *</label>
        <br />
        <OutlinedInput
        value={ProductLength}
        size="small"
        required
        onChange={(e)=>setProductLength(e.target.value)}
        endAdornment={<InputAdornment position="end">m</InputAdornment>}
        >
        </OutlinedInput>
        </div>
        <div style={InputFeildsStyle}>
        <label>Height *</label>
        <br />
        <OutlinedInput
        value={ProductHeight}
        onChange={(e)=>setProductHeight(e.target.value)}
        size="small"
        required
        endAdornment={<InputAdornment position="end">m</InputAdornment>}
        >
        </OutlinedInput>
        </div>
        <div style={InputFeildsStyle}>
        <label>Weigth *</label>
        <br />
        <OutlinedInput
        value={ProductWeight}
        size="small"
        onChange={(e)=>setProductWeight(e.target.value)}
        required
        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
        >
        </OutlinedInput>
        </div>
        <div style={InputFeildsStyle}>
        <label>Width *</label>
        <br />
        <OutlinedInput
        value={ProductWidth}
        size="small"
        onChange={(e)=>setProductWidth(e.target.value)}
        required
        endAdornment={<InputAdornment position="end">m</InputAdornment>}
        >
        </OutlinedInput>
        </div>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
      expandIcon={<ExpandMoreOutlined />}
      >
        <Typography required >Add Service details</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <h5>* fields are required</h5>
        <div style={InputFeildsStyle}>
          <label>Warranty Summary *</label>
          <br></br>
          <TextField onChange={(e)=>setProductWarrantySummary(e.target.value)} value={ProductWarrantySummary} size="small" />
        </div>
        <div style={InputFeildsStyle}>
          <label>Service Type *</label>
          <br/>
          <TextField onChange={(e)=>setProductServiceType(e.target.value)} required value={ProductServiceType} size="small" />
        </div>
        <div style={InputFeildsStyle}>
          <label>Covered in Warranty*</label>
          <br />
          <TextField required onChange={(e)=>setProductServiceCover(e.target.value)} value={ProductServiceCover} size="small" helperText="What parts are covered in Warranty" />
        </div>
      </AccordionDetails>
    </Accordion>
    
    <FormControlLabel  control={<CheckBox />} label="I hearby agree to flipkart Term and conditions and confirm the above information is true as of my knowledge"></FormControlLabel>
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
  </div>
}