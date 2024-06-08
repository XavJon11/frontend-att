import React from 'react';

import Footer from '../../components/Footer/Footer';
import InstituicaoPage from '../../components/TelaIES/TelaIES';


const IESPage: React.FC = () => {
  return (
    <div className="home-page">

      <InstituicaoPage />
      <Footer />
    </div>
  );
}

export default IESPage;
