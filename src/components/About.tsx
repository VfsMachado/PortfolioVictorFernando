
import './about.css';
import foto7 from '../assets/foto7.jpg';

const About = () => {
  return (
    <section id="about" className="about-section" aria-label="Sobre mim">
      <div className="about-container">
        {/* Cabeçalho */}
        <div className="about-header">
          <h1 className="about-title">QUEM SOU EU?</h1>
          <p className="about-subtitle">
            Conheça um pouco mais sobre minha jornada e paixão por tecnologia
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="about-content">
          {/* Texto */}
          <div className="about-text">
            <p className="about-description">
              E aí, tudo certo? Eu sou <span className="highlight">Victor Fernando</span>, estudante de Ciência da Computação na Unijorge e apaixonado por tecnologia. Desde que conheci o desenvolvimento web, venho me dedicando a aprender e criar interfaces cada vez mais funcionais, bonitas e interativas.
            </p>
            
            <p className="about-description">
              Tenho conhecimentos em <span className="highlight">HTML</span>, <span className="highlight">CSS</span>, <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">PHP</span> e <span className="highlight">MySQL</span>. Além do desenvolvimento, já atuei com suporte técnico, infraestrutura e tarefas administrativas, o que me deu uma visão ampla do mundo da tecnologia.
            </p>
            
            <p className="about-description">
              Meu objetivo é crescer profissionalmente na área de Frontend, buscando uma oportunidade como <span className="highlight">Estagiário | Trainee ou Desenvolvedor Júnior</span>, para contribuir com energia, criatividade e vontade de fazer acontecer. Bora construir algo juntos?
            </p>
          </div>

          {/* Foto */}
          <div className="about-photo">
            <img 
              src={foto7} 
              alt="Victor Fernando - Desenvolvedor Front-end" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Timeline (opcional - pode adicionar depois) */}
        {/* <div className="timeline-section">
          <h2 className="timeline-title">MINHA JORNADA</h2>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;