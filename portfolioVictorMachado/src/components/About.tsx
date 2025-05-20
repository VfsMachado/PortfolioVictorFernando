import React from 'react';
import muroImage from '../assets/muro.jpg';
 // ajuste o caminho conforme necessário

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full flex justify-center py-16 px-4"
    >
      <div
    className="max-w-[80rem] w-full min-h-[25rem] bg-black/50 rounded-xl shadow-xl p-8 relative text-white"
    style={{
      backgroundImage: `url(${muroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '815px',
      height: '415px',
      transformOrigin: '50%',
    }}
  >
        <h2 className="text-4xl font-bold text-yellow-400 text-center graffiti-font mb-6">
  QUEM SOU EU?
</h2>
        <p className="text-lg leading-relaxed graffiti-font">
    E AÍ, TUDO CERTO? EU SOU <span className="text-yellow-400 font-bold">VICTOR FERNANDO</span>, ESTUDANTE DE CIÊNCIA DA COMPUTAÇÃO NA UNIJORGE E APAIXONADO POR TECNOLOGIA. DESDE QUE CONHECI O DESENVOLVIMENTO WEB, VENHO ME DEDICANDO A APRENDER E CRIAR INTERFACES CADA VEZ MAIS FUNCIONAIS, BONITAS E INTERATIVAS.
  </p>
  
  <p className="mt-4 text-lg leading-relaxed graffiti-font">
    TENHO CONHECIMENTOS EM <span className="text-red-500 font-bold">HTML</span>, <span className="text-blue-400 font-bold">CSS</span>, <span className="text-yellow-300 font-bold">JavaScript</span>, <span className="text-purple-400 font-bold">PHP</span> E <span className="text-orange-400 font-bold">MySQL</span>, E JÁ ATUEI COM DESENVOLVIMENTO DE SISTEMAS, SUPORTE TÉCNICO E TAREFAS ADMINISTRATIVAS. ACREDITO NA FORÇA DO CÓDIGO BEM ESCRITO, DAS BOAS PRÁTICAS E DA CONSTANTE EVOLUÇÃO — POR ISSO, ESTOU SEMPRE BUSCANDO APRENDER ALGO NOVO E APLICAR NA PRÁTICA.
  </p>
  
  <p className="mt-4 text-xl md:text-2xl leading-relaxed graffiti-font font-bold text-center text-yellow-400 border-l-4 border-red-500 pl-4">
    MEU OBJETIVO É CRESCER PROFISSIONALMENTE NA ÁREA DE FRONTEND, BUSCANDO UMA OPORTUNIDADE COMO ESTAGIÁRIO OU TRAINEE PARA CONTRIBUIR COM ENERGIA, CRIATIVIDADE E VONTADE DE FAZER ACONTECER. BORA CONSTRUIR ALGO JUNTOS?
  </p>
</div>
    </section>
  );
};

export default About;
