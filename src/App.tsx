import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import MentorPage from './pages/AgendarMentor/AgendarMentor';
import AnamnesePage from './pages/Anamnese/AnamnesePage';
import AgendamentoPage from './pages/Agendamento/AgendamentoPage';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MentorPage />} />
        <Route path="/anamnese" element={<AnamnesePage />} />
        <Route path="/agendamento" element={<AgendamentoPage/>} />
      </Routes>
    </Router>
  );
}
export default App;
