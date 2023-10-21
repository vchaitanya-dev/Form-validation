import { Row, Col, Form, Button} from 'react-bootstrap'
import {useState} from 'react'
function App() {
  const [data,setData] = useState({
    id:0,
    name:"",
    email:"",
    phone:0,
    gender:"",
    place:"",
    message:"",
    url:""
  })
  const [file,setFile] = useState("")
  const {name,email,phone,place,message} = data
  const handleChange = (e) => {
    let {name,value} = e.target
  setData({
    ...data,
   [name]:value
  }) 
  }
const handleFile = (e) => {
  const img = e.target.files[0]
  setFile(img.name)
}

 const handleClick = async (e) => {
 data.url = file
data.id = data.id + 1
 let options = {
   method:"POST",
   headers:{
     'Content-Type':'application/json'
   },
   body:JSON.stringify(data)
 }
try{
  const response = await fetch('http://localhost:4040/form', options)
  const formdata = response.json()
 return [...formdata,formdata]
}
catch(error){
  console.log(error.message)
}
 }

 return (
<div className="container mt-2 ">
    <Col>
<form className="form-container">
      <Form.Label>Form with validations</Form.Label>
  <Form.Group as={Row}>
     <Form.Label>Input Label</Form.Label>
   <Form.Control placeholder="Enter your name" 
      name="name" onChange={handleChange} value={name}
     type="text" className={name.length === 0 ? 'isInvalid' : ''}
/> 
     </Form.Group>   
     <Form.Group as={Row}>
     <Form.Label>Input Label</Form.Label>
  <Form.Control type="Email" name="email" value={email}
     placeholder="Enter your email" onChange={handleChange}
    className={email.includes('@') === false && email.endsWith('.com') === false ? 'isInvalid' :''}
     />
     </Form.Group>  
     <Form.Group as={Row}>
     <Form.Label>Input Label</Form.Label>
     <Form.Control type="number" name="phone" value={phone}
     placeholder="Enter your mobile number" onChange={handleChange}
     className={/^\d{10}$/.test(phone) === false ? 'isInvalid' :''}
     />
     </Form.Group>  
     <Form.Group as={Row} className="mb-3">
     <Form.Label>Gender</Form.Label>
    <Form.Group className="radio-group" >
    <Form.Group>
      <Form.Check type="radio" name="gender"  
      value="Female" onChange={handleChange}
      />
      <Form.Label>Female</Form.Label>
    </Form.Group>
    <Form.Group>
      <Form.Check type="radio" name="gender" 
       value="Male" onChange={handleChange}
      />
      <Form.Label>Male</Form.Label>
    </Form.Group>
    <Form.Group>
      <Form.Check type="radio" name="gender" 
       value="Others" onChange={handleChange}
      />
      <Form.Label>Others</Form.Label>
    </Form.Group>
    </Form.Group>
     </Form.Group>  
     <Form.Group as={Row} className="mb-3">
       <Form.Select name="place" value={place} onChange={handleChange}  >
         <option value="Action">Action</option>
         <option value="Another Action">Another Action</option>
         <option value="Something other">Something Other</option>
       </Form.Select>
     </Form.Group>
     <Form.Group as={Row} className="mb-3">
       <textarea rows={6} name="message" onChange={handleChange}
       placeholder="placholder" className={message.length < 300 ? 'form-control textarea':'form-control textarea isInvalid'} 
        value={message} 
        />
        <p style={{color:'white',textAlign:'end'}}>{300 - message.length} remaning characters</p>
     </Form.Group>
     <Form.Group>
       <Form.Control type="file" onChange={handleFile}
       id="hiddenImage" hidden  />
       <Form.Group style={{
         display:'flex',
         flexDirection:"row",
         gap:'20px'
       }}>
       <Form.Label className="btn btn-primary"  htmlFor="hiddenImage"style={{
         border:'2px dashed white',
         width:'150px',
       }} >Upload File</Form.Label>
        {file === "" ? (<p style={{
          marginTop:'4px',
          color:'white'
        }}>no file </p>) : (<p 
          style={{
            marginTop:'4px',
            color:'white'
          }}
        >{file.name}</p>)}
       </Form.Group>
     </Form.Group>
     <Button onClick={handleClick}
     >Submit</Button>
</form>
    </Col>
</div>
    )
}

export default App;
