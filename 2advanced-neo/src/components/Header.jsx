import { motion } from 'framer-motion';
// import { FaGlobe, FaServer, FaTerminal, FaSatellite } from 'react-icons/fa';
import { FaGlobe, FaServer, FaTerminal, FaSatellite, FaChartPie, FaDesktop } from 'react-icons/fa';

export default function Header() {
  return (
    
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: 'rgba(0, 10, 20, 0.8)',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)'
      }}
    >
      {/* Logo/Título */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #00ffff',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
        }}>
          <FaServer size={24} color="#00ffff" />
        </div>
        <motion.h1
          style={{
            margin: 0,
            fontSize: '1.8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00ffff, #00aaff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
            textShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
          }}
        >
          NEOCORE SYSTEMS
        </motion.h1>
      </motion.div>

      {/* Navegação */}
      <motion.nav
        style={{
          display: 'flex',
          gap: '2rem'
        }}
      >
        {[
          { icon: <FaGlobe size={18} />, label: 'INTERFACE', href: '#hero' },
          { icon: <FaServer size={18} />, label: 'MÓDULOS', href: '#features' },
          { icon: <FaTerminal size={18} />, label: 'CONSOLE', href: '#console' },
          { icon: <FaSatellite size={18} />, label: 'SATÉLITES', href: '#satellites' },
          { icon: <FaChartPie size={18} />, label: 'DASHBOARD', href: '#dashboard' },
          { icon: <FaDesktop size={18} />, label: 'MONITOR', href: '#monitor' }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            whileHover={{
              y: -3,
              color: '#00ffff',
              textShadow: '0 0 10px #00ffff'
            }}
            style={{
              color: '#00aaff',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
          >
            <span style={{ color: '#00ffff' }}>{item.icon}</span>
            {item.label}
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #00ffff, transparent)'
              }}
            />
          </motion.a>
        ))}
      </motion.nav>

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
        zIndex: -1,
        opacity: 0.5
      }} />
    </motion.header>
  );
}