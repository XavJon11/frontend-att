import React from 'react';
import imagem from '../../assets/imgs/imagem_site.png';
import './Main.css';

const Main: React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animar a rolagem
        });
    };

    return (
        <div className="container">
            <div className="texto1">
                <h1>Olá! Somos
                    <br />
                    O Reconstruindo Atitudes.</h1>
                <br />
                <p>Uma plataforma de mentoria que conecta quem já <br />superou situações lamentavelmente maldosas e desumanas e quer <br />
                    compartilhar com os agressores para uma mudança mais humanizada</p>
            </div>
            <div className="imagem">
                <img src={imagem} alt="fundo" />
            </div>

            <div className="secao-inferior">
                <h1 className='texto-meio'>
                    Nosso Próposito é qualificar pessoas agressoras, <br />
                    dando suporte, orientação, inspiração e coragem.</h1>
            </div>
            <div className="conteudo-textual">
                <div>
                    <h2 className='tituloM'>Os Mentores</h2>
                    <p className='tituloM'>
                        A bagagem, a sabedoria e experiência que cada um carrega.<br />
                        A disposição para compartilhar, transformar <br />agressores e mudar a sociedade.
                        <br /> Tenha sempre os melhores à sua disposição.</p>
                </div>
            </div>
            <div className="conteudo-textual">
                <div>
                    <h2 className='tituloM'>O Método</h2>
                    <p className='tituloM'>Queremos que você aprenda a ver quais <br /> opções você tem de uma forma estruturada. <br />
                        Aprenda a decidir qual é a melhor opção para <br />a sua mudança pessoal e desenvolvimento.</p>
                </div>
            </div>

            <div className="secao-inferior">
                <h1 className='texto-meio'>
                    Leve sua questão para tratar, em tempo real com seu mentor.<br />
                    <br />
                    <p>Por onde você deseja começar?</p></h1>
            </div>
        </div>

    );
}

export default Main;
