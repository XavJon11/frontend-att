import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const TelaLogin: React.FC = () => {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');


  const handleLogin = () => {
    console.log('CNPJ:', cnpj);
    console.log('Senha:', senha);
  };

  return (
    <div className="login-page">
    <div className="cadastro-container">
      <img src={require('../../assets/imgs/logo_ra1.png')} alt="Logo" />
      <h1 className="h1Cadastro"> Login </h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className='p-login'>
          <p><Link to="/esquecisenha">Esqueceu a senha?</Link></p>
        </div>
        <button type="submit" className="BLogin">Fazer Login</button>
      </form>
    </div>
  </div>
  );
};

export default TelaLogin;