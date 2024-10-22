import React ,{ useContext,useState}from 'react'
import AppContext from '../context/AppContext'
import Navbar from './Navbar'
import Foot from './Foot'

const Contactus = () => {

  
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [phone, setPhone]= useState("");
  const [message, setMessage]= useState("");
  const{contact} = useContext(AppContext);
  const formHandler = async(e)=> {
    e.preventDefault();
    console.log({name,email,phone,message})

    try {

      const result = await contact(name,email,phone,message)
        console.log("user add product  successfully", result)
        console.log(result.success)
        
      }
      catch(error){
        console.error("  error", error)
      }
    };
  return (
    <>
    
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
  <div className='container'>
        <div className='row pt-5'>
            <div className='col-4'></div>
            <div   className='col-4  '>
                <h1 style={{textAlign:"center"}}>Get in touch</h1>
                <p style={{textAlign:"center", paddingTop:"10px"}}>If you’ve got great products your making or looking to work with us then drop us a line</p>
                
            </div>
            <div className='col-4'></div>

        </div>
    </div>
    <form onSubmit={formHandler}>
    <div className='row'>
    <div className='col-4'>
    <div className="card text-center " style={{width:"402px",height:"220px" ,marginLeft:"105px", marginTop:"80px"}}>
  <div className="card-body">
 <div> <i style={{fontSize:"60px"}} class="bi bi-geo"></i></div>
    <p style={{paddingTop:"40px"}} className="card-text">7882, Reliance GIDC <br></br>Chowk bazzar, New York</p>
    
    
  </div>
</div>
    </div>
    <div className='col-4'>
    <div className="card text-center " style={{width:"402px",height:"220px" ,marginLeft:"50px", marginTop:"80px"}}>
  <div className="card-body">
 <div> <i style={{fontSize:"60px"}} class="bi bi-telephone"></i></div>
 
    <p style={{paddingTop:"40px"}} className="card-text">(+91) 123 456 7890 </p>
    
    
  </div>
</div>
    </div>
    <div className='col-4'>
    <div className="card text-center " style={{width:"402px",height:"220px" , marginTop:"80px"}}>
  <div className="card-body">
 <div> <i style={{fontSize:"60px"}} class="bi bi-envelope"></i></div>
 
    <p style={{paddingTop:"40px"}} className="card-text">support@spacingtech.com </p>
    
    
  </div>
</div>
    </div>
    <div className='row'>
    <div className='col-4'></div>
    <div className='col-4 ' >
    <h1 style={{textAlign:"center", paddingTop:"100px"}}>Drop us message</h1>
                <p style={{textAlign:"center", paddingTop:"10px"}}>If you’ve got great products your making or looking to work with us then drop us a line</p>
                
    </div>
    <div className='col-4'></div>

    </div>
    <div className='row'>
    <div className='col-3'></div>
   
    <div className='col-3'> <div class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Name</label>
    <input value={name} onChange={(e)=> setName(e.target.value)}  type="text" style={{width:"370px"}} class="form-control" id="exampleInputEmail1" placeholder='Name' aria-describedby="emailHelp"></input>
    
  </div></div>
    <div className='col-3'>
    <div  style={{marginLeft:"18px"}}class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Email</label>
    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" style={{width:"370px"}} class="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp"></input>
    
  </div>
    </div>
    <div className='col-3'></div>
        </div>
        <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
        <div  style={{}}class="mb-3  mt-1 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Phone number</label>
    <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="number" style={{width:"770px"}} class="form-control" id="exampleInputEmail1" placeholder='Phone number' aria-describedby="emailHelp"></input>
    
  </div>
        </div>
        <div className='col-3'></div>

        </div>
        <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
        <div class="mb-3 mt-1">
  <label  style={{color:"grey"}}for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea   value={message} onChange={(e)=> setMessage(e.target.value)} style={{width:"770px",height:"200px"}} class="form-control" placeholder='Message' id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </div>
        <div className='col-3'></div>

        </div>
        <div className='row'>
        <div className='col-3'></div>
        <div className='col-3 pt-2'>
            
  <button  style={{width:"130px" , color:"#ffc107", backgroundColor:" #050a30"}}class="btn " type="submit">SEND </button>
        </div>
        <div className='col-3'></div>
        <div className='col-3'></div>

        </div>


    </div>
    </form>
    <br></br>
    <Foot/>
    </>
  )
}

export default Contactus