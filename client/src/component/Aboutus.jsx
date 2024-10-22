import React from 'react'
import Foot from './Foot'
const Aboutus = () => {
  return (
    <>
    <div className='container'>
        <div className='row pt-5'>
            <div className='col-4'></div>
            <div   className='col-4  '>
                <h1 style={{textAlign:"center"}}>About us</h1>
                <p style={{textAlign:"center", paddingTop:"10px"}}>If you’ve got great products your making or looking to work with us then drop us a line</p>
                
            </div>
            <div className='col-4'></div>

        </div>
        <div className='row pt-5'>
            <div className='col-5'>
                <img style={{height:"500px", width:"500px"}} src='https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?size=626&ext=jpg&ga=GA1.1.675823430.1729443860&semt=ais_hybrid'></img>
            </div>
            <div  style={{paddingTop:"180px"}}  className='col-7  '>
                <h4>Our Company</h4>
                <p style={{textAlign:"", paddingTop:"10px"}}>As online shopping continues to grow, make your mark with a fully-equipped e-commerce platform. We offer unparalleled expertise in creating dynamic electronics online stores that elevate your electronics and gadgets brand, showcasing a wide range of electronic products online.</p>
                
            </div>
            

        </div>
        <div className='row pt-5'>
            <div  style={{paddingTop:"180px"}} className='col-7'>
            <h4>Team Work</h4>
                <p style={{textAlign:"", paddingTop:"10px"}}> Our team specializes in creating seamless, user-friendly e-commerce platforms for electronics and gadgets, showcasing your cutting-edge products with high-resolution images, comprehensive technical specifications, and advanced search features that allow customers to filter by brand, features, and compatibility.</p>
                
                
            </div>
            <div   className='col-5  '>
                
        
                <img style={{height:"500px", width:"500px"}} src='https://www.freevector.com/uploads/vector/preview/55321/vecteezycharacter-focused-illustration-brainstormingAW1121_generated.jpg'></img>
            </div>
            

        </div></div><br></br><br></br><br></br><br></br><br></br><br></br>
        <div style={{backgroundColor:"whitesmoke",}}>
        <div  class="container text-center">
  <div   class="row align-items-center">
    <div style={{paddingTop:"100px",paddingBottom:"100px"}} class="col ">
    <img style={{height:"80px"}} src="https://comsecsolutions.in/wp-content/uploads/2021/03/unnamed.gif" alt="" /><br></br><br></br>
      <h5>Our Mission</h5>
      <p> The purpose of the organization and provides a strong foundation for its future growth. By clearly stating its goals, values, and objectives, a mission statement helps guide decision-making and provides employees with motivation and direction</p>
    </div>
    <div style={{paddingTop:"100px",paddingBottom:"100px"}} class="col ">
    <img style={{height:"80px"}} src="https://cdn-icons-gif.flaticon.com/14251/14251553.gif" alt="" /><br></br><br></br>
    <h5>Our Vision</h5>
    <p> Vision works on the company’s strategy for growth and success by identifying its target market.Customer needs: The actions that a user must be able to complete with your product or service are listed in the customer requirements and sconducting surveys.</p>
    </div>
    <div style={{paddingTop:"100px",paddingBottom:"100px"}} class="col ">
        <img style={{height:"80px"}} src="https://cdn.pixabay.com/animation/2022/10/12/22/41/22-41-33-918_512.gif" alt="" /><br></br><br></br>
    <h5>Our Idea</h5>
    <p>Our Idea is where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller.Focusing on benefits rather than on the product itself is a better way to sell</p>
    </div>
  </div>
</div>
</div><br></br><br></br>
<hr></hr>
<div className='row pt-5'>
            <div className='col-4'></div>
            <div   className='col-4  '>
                <h1 style={{textAlign:"center"}}>Our Products</h1>
                <p style={{textAlign:"center", paddingTop:"10px"}}>If you’ve got great products your making or looking to work with us then drop us a line</p>
                
            </div>
            <div className='col-4'></div>

        </div>
        <div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9GteEOnSMDnrB2F0-xiM_hXCw8DLWaM3tw&s" alt="" />
      <button
            style={{ height: "40px", width: "200px" }}
            className="btn btn-mycolor"
          >
            Headphone
          </button>
    </div>
    <div class="col">
      <img style={{height:"220px"}} src='https://www.techtarget.com/rms/onlineimages/hp_elitebook_mobile.jpg'></img>
      <button
            style={{ height: "40px", width: "200px" }}
            className="btn btn-mycolor"
          >
            Laptop
          </button>
    </div>
    <div class="col">
      <img style={{height:"222px"}} src='https://www.jiomart.com/images/product/original/494404942/apple-ipad-air-6th-gen-2024-27-59-cm-11-inch-wi-fi-tablet-128-gb-blue-digital-o494404942-p608933212-2-202405082001.jpeg?im=Resize=(420,420)'></img>
      <button
            style={{ height: "40px", width: "200px" }}
            className="btn btn-mycolor"
          >
            Tablet
          </button>
    </div>
    <div class="col">
      <img style={{height:"193px"}} src='https://gppro.in/wp-content/uploads/2022/10/Nikon-Z6-Mirrorless-Camera-with-24-70mm-Lens-5-600x600.jpg'></img><br></br><br></br>
      <button
            style={{ height: "40px", width: "200px" }}
            className="btn btn-mycolor"
          >
            Camera
          </button>
    </div>
  </div>
</div> <br></br> <br></br> <br></br>
<Foot/>
    </>
  )
}

export default Aboutus