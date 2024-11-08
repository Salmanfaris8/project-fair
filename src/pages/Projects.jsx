import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectsAPI } from '../services/allAPI'

const Projects = () => {

  const [searchKey,setSearchKey] = useState("")
  const [allProjects,setAllProjects] = useState({})

  useEffect(()=>{
    getAllProjects()
  },[searchKey])

  const getAllProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      try{
        const result = await allProjectsAPI(searchKey,reqHeader)
        if(result.status == 200){
          setAllProjects(result.data)
        }
      }
      catch(err){
        console.log(err);
      }
    }
  }
  console.log(allProjects);
  
  return (
    <div>
      <Header/>
      <div style={{paddingTop:'100px'}} className="d-flex justify-content-between">
        <h1>All Projects</h1>
        <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Projects by their languages' className='form-control w-25' />
      </div>
      <Row className='m-3'>
        {
          allProjects?.length>0?
          allProjects?.map(project=>(
            <Col key={project._id} className='mb-3' sm={12} md={6} lg={4}>
              <ProjectCard displayData={project}/>
            </Col>
          ))
          :
          <div className='text-danger fw-bolder'>Projects not found</div>
        }
      </Row>
    </div>
  )
}

export default Projects