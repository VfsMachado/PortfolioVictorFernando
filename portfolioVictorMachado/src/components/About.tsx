import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[url('/images/muro.jpg')] bg-cover bg-center text-white flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-4xl bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-yellow-400 text-center graffiti-font mb-6">
          Quem sou eu
        </h2>
        <p className="text-lg leading-relaxed graffiti-font">
          E aí, tudo certo? Eu sou <span className="text-pink-500">Victor Fernando</span>, desenvolvedor front-end que começou sua jornada com HTML e CSS lá em 2016 e desde então nunca mais parou.
        </p>
        <p className="mt-4 text-lg leading-relaxed graffiti-font">
          Hoje me aprofundo em React e curto transformar ideias em códigos criativos. Vem comigo nessa jornada cheia de arte digital!
        </p>
      </div>
    </section>
  );
};

export default About;
