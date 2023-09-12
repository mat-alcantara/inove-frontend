import React, {useState} from 'react'
import api from '../utils/api';

const NewContact = () => {
   
    const modalStyle = {
      width: '80%', 
      maxWidth: '800px', 
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
    const searchInputStyle = {
      height: '35px',
      width: '300px',
      border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px',
      marginRight:'10px',
      position: 'relative',
      marginBottom: '30px'
    };
    const searchInputSmallStyle = {
      height: '35px',
      width: '100px',
      border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px',
      marginRight:'10px',
      position: 'relative',
      marginBottom: '30px'
    };
    
    const rowStyle = {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '10px',
    };
    
    const labelStyle = {
      marginBottom: '5px',
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

        // Definição do state para cada campo
        const [nome, setNome] = useState('');
        const [sobrenome, setSobrenome] = useState('');
        const [email, setEmail] = useState('');
        const [telefone, setTelefone] = useState('');
        const [endereco, setEndereco] = useState('');
        const [cidade, setCidade] = useState('');
        const [estado, setEstado] = useState('');
        const [uf, setUf] = useState('');
        const [origem, setOrigem] = useState('');
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const response = await api.post('clientes', {
                    nome,
                    sobrenome,
                    email,
                    telefone,
                    endereco,
                    cidade,
                    estado,
                    uf,
                    origem
                });
    
                if (response.status === 200) {
                    console.log("Dados enviados com sucesso!");
                }
            } catch (error) {
                console.error("Erro ao enviar os dados", error);
            }
        };
    
    
  return (
    <div>
    <div style={modalStyle}>
        <h2>Novo Contato</h2>
        <form onSubmit={handleSubmit}>
            <div style={rowStyle}>
                <div style={columnStyle}>
                    <label htmlFor="nome" style={labelStyle}>Nome:</label>
                    <input type="text" id="nome" required style={searchInputStyle} value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div style={columnStyle}>
                    <label htmlFor="sobrenome" style={labelStyle}>Sobrenome:</label>
                    <input type="text" id="sobrenome" required style={searchInputStyle} value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
                </div>
            </div>

            <div style={rowStyle}>
                <div style={columnStyle}>
                    <label htmlFor="email" style={labelStyle}>Email:</label>
                    <input type="email" id="email" required style={searchInputStyle} value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div style={columnStyle}>
                    <label htmlFor="telefone" style={labelStyle}>Telefone:</label>
                    <input type="text" id="telefone" required style={searchInputStyle} value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
            </div>

            <div style={rowStyle}>
                <div style={columnStyle}>
                    <label htmlFor="endereco" style={labelStyle}>Endereço:</label>
                    <input type="text" id="endereco" required style={searchInputStyle} value={endereco} onChange={e => setEndereco(e.target.value)} />
                </div>
                <div style={columnStyle}>
                    <label htmlFor="cidade" style={labelStyle}>Cidade:</label>
                    <input type="text" id="cidade" required style={searchInputStyle} value={cidade} onChange={e => setCidade(e.target.value)} />
                </div>
            </div>

            <div style={rowStyle}>
                <div style={columnStyle}>
                    <label htmlFor="estado" style={labelStyle}>Estado:</label>
                    <input type="text" id="estado" required style={searchInputStyle} value={estado} onChange={e => setEstado(e.target.value)} />
                </div>
                <div style={columnStyle}>
                    <label htmlFor="uf" style={labelStyle}>UF:</label>
                    <input type="text" id="uf" required style={searchInputSmallStyle} value={uf} onChange={e => setUf(e.target.value)} />
                </div>
            </div>

            <div style={rowStyle}>
                <div style={columnStyle}>
                    <label htmlFor="origem" style={labelStyle}>Origem:</label>
                    <input type="text" id="origem" required style={searchInputStyle} value={origem} onChange={e => setOrigem(e.target.value)} />
                </div>
            </div>

            <button type="submit" style={greenButtonStyle}>Adicionar</button>
        </form>
    </div>
</div>

  )
}

export default NewContact





