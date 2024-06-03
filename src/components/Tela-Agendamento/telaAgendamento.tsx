// MentorPage.js
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import mentor1 from '../../assets/imgs/mentor1.png';
import mentor2 from '../../assets/imgs/mentor2.jpg';
import mentor3 from '../../assets/imgs/mentor3.jpg';
import './telaAgendamento.css';

const AgendaMentor: React.FC = () => {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [mentoriaAgendada, setMentoriaAgendada] = useState<boolean>(false);
  const [selectedHour, setSelectedHour] = useState<string>('');


  const handleMentorSelection = (mentorName: string) => {
    setSelectedMentor(mentorName);
  };

  const handleHourSelection = (hour: string) => {
    setSelectedHour(hour);

  }


  const handleAgendarMentoria = async () => {
    try {
      // Suponha que você tenha uma API para agendar mentoria com um endpoint '/agendar-mentoria'
      const response = await fetch('http://localhost:8080/api/agendar-mentoria', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mentor: selectedMentor,
          // Outros dados relevantes para a mentoria podem ser incluídos aqui
        }),
      });

      // Verifica se a solicitação foi bem-sucedida
      if (response.ok) {
        // Define o estado para indicar que a mentoria foi agendada com sucesso
        setMentoriaAgendada(true);
      } else {
        // Se a solicitação falhar, mostra uma mensagem de erro
        console.error('Falha ao agendar a mentoria.');
      }
    } catch (error) {
      // Se ocorrer algum erro durante a solicitação, mostra uma mensagem de erro
      console.error('Erro ao agendar a mentoria:', error);
    }

    if (mentoriaAgendada) {
      return <Navigate to="/" />;
    }
  };

  return (
    <div className="mentor-container">
      <h2>Nossos Mentores</h2>

      <div className="mentor-cards">
        {/* Card de Mentor 1 */}
        <div className="mentor-card" onClick={() => handleMentorSelection("Deangellis Berg")}>
          <img src={mentor1} alt="Mentor 1" />
          <div className="mentor-info">
            <h3>Deangellis Berg</h3>
            <p>Como mentor, compartilho minhas experiências e conhecimentos sobre o cyberbullying, destacando a importância do respeito online, da empatia e do cuidado com as palavras e ações virtuais.</p>
          </div>
        </div>

        {/* Card de Mentor 2 */}
        <div className="mentor-card" onClick={() => handleMentorSelection("Arnaldo Willian")}>
          <img src={mentor2} alt="Mentor 2" />
          <div className="mentor-info">
            <h3>Arnaldo Willian</h3>
            <p>Como mentor, compartilho minhas experiências pessoais e conhecimentos especializados sobre o cyberbullying.</p>
          </div>
        </div>

        {/* Card de Mentor 3 */}
        <div className="mentor-card" onClick={() => handleMentorSelection("Jonathas Xavier")}>
          <img src={mentor3} alt="Mentor 3" />
          <div className="mentor-info">
            <h3>Jonathas Xavier</h3>
            <p>Como mentor, ofereço orientação especializada na prevenção do cyberbullying.</p>
          </div>
        </div>
      </div>

      {/* Select de Horas */}
      {selectedMentor && !mentoriaAgendada && (
        <div className="hour-select">
          <label htmlFor="hour-select">Selecione um horário:</label>
          <select id="hour-select" value={selectedHour} onChange={(e) => handleHourSelection(e.target.value)}>
            <option value="">Selecione</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="10:00">11:00</option>
            {/* Adicione mais opções de horário conforme necessário */}
          </select>
        </div>
      )}

      {/* Botão de Agendar */}
      {selectedMentor && !mentoriaAgendada && (
        <button className="agendar-button" onClick={handleAgendarMentoria}>
          Agendar com {selectedMentor}
        </button>
      )}

      {/* Mensagem de sucesso após agendar */}
      {mentoriaAgendada && (
        <p>Sua mentoria com {selectedMentor} foi agendada com sucesso!</p>
      )}
    </div>
  );
}

export default AgendaMentor;
