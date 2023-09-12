
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi'; // Importando ícones de lupa e adicionar
import api from '../utils/api';

const Contacts = () => {

  const navigate = useNavigate();
  function clickHandler() {
      navigate("/new-contact");
  }

  useEffect(() => {
    // Função para carregar dados da API
    const loadData = async () => {
      try {
        const response = await api.get('clientes');

        console.log(response);
        
        // Mapeamos os dados recebidos para o formato desejado
        const formattedData = response.data.map(client => ({
          id: client.id,
          name: `${client.nome} ${client.sobrenome}`,
          address: `${client.endereco}, ${client.cidade}, ${client.estado}, ${client.uf}`,
          phone: client.telefone,
        }));
    
        setData(formattedData);
      } catch (error) {
        console.error('Erro ao carregar dados', error);
      }
    };
    
    // Carregamos os dados quando o componente é montado
    loadData();
  }, []); // Dependência vazia para carregar somente na montagem do componente

  const initialData = [
    { id: 1, name: 'Contato 1', address: 'Endereço 1', phone: '111-111-1111' },
    { id: 2, name: 'Contato 2', address: 'Endereço 2', phone: '222-222-2222' },
    { id: 3, name: 'Contato 3', address: 'Endereço 3', phone: '333-333-3333' },
    { id: 4, name: 'Contato 4', address: 'Endereço 4', phone: '444-444-4444' },
    { id: 5, name: 'Contato 5', address: 'Endereço 5', phone: '555-555-5555' },
    { id: 6, name: 'Contato 6', address: 'Endereço 6', phone: '666-666-6666' },
    { id: 7, name: 'Contato 7', address: 'Endereço 7', phone: '777-777-7777' },
    { id: 8, name: 'Contato 8', address: 'Endereço 8', phone: '888-888-8888' },
    { id: 9, name: 'Contato 9', address: 'Endereço 9', phone: '999-999-9999' },
    { id: 10, name: 'Contato 10', address: 'Endereço 10', phone: '101-010-1010' },
  ];

  const [data, setData] = useState([{}]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = () => {
    const filteredContacts = data.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setData(filteredContacts);
  };

  const handleEdit = (id) => {
    const contactToEdit = data.find((contact) => contact.id === id);

    console.log('Editar contato:', contactToEdit);
  };


  const handleDelete = (id) => {
      api.delete(`clientes/${id}`)
      .then(response => {
          // O registro foi deletado com sucesso. Atualize a lista de contatos localmente.
          const updatedData = data.filter((contact) => contact.id !== id);
          setData(updatedData);
          console.log('Excluído com sucesso o contato de ID:', id);
      })
      .catch(error => {
          // Algum erro ocorreu durante a requisição. Informe ao usuário ou registre para debugging.
          console.error('Erro ao excluir o contato:', error);
      });
  };
  

  return (
    <div>
    <div style={searchGroupStyle}>
    <label htmlFor="searchInput" style={searchLabelStyle}>
    Contatos
    </label>
      <div style={searchContainerStyle}>
   
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por nome"
          style={searchInputStyle}
        />
        <FiSearch
          size={20}
          style={{ marginLeft: 'auto', marginRight: '10px', cursor: 'pointer' }} // Movendo o ícone de lupa para a direita
          onClick={handleSearch} // Adicionando a função de busca ao clique no ícone
        />
        <FiPlus size={20} style={{ marginRight: '10px', cursor: 'pointer' }}
        onClick={clickHandler}
        /> 
      </div>
      </div>
      <div style={gridContainerStyle}>
        {data.map((item) => (
          <div key={item.id} style={{ width: '95%', height: '202px', margin: '10px',padding: '15px', backgroundColor: '#D9D9D9' }}>
            <p>Nome: {item.name}</p>
            <p>Endereço: {item.address}</p>
            <p>Telefone: {item.phone}</p>
            <button style={blueButtonStyle} onClick={() => handleEdit(item.id)}>Editar</button>
            <button style={blueButtonStyle} onClick={() => handleDelete(item.id)}>Excluir</button>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default Contacts



const searchContainerStyle = {
  width: '50%',
  maxWidth: '519px', 
  height: '40px',
  top: '20px', 

  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  position: 'relative',
  marginLeft: '10px',
  marginBottom: '50px'
 
};


const searchInputStyle = {
  flex: '1',
  height: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '16px',
  paddingLeft: '10px',
  padding: '0 10px',

};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
  gap: '30px',
  justifyContent: 'center',
  
};

const searchLabelStyle = {
  width: '20%',
  height: '40px',
  top: '20px', 
  marginBottom: '20px', 
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginLeft: '10px',
  fontSize: '26px',
  fontWeight: 'bold',
};

const searchGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  marginBottom: '10px',
  position: 'relative',
  top: '20px', 
};


const blueButtonStyle = {
  backgroundColor: 'transparent', 
  color: '#0500FF', 
  fontSize: '17px', 
  border: 'none',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginRight:'0px',
  marginTop:'50px',
  textDecoration: 'none',
};
