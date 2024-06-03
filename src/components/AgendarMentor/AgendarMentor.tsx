// MentorPage.js
import React from 'react';
import mentor1 from '../../assets/imgs/mentor1.png';
import mentor2 from '../../assets/imgs/mentor2.jpg';
import mentor3 from '../../assets/imgs/mentor3.jpg';
import '../Tela-Agendamento/telaAgendamento.css';
const Mentor: React.FC = () => {
  
  return (
    <div className="mentor-container">
      <h2>Nossos Mentores</h2>

      <div className='mentor-cards'>
        {/* 1 Card de Mentor */}
        <div className='mentor-card'>
          <img src={mentor1} alt="Mentor" />
          <div className='mentor-info'>
            <h3>Deangellis Berg</h3>
            <br />
            <p>Como mentor, compartilho minhas experiências e conhecimentos sobre o cyberbullying, destacando a importância do respeito online, da empatia e do cuidado com as palavras e ações virtuais.
              <br />
              <br />
              Eu os oriento sobre como reconhecer sinais de cyberbullying, como lidar com mensagens ou posts ofensivos e como buscar ajuda quando necessário.</p>
          </div>
        </div>

        {/* 2 Card de Mentor */}
        <div className='mentor-card'>
          <img src={mentor2} alt="Outro Mentor" />
          <div className='mentor-info'>
            <h3>Arnaldo Willian</h3>
            <br />
            <p>Como mentor, compartilho minhas experiências pessoais e conhecimentos especializados sobre o cyberbullying.
              <br />
              <br />
              Meu objetivo é orientá-los sobre como reconhecer os sinais de cyberbullying, oferecendo estratégias eficazes para lidar com mensagens ou posts ofensivos. Estou aqui para ajudá-los a navegar nesse cenário digital desafiador e a buscar ajuda sempre que necessário.</p>
          </div>
        </div>

        {/* 3 Card de Mentor */}
        <div className='mentor-card'>
          <img src={mentor3} alt="Outro Mentor" />
          <div className='mentor-info'>
            <h3>Jonathas Xavier</h3>
            <br />
            <p>Como mentor, ofereço orientação especializada na prevenção do cyberbullying. 
              <br />
              <br /> 
              Meu compromisso é orientá-los sobre como identificar e lidar com situações de cyberbullying, além de fornecer recursos e suporte para buscar ajuda quando necessário.</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Mentor;
