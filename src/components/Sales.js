
import { useNavigate,Link } from 'react-router-dom'

import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'; 
import api from '../utils/api';

const Sales = () => {

  const navigate = useNavigate();
  function navigateToEmail() {
      navigate("/send-email");
  }

  function navigateToSearch() {
    navigate("/send-email");
}


  const initialData = [
    { id: 1, name: 'Contato 1', address: 'Endereço 1', phone: '111-111-1111' },
    { id: 2, name: 'Contato 2', address: 'Endereço 2', phone: '222-222-2222' },
    { id: 3, name: 'Contato 3', address: 'Endereço 3', phone: '333-333-3333' },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('produtos'); // Substitua "URL_DA_API" pela URL base da sua API
        setProducts(response.data);

        api.get('vendas')
            .then(response => {
                const vendas = response.data;

                // Buscar detalhes do cliente e produto para cada cotação
                Promise.all(vendas.map(venda => {
                    return Promise.all([
                        api.get(`clientes/${venda.idCliente}`),
                        api.get(`produtos/${venda.idProduto}`)
                    ]).then(responses => {
                        return {
                            id: venda.id,
                            name: responses[0].data.nome,
                            phone: responses[0].data.telefone,
                            product: responses[1].data.nome
                        };
                    });
                }))
                .then(data => setData(data));
            });
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleSearch = () => {
    const filteredContacts = initialData.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setData(filteredContacts);
  };

  const handleEdit = (id) => {
    const contactToEdit = data.find((contact) => contact.id === id);

    console.log('Editar contato:', contactToEdit);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((contact) => contact.id !== id);

    setData(updatedData);

    console.log('Excluir contato de ID:', id);
  };

  return (
    <div>
    <div style={searchGroupStyle}>
    <label htmlFor="searchInput" style={searchLabelStyle}>
    Painel de Vendas
    </label>
    <div key="nav" style={searchLabelSmallStyle}>
        <Link className="link" to="/graphic">
           Relatório de Projeção de vendas (PDF)
                </Link>
                <Link className="link" to="/graphic">
                Relatório de Win Rate (PDF)
                </Link>
                <Link className="link" to="/graphic">
                Relatório de Ticket Médio (PDF)
                </Link>
      </div>
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
          style={{ marginLeft: 'auto', marginRight: '10px', cursor: 'pointer' }} 
          onClick={handleSearch} 
        />
       
      </div>
      <h2 style={searchLabelStyle}>Cotações</h2>
      <div style={gridContainerStyle}>
                {data.map((item) => (
                    <div key={item.id} style={{ width: '95%', height: '202px', margin: '10px', padding: '15px', backgroundColor: '#D9D9D9' }}>
                        <p>Cliente: {item.name}</p>
                        <p>Produto: {item.product}</p>
                        <p>Telefone: {item.phone}</p>
                        <button style={blueButtonStyle} onClick={() => navigateToEmail()}>Enviar e-mail</button>
                        <button style={blueButtonStyle} onClick={() => navigateToSearch()}>Enviar pesquisa</button>
                    </div>
                ))}
            </div>
      </div>
      <h2 style={searchLabelStyle}>Produtos</h2>
      <div style={gridContainerStyle}>
        {products.map((product) => (
          <div key={product.id} style={{ width: '95%', height: '202px', margin: '10px',padding: '15px', backgroundColor: '#D9D9D9' }}>
            <p>Nome: {product.nome}</p>
            <p>Valor: {product.valor}</p>
            <p>Duração (horas): {String(product.duracaoHoras)}</p>
            <button style={blueButtonStyle} onClick={() => handleEdit(product.id)}>Editar</button>
            <button style={blueButtonStyle} onClick={() => handleDelete(product.id)}>Excluir</button>
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default Sales



const searchContainerStyle = {
 
  maxWidth: '519px', 
  height: '40px',
  top: '20px', 
  
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  position: 'relative',
  marginLeft: '10px',
  marginBottom: '30px'
   
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
 
  height: '40px',
  top: '20px', 
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  marginLeft: '10px',
  fontSize: '26px',
  fontWeight: 'bold',
};

const searchLabelSmallStyle = {
  flexDirection: 'column',
  top: '30px',
  marginBottom: '30px',
  left: '10px',

  display: 'flex',
  position: 'relative',
  fontSize: '16px',
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
