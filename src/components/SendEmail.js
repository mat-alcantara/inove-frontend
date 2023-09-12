import React from 'react'
import { useNavigate } from 'react-router-dom'

const SendEmail = () => {

  const modalStyle = {
    width: '100%', 
    maxWidth: '1000px', 
    alignItems: 'center',
    position: 'relative',
    height: '40px',
    top: '20px', 
    left: '10px',
   
  };
  
  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
  };
 
  const searchInputSmallStyle = {
    height: '280px',

    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    marginRight:'10px',
    position: 'relative',
    marginBottom: '30px'
  };
  


  const greenButtonStyle = {
    backgroundColor: '#4CAF50',
    color: '#000', 
    padding: '12px 24px', 
    fontSize: '18px', 
    border: 'none',
    width: '100%', 
    borderRadius: '8px', 
    cursor: 'pointer',
  };
  
  
return (
  <div>
    <div style={modalStyle}>
      <h2>Enviando e-mail</h2>
      <form >
  
        <div style={columnStyle}>
    
          <textarea type="text" id="state" required      style={searchInputSmallStyle}/>
        </div>
        <div>
        
        </div>
        <button type="submit" style={greenButtonStyle}>Enviar</button>
      </form>
    </div>
    
  </div>)
}
export default SendEmail
