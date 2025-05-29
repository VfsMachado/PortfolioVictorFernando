import React from 'react';
import './about.css';
import foto7 from '../assets/foto7.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* FOTO */}
        <div className="about-photo">
          <img src={foto7} alt="Foto Victor Fernando" />
        </div>

        {/* TEXTO */}
        <div className="container">
          <h2>QUEM SOU EU?</h2>
          <p className="about-content">
            E aí, tudo certo? Eu sou <span className="highlight">Victor Fernando</span>, estudante de Ciência da Computação na Unijorge e apaixonado por tecnologia. Desde que conheci o desenvolvimento web, venho me dedicando a aprender e criar interfaces cada vez mais funcionais, bonitas e interativas.
          </p>
          <p className="about-content">
            Tenho conhecimentos em <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, <span className="highlight">JavaScript</span>, <span className="highlight">PHP</span> e <span className="highlight">MySQL</span>. Já atuei com suporte técnico, infraestrutura e tarefas administrativas.
          </p>
          <p className="about-content intro">
            Meu objetivo é crescer profissionalmente na área de Frontend, buscando uma oportunidade como estagiário | trainee ou Junior, para contribuir com energia, criatividade e vontade de fazer acontecer. Bora construir algo juntos?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
