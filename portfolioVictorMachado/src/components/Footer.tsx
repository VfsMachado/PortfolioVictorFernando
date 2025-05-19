import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Victor Machado. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
