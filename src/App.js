import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import NewContacts from './components/NewContacts';
import Sales from './components/Sales';
import Graphic from './components/Graphic';
import SendEmail from './components/SendEmail';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App" style={containerStyle}>
       {/* Navigation Bar */}
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="navbar-title">GoDigital</div>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/">Contatos</NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/sales">Vendas</NavLink>
          </li>
          
  
        </ul>
        <div className="navbar-username">ADMINISTRADOR</div> {/* Replace "John Doe" with the actual username */}
      </div>


      <Routes>
        <Route path="/" element={<MainHeader/>} >
          {/* Default Route */}
          <Route index element={<Contacts/>} />
          <Route path="/new-contact" element={<NewContacts/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/send-email" element={<SendEmail/>} />
          <Route path="/graphic" element={<Graphic/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


const containerStyle = {
  justifyContent: 'center',
  margin: '0 20%', 
};
