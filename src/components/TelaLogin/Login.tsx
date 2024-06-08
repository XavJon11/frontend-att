import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const TelaLogin: React.FC = () => {
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://rabackend-production-c802.up.railway.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cnpj, senha }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login bem-sucedido:', data);
        navigate('/IES');
      } else {
        const text = await response.text();
        setError(text || 'Credenciais inválidas, por favor, verifique seus dados.');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      setError('Ocorreu um erro, por favor, tente novamente.');
    }
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
          {error && <div className="error">{error}</div>}
          <button type="submit" className="BLogin">Fazer Login</button>
        </form>
      </div>
    </div>
  );
};

export default TelaLogin;
