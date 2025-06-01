import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBug, FaLock, FaShieldAlt, FaSkull, FaNetworkWired, FaDatabase, FaRadiation } from 'react-icons/fa';

const threatTemplates = [
  { 
    icon: <FaBug size={20} />, 
    title: 'MALWARE DETECTADO', 
    level: 'CRÍTICO', 
    type: 'VIRUS',
    source: 'EXTERNO',
    description: 'CÓDIGO MALICIOSO IDENTIFICADO NOS SERVIDORES PRIMÁRIOS'
  },
  { 
    icon: <FaLock size={20} />, 
    title: 'TENTATIVA DE INTRUSÃO', 
    level: 'ALTO', 
    type: 'HACKING',
    source: 'IP 192.168.4.23',
    description: 'TENTATIVA DE ACESSO NÃO AUTORIZADO AO FIREWALL'
  },
  { 
    icon: <FaShieldAlt size={20} />, 
    title: 'FIREWALL ATUALIZADO', 
    level: 'NORMAL', 
    type: 'ATUALIZAÇÃO',
    source: 'SISTEMA',
    description: 'DEFESAS CIBERNÉTICAS FORTALECIDAS'
  },
  {
    icon: <FaNetworkWired size={20} />,
    title: 'ATAQUE DDOS DETECTADO',
    level: 'CRÍTICO',
    type: 'ATAQUE',
    source: 'REDE BOTNET',
    description: 'FLUXO ANORMAL DE PACOTES NA REDE PRINCIPAL'
  },
  {
    icon: <FaDatabase size={20} />,
    title: 'VIOLAÇÃO DE DADOS',
    level: 'ALTO',
    type: 'VAZAMENTO',
    source: 'INTERNO',
    description: 'TENTATIVA DE ACESSO A DADOS SENSÍVEIS'
  },
  {
    icon: <FaRadiation size={20} />,
    title: 'RANSOMWARE BLOQUEADO',
    level: 'CRÍTICO',
    type: 'SEQUESTRO',
    source: 'ANEXO MALICIOSO',
    description: 'TENTATIVA DE CRIPTOGRAFIA NÃO AUTORIZADA'
  }
];

const threatLevels = {
  'CRÍTICO': { color: '#ff3333', priority: 4, pulse: true },
  'ALTO': { color: '#ff6600', priority: 3, pulse: false },
  'NORMAL': { color: '#00ff88', priority: 1, pulse: false }
};

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('pt-BR', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: false 
  });
}

export default function CyberThreats() {
  const [threats, setThreats] = useState([]);
  const [expandedThreat, setExpandedThreat] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTemplate = threatTemplates[Math.floor(Math.random() * threatTemplates.length)];
      const newThreat = {
        ...randomTemplate,
        time: getCurrentTime(),
        id: Date.now(),
        new: true
      };

      setThreats((prev) => {
        const updatedPrev = prev.map(t => ({ ...t, new: false }));
        const updated = [newThreat, ...updatedPrev];
        return updated.slice(0, 6);
      });

      setTimeout(() => {
        setThreats(current => 
          current.map(t => 
            t.id === newThreat.id ? { ...t, new: false } : t
          )
        );
      }, 1000);

    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: 'rgba(10, 20, 30, 0.8)',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid rgba(255, 0, 66, 0.3)',
        boxShadow: '0 0 30px rgba(255, 0, 66, 0.2) inset',
        position: 'relative',
        overflow: 'hidden'
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
          linear-gradient(rgba(255, 0, 66, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 0, 66, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
        pointerEvents: 'none'
      }} />

      {/* Cabeçalho */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 0, 66, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem',
          border: '1px solid #ff3366',
          boxShadow: '0 0 15px rgba(255, 0, 66, 0.3)'
        }}>
          <FaShieldAlt size={24} color="#ff3366" />
        </div>
        <h3 style={{ 
          fontSize: '1.5rem',
          fontWeight: 'bold',
          margin: 0,
          color: '#ff3366',
          textShadow: '0 0 10px #ff0066',
          letterSpacing: '1px'
        }}>
          MONITOR DE AMEAÇAS
        </h3>
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.9rem',
          color: threats.some(t => t.level === 'CRÍTICO') ? '#ff3333' : '#00ff88'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: threats.some(t => t.level === 'CRÍTICO') ? '#ff0000' : '#00ff00',
            boxShadow: threats.some(t => t.level === 'CRÍTICO') ? '0 0 10px #ff0000' : '0 0 10px #00ff00',
            marginRight: '0.5rem',
            animation: threats.some(t => t.level === 'CRÍTICO') ? 'pulse 0.5s infinite alternate' : 'none'
          }} />
          {threats.some(t => t.level === 'CRÍTICO') ? 'ALERTA CRÍTICO' : 'SISTEMA ESTÁVEL'}
        </div>
      </div>

      {/* Lista de ameaças */}
      <ul style={{ 
        listStyle: 'none', 
        padding: 0,
        position: 'relative',
        zIndex: 1
      }}>
        <AnimatePresence>
          {threats.map((threat) => (
            <motion.li
              key={threat.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                borderColor: threat.new ? '#ffffff' : threatLevels[threat.level].color
              }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              onClick={() => setExpandedThreat(expandedThreat === threat.id ? null : threat.id)}
              style={{
                cursor: 'pointer',
                marginBottom: '1rem',
                backgroundColor: 'rgba(20, 10, 15, 0.6)',
                padding: '1rem',
                borderRadius: '5px',
                border: `1px solid ${threatLevels[threat.level].color}`,
                boxShadow: `0 0 15px ${threatLevels[threat.level].color}33`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Efeito de brilho */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `linear-gradient(45deg, transparent, ${threatLevels[threat.level].color}10, transparent)`,
                pointerEvents: 'none'
              }} />

              {/* Cabeçalho da ameaça */}
              <div style={{ 
                display: 'flex',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: `${threatLevels[threat.level].color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem',
                  border: `1px solid ${threatLevels[threat.level].color}`,
                  animation: threatLevels[threat.level].pulse ? 'pulse 1s infinite alternate' : 'none'
                }}>
                  {threat.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.3rem'
                  }}>
                    <h4 style={{ 
                      margin: 0,
                      fontSize: '1rem',
                      color: threatLevels[threat.level].color,
                      textShadow: `0 0 5px ${threatLevels[threat.level].color}`
                    }}>
                      {threat.title}
                    </h4>
                    <div style={{
                      marginLeft: 'auto',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        fontSize: '0.8rem',
                        color: '#aaa',
                        marginRight: '0.5rem'
                      }}>
                        {threat.time}
                      </span>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: threatLevels[threat.level].color,
                        boxShadow: `0 0 8px ${threatLevels[threat.level].color}`
                      }} />
                    </div>
                  </div>
                  <div style={{ 
                    display: 'flex',
                    gap: '1rem',
                    fontSize: '0.8rem'
                  }}>
                    <span style={{ color: '#ff99aa' }}>TIPO: {threat.type}</span>
                    <span style={{ color: '#ffaa99' }}>ORIGEM: {threat.source}</span>
                  </div>
                </div>
              </div>

              {/* Detalhes expandidos */}
              {expandedThreat === threat.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: `1px solid ${threatLevels[threat.level].color}33`,
                    fontSize: '0.85rem',
                    color: '#ffaabb'
                  }}
                >
                  <p style={{ margin: '0.5rem 0' }}>DESCRIÇÃO:</p>
                  <p style={{ 
                    margin: 0,
                    padding: '0.5rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '3px'
                  }}>
                    {threat.description}
                  </p>
                </motion.div>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Rodapé */}
      <div style={{
        marginTop: '1rem',
        fontSize: '0.8rem',
        color: 'rgba(255, 153, 170, 0.7)',
        textAlign: 'right'
      }}>
        ÚLTIMA ATUALIZAÇÃO: {getCurrentTime()} | AMEAÇAS ATIVAS: {threats.length}
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(0.95); box-shadow: 0 0 5px currentColor; }
          100% { opacity: 1; transform: scale(1); box-shadow: 0 0 15px currentColor; }
        }
      `}</style>
    </motion.div>
  );
}