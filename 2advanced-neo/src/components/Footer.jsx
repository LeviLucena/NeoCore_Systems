import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobeAmericas, FaSatellite } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        backgroundColor: 'rgba(0, 15, 30, 0.9)',
        padding: '2rem',
        borderTop: '1px solid rgba(0, 255, 255, 0.2)',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.1) inset',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Courier New', monospace"
      }}
    >
      {/* Efeito de grade holográfica */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
        opacity: 0.3
      }} />

      {/* Efeito de borda luminosa */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.05), transparent)',
        pointerEvents: 'none'
      }} />

      {/* Conteúdo do footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        {/* Informações de copyright */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #00ffff',
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
          }}>
            <FaShieldAlt size={18} color="#00ffff" />
          </div>
          <p style={{
            margin: 0,
            color: '#00ffff',
            fontSize: '0.9rem',
            letterSpacing: '1px'
          }}>
            © 2025 NEOCORE SYSTEMS<br />
            <span style={{ color: 'rgba(0, 255, 255, 0.7)', fontSize: '0.8rem' }}>
              TODOS OS DIREITOS RESERVADOS
            </span>
          </p>
        </motion.div>

        {/* Status do sistema */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #00ffff',
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
          }}>
            <FaGlobeAmericas size={18} color="#00ffff" />
          </div>
          <p style={{
            margin: 0,
            color: '#00ffff',
            fontSize: '0.9rem',
            letterSpacing: '1px'
          }}>
            SISTEMA OPERANDO EM NÍVEL GLOBAL<br />
            <span style={{ color: 'rgba(0, 255, 255, 0.7)', fontSize: '0.8rem' }}>
              PROTOCOLO NGS-23 | VERSÃO 4.2.7
            </span>
          </p>
        </motion.div>

        {/* Status de conexão */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #00ff88',
            boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)'
          }}>
            <FaSatellite size={18} color="#00ff88" />
          </div>
          <p style={{
            margin: 0,
            color: '#00ff88',
            fontSize: '0.9rem',
            letterSpacing: '1px'
          }}>
            CONEXÃO SATELITAL ESTÁVEL<br />
            <span style={{ color: 'rgba(0, 255, 136, 0.7)', fontSize: '0.8rem' }}>
              12 SATÉLITES ATIVOS | LATÊNCIA 3.7ms
            </span>
          </p>
        </motion.div>
      </div>

      {/* Efeito de scanline */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'repeating-linear-gradient(to bottom, rgba(0, 255, 255, 0.05) 0px, rgba(0, 255, 255, 0.05) 1px, transparent 1px, transparent 3px)',
        pointerEvents: 'none',
        animation: 'scanMove 10s linear infinite'
      }} />
    </motion.footer>
  );
}