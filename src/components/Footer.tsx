
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
       

        {/* Direitos autorais */}
        <div className="copyright">
          <p>
            &copy; {currentYear} Victor Fernando. Todos os direitos reservados.
          </p>
        </div>

        {/* Voltar ao topo */}
        <button 
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;