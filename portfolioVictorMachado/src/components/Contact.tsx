import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

  useEffect(() => {
    emailjs.init('T_OotwWcFhdxywpwT'); // Seu User ID
  }, []);

  const setFeedback = (message: string, type: 'success' | 'error') => {
    setStatusMessage(message);
    setStatusType(type);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback('⚠️ Por favor, preencha todos os campos.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFeedback('⚠️ Por favor, insira um e-mail válido.', 'error');
      return;
    }

    setIsLoading(true);
    setFeedback('Enviando mensagem...', 'success');

    try {
      const result = await emailjs.send(
        'service_r4lz90x',
        'template_i13v3eh',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'T_OotwWcFhdxywpwT'
      );

      console.log('SUCCESS!', result.status, result.text);
      setFeedback('✅ Mensagem enviada com sucesso!', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setFeedback('❌ Erro ao enviar mensagem. Tente novamente mais tarde.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contato</h2>
        <p className="contact-subtitle">Vamos conversar! Me envie um e-mail ou me adicione no LinkedIn!</p>

        {statusMessage && (
          <div className={`status-message ${statusType}`}>
            {statusMessage}
          </div>
        )}

        <div className="contact-content">
          <div className="contact-info">
            <a href="https://wa.me/5571993688502" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/vfsmachado27/" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/VfsMachado" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FaGithub /> GitHub
            </a>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={4}
                placeholder="Digite sua mensagem..."
                required
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
