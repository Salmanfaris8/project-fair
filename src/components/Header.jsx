import React, { useContext } from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'

const Header = ({insideDashboard}) => {

  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  const navigate = useNavigate()

  const logout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate("/")
  }

  return (
    <div>
      <Navbar style={{zIndex:1}} className="border rounded position-fixed w-100 bg-secondary">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand className='text-primary fw-bolder fs-2'>
            <i className='fa-brands fa-docker me-2 '></i>Projrct Fair
            </Navbar.Brand>
          </Link>
          {
            insideDashboard &&
            <div className="ms-auto">
              <button onClick={logout} className='btn fw-bolder'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header