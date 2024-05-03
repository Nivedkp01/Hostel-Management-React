import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate=useNavigate()
  const totea=()=>{
    navigate('/tea')
  }

  const todinner=()=>{
    navigate('/dinner')
  }

  const tolunch=()=>{
    navigate('/lunch')
  }
  return (
    <div>
        <h1 className='he'>WELCOME TO MH WEBSITE</h1>
      <button className='btn' onClick={totea} >TEA</button>
      <button className='btn' onClick={tolunch}>LUNCH</button>
      <button className='btn' onClick={todinner}>DINNER</button>
    </div>
  )
}

export default Header
