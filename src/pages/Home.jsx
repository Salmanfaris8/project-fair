import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImg from '../assets/project.jpg'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { getHomeProjectAPI } from '../services/allAPI'

const Home = () => {

  const [allHomeProjects,setAllHomeProjects] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    getAllHomeProjects()
  },[])

  const handleProjects =()=>{
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }
    else{
      alert("Please login to get full access to our projects!!!")
    }
  }

  const getAllHomeProjects = async ()=>{
    try{
      const result = await getHomeProjectAPI()
      if(result.status == 200){
        setAllHomeProjects(result.data)
      }
    }
    catch(err){
      console.log(err);
    }
  }
  console.log(allHomeProjects);
  

  return (
    <>
      <div style={{minHeight:'100vh'}} className="d-flex justify--content-center align-items-center rounded shadow">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker me-2'></i> Project Fair</h1>
              <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo labore consequatur quasi fugiat saepe suscipit, culpa similique corporis optio magni sed aperiam hic est fuga facilis numquam sequi illum ea.
              </p>
              {
                sessionStorage.getItem("token")?
                <Link to={'/dashboard'} className='btn btn-secondary'>MANAGE YOUR PROJECTS</Link>
                :
                <Link to={'/login'} className='btn btn-secondary'>STARTS TO EXPLORE</Link>
              }
            </div>
            <div className="col-lg-6">
              <img className='img-fluid' src={landingImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {
              allHomeProjects.map(project=>(
                <div key={project?._id} className="me-5">
                  <ProjectCard displayData={project}/>
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleProjects} className='btn btn-outline-info mt-5'>Click here to view more Projects..</button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
              <img width={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" alt="" />
              <span>Max Miller</span>
            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-center mb-3'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
              </div>
              <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi iusto, aliquid impedit autem similique iste eius libero soluta quibusdam cum iure facere accusantium vero at dolorum? Quo, voluptatibus corrupti?
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
              <img width={'60px'} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/OIP.WpnGIPj1DKAGo-CP64znTwHaHa?rs=1&pid=ImgDetMain" alt="" />
              <span>Zara Nia</span>
            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-center mb-3'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-regular fa-star-half-stroke text-warning"></i>
              </div>
              <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi iusto, aliquid impedit autem similique iste eius libero soluta quibusdam cum iure facere accusantium vero at dolorum? Quo, voluptatibus corrupti?
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className='d-flex align-items-center justify-content-center flex-column'>
              <img width={'60px'} className='rounded-circle img-fluid' src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="" />
              <span>Nicolas Jackson</span>
            </Card.Title>
            <Card.Text>
              <div className='d-flex justify-content-center mb-3'>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-solid fa-star text-warning"></i>
                <i className="fa-regular fa-star text-warning"></i>
              </div>
              <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nisi iusto, aliquid impedit autem similique iste eius libero soluta quibusdam cum iure facere accusantium vero at dolorum? Quo, voluptatibus corrupti?
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </>
  )
}

export default Home