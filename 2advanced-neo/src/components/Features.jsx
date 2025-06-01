import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaShieldAlt, FaServer, FaRobot, FaSatelliteDish } from "react-icons/fa";

const features = [
  { 
    icon: <FaEye size={24} />, 
    title: "MONITORAMENTO GLOBAL", 
    key: "monitoramento", 
    color: "#00bfff",
    bgColor: "rgba(0, 191, 255, 0.1)"
  },
  { 
    icon: <FaShieldAlt size={24} />, 
    title: "DEFESA CIBERNÉTICA", 
    key: "ameacas", 
    color: "#ff4c4c",
    bgColor: "rgba(255, 76, 76, 0.1)"
  },
  { 
    icon: <FaServer size={24} />, 
    title: "INFRAESTRUTURA QUÂNTICA", 
    key: "infraestrutura", 
    color: "#ffaa00",
    bgColor: "rgba(255, 170, 0, 0.1)"
  },
  { 
    icon: <FaRobot size={24} />, 
    title: "INTELIGÊNCIA ARTIFICIAL", 
    key: "ia", 
    color: "#cc66ff",
    bgColor: "rgba(204, 102, 255, 0.1)"
  },
  {
    icon: <FaSatelliteDish size={24} />,
    title: "REDE SATELITAL",
    key: "satelite",
    color: "#00ffaa",
    bgColor: "rgba(0, 255, 170, 0.1)"
  }
];

const actionsMap = {
  monitoramento: [
    "SCAN: 98% DE COBERTURA GLOBAL",
    "CÂMERAS ATIVAS: 247 UNIDADES",
    "ANÁLISE FACIAL EM TEMPO REAL",
    "PADRÕES SUSPEITOS DETECTADOS",
    "DRONES DE VIGILÂNCIA ATIVADOS"
  ],
  ameacas: [
    "FIREWALL: 99.9% EFICÁCIA",
    "ATAQUE DDOS NEUTRALIZADO",
    "INTRUSÃO BLOQUEADA: SETOR 7",
    "CRIPTOGRAFIA QUÂNTICA ATIVA",
    "SCAN DE VULNERABILIDADES OK"
  ],
  infraestrutura: [
    "SERVIDORES: 100% OPERACIONAIS",
    "LATÊNCIA: 2.4ms",
    "BACKUP QUÂNTICO CONCLUÍDO",
    "ENERGIA: FLUXO ESTÁVEL",
    "REDUNDÂNCIA: NÍVEL 5"
  ],
  ia: [
    "TREINAMENTO: MODELO ALPHA-9",
    "INFERÊNCIA: 98.7% PRECISÃO",
    "PADRÕES COMPLEXOS IDENTIFICADOS",
    "AUTOAPRENDIZAGEM: ATIVADA",
    "ANÁLISE PREDITIVA ONLINE"
  ],
  satelite: [
    "SINCRONIZAÇÃO ORBITAL OK",
    "BANDA LARGA: 40Gbps",
    "CONEXÕES SEGURAS: 582",
    "SATÉLITE GAMMA-7 ONLINE",
    "LINK QUÂNTICO ESTÁVEL"
  ]
};

function getCurrentTime() {
  return new Date().toLocaleTimeString("pt-BR", { 
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function generateLog(key) {
  const actions = actionsMap[key];
  return {
    action: actions[Math.floor(Math.random() * actions.length)],
    time: getCurrentTime(),
  };
}

export default function Features() {
  const [logs, setLogs] = useState(() =>
    features.map((feature) => ({
      title: feature.title,
      key: feature.key,
      logs: Array.from({ length: 5 }, () => generateLog(feature.key)),
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prevLogs) =>
        prevLogs.map((mod) => ({
          ...mod,
          logs: [generateLog(mod.key), ...mod.logs.slice(0, 4)],
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="features"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(0, 40, 60, 0.8) 0%, rgba(0, 10, 30, 0.9) 70%),
          linear-gradient(to right, #000a1a, #001a2a)
        `,
        padding: "3rem 2rem",
        borderRadius: "0",
        color: "#0ff",
        fontFamily: "'Courier New', monospace",
        border: "1px solid rgba(0, 255, 255, 0.2)",
        boxShadow: "0 0 40px rgba(0, 255, 255, 0.1) inset",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Efeito de grade holográfica */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Título da seção */}
      <motion.h3 
        style={{ 
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          textAlign: "center",
          textShadow: "0 0 15px #0ff",
          letterSpacing: "2px",
          position: "relative",
          zIndex: 1
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <span style={{
          background: "linear-gradient(90deg, #0ff, #0cf)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          SISTEMAS PRIMÁRIOS
        </span>
        <div style={{
          width: "100px",
          height: "2px",
          background: "linear-gradient(90deg, #0ff, transparent)",
          margin: "0.5rem auto 0",
          animation: "underlinePulse 3s infinite"
        }} />
      </motion.h3>

      {/* Container dos módulos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
        position: "relative",
        zIndex: 1
      }}>
        {features.map((feature, index) => {
          const moduleLogs = logs.find((log) => log.key === feature.key)?.logs || [];
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.7 }}
              style={{
                backgroundColor: "rgba(0, 20, 40, 0.6)",
                padding: "1.5rem",
                borderRadius: "5px",
                borderLeft: `4px solid ${feature.color}`,
                boxShadow: `
                  0 0 15px ${feature.color}33,
                  0 5px 20px rgba(0, 0, 0, 0.5) inset
                `,
                backdropFilter: "blur(5px)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease"
              }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 0 25px ${feature.color}66`
              }}
            >
              {/* Efeito de brilho */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(45deg, transparent, ${feature.color}10, transparent)`,
                pointerEvents: "none"
              }} />

              {/* Cabeçalho do módulo */}
              <div style={{ 
                display: "flex", 
                alignItems: "center",
                marginBottom: "1.5rem",
                position: "relative",
                zIndex: 2
              }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: feature.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
                  border: `1px solid ${feature.color}`,
                  boxShadow: `0 0 15px ${feature.color}33`
                }}>
                  <span style={{ color: feature.color }}>{feature.icon}</span>
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    margin: 0,
                    color: feature.color,
                    letterSpacing: "1px"
                  }}>
                    {feature.title}
                  </h4>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.3rem"
                  }}>
                    <div style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#0f0",
                      boxShadow: "0 0 8px #0f0",
                      marginRight: "0.5rem"
                    }} />
                    <span style={{ 
                      fontSize: "0.8rem",
                      color: "#aaa"
                    }}>
                      STATUS: OPERACIONAL
                    </span>
                  </div>
                </div>
              </div>

              {/* Logs do sistema */}
              <div style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: "3px",
                padding: "1rem",
                border: `1px solid ${feature.color}33`,
                maxHeight: "200px",
                overflowY: "auto"
              }}>
                <ul style={{ 
                  listStyle: "none", 
                  padding: 0,
                  margin: 0
                }}>
                  {moduleLogs.map((log, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: "0.5rem 0",
                        borderBottom: i < moduleLogs.length - 1 ? `1px solid ${feature.color}20` : "none",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <span style={{ 
                        color: feature.color,
                        marginRight: "0.5rem",
                        fontWeight: "bold"
                      }}>▶</span>
                      <span style={{ flex: 1 }}>{log.action}</span>
                      <span style={{ 
                        color: "#aaa",
                        fontSize: "0.75rem",
                        minWidth: "70px",
                        textAlign: "right"
                      }}>[{log.time}]</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Barra de status */}
              <div style={{
                height: "3px",
                background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                marginTop: "1rem",
                position: "relative",
                overflow: "hidden"
              }}>
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)`,
                  animation: "scan 2s linear infinite"
                }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Efeitos de CSS */}
      <style>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes underlinePulse {
          0% { opacity: 0.3; width: 50px; }
          50% { opacity: 1; width: 150px; }
          100% { opacity: 0.3; width: 50px; }
        }
      `}</style>
    </motion.section>
  );
}