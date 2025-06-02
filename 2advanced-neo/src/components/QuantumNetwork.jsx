import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaNetworkWired, FaChartLine, FaLock, FaSyncAlt } from "react-icons/fa";

const networkNodes = [
  { id: "QN-001", name: "NÓ ALPHA", status: "active", location: "AMERICA DO NORTE", latency: 2.4 },
  { id: "QN-002", name: "NÓ BETA", status: "active", location: "EUROPA", latency: 3.1 },
  { id: "QN-003", name: "NÓ GAMMA", status: "warning", location: "ASIA", latency: 5.8 },
  { id: "QN-004", name: "NÓ DELTA", status: "active", location: "AMERICA DO SUL", latency: 4.2 },
  { id: "QN-005", name: "NÓ EPSILON", status: "critical", location: "AFRICA", latency: 8.5 },
  { id: "QN-006", name: "NÓ ZETA", status: "active", location: "OCEANIA", latency: 7.3 },
];

const connectionTypes = [
  "CRIPTOGRAFIA QUÂNTICA",
  "TÚNEL DE ENTRELAÇAMENTO",
  "LINK FIBRA ÓPTICA",
  "CANAL SATELITAL",
  "REDE NEURAL SYNTH"
];

const dataTransfers = [
  "PACOTE DE DADOS QUÂNTICOS",
  "ALGORITMO DE SHOR",
  "CHAVE DE CRIPTOGRAFIA",
  "SINAL DE ENTRELAÇAMENTO",
  "PACOTE DE TELEPORTAÇÃO"
];

function getRandomTransfer() {
  return {
    type: dataTransfers[Math.floor(Math.random() * dataTransfers.length)],
    size: (Math.random() * 50 + 10).toFixed(2) + "QB",
    speed: (Math.random() * 1000 + 500).toFixed(0) + "Tbps",
    from: networkNodes[Math.floor(Math.random() * networkNodes.length)].id,
    to: networkNodes[Math.floor(Math.random() * networkNodes.length)].id,
    time: new Date().toLocaleTimeString("pt-BR", { hour12: false })
  };
}

export default function QuantumNetwork() {
  const [transfers, setTransfers] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    // Inicializa com 5 transferências
    setTransfers(Array.from({ length: 5 }, () => getRandomTransfer()));
    
    // Atualiza a cada 3 segundos
    const interval = setInterval(() => {
      setTransfers(prev => [getRandomTransfer(), ...prev.slice(0, 9)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case "active": return "#00ff00";
      case "warning": return "#ffaa00";
      case "critical": return "#ff0000";
      default: return "#00ff00";
    }
  };

  const getStatusLabel = (status) => {
    switch(status) {
      case "active": return "OPERACIONAL";
      case "warning": return "ALERTA";
      case "critical": return "CRÍTICO";
      default: return "DESCONHECIDO";
    }
  };

  return (
    <motion.section
      id="quantum-network"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: `
          radial-gradient(circle at 30% 50%, rgba(0, 40, 80, 0.9) 0%, rgba(0, 10, 30, 1) 70%),
          linear-gradient(to right, #000a1a, #001a3a)
        `,
        padding: "3rem 2rem",
        margin: "2rem 0",
        borderRadius: "8px",
        color: "#0ff",
        fontFamily: "'Courier New', monospace",
        border: "1px solid rgba(0, 150, 255, 0.3)",
        boxShadow: "0 0 50px rgba(0, 150, 255, 0.1) inset",
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
          linear-gradient(rgba(0, 200, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 200, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Título da seção */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ 
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          position: "relative",
          zIndex: 1
        }}
      >
        <div>
          <h3 style={{ 
            fontSize: "1.8rem",
            fontWeight: "bold",
            margin: 0,
            textShadow: "0 0 15px #0ff",
            letterSpacing: "2px",
            display: "flex",
            alignItems: "center"
          }}>
            <FaNetworkWired style={{ marginRight: "1rem", color: "#00aaff" }} />
            <span style={{
              background: "linear-gradient(90deg, #0cf, #0ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              REDE QUÂNTICA GLOBAL
            </span>
          </h3>
          <div style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.5rem"
          }}>
            <div style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#0f0",
              boxShadow: "0 0 10px #0f0",
              marginRight: "0.5rem"
            }} />
            <span style={{ color: "#aaa", fontSize: "0.9rem" }}>
              SISTEMA PRIMÁRIO - ACESSO RESTRITO
            </span>
          </div>
        </div>
        
        <div style={{
          backgroundColor: "rgba(0, 50, 100, 0.5)",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "1px solid rgba(0, 200, 255, 0.3)",
          display: "flex",
          alignItems: "center"
        }}>
          <FaSyncAlt style={{ marginRight: "0.5rem", color: "#0ff" }} />
          <span>ATUALIZAÇÃO EM TEMPO REAL</span>
        </div>
      </motion.div>

      {/* Container principal */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "2rem",
        position: "relative",
        zIndex: 1
      }}>
        {/* Painel de nós */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            backgroundColor: "rgba(0, 20, 50, 0.6)",
            padding: "1.5rem",
            borderRadius: "8px",
            border: "1px solid rgba(0, 150, 255, 0.2)",
            boxShadow: "0 0 20px rgba(0, 100, 255, 0.1) inset",
            backdropFilter: "blur(5px)"
          }}
        >
          <div style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "1px solid rgba(0, 200, 255, 0.3)"
          }}>
            <FaGlobe style={{ marginRight: "1rem", color: "#0cf" }} />
            <h4 style={{ margin: 0, fontSize: "1.2rem", color: "#0cf" }}>NÓS DA REDE</h4>
          </div>
          
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {networkNodes.map((node, index) => (
              <motion.li
                key={node.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                style={{
                  padding: "1rem",
                  marginBottom: "0.5rem",
                  backgroundColor: selectedNode === node.id ? "rgba(0, 100, 200, 0.3)" : "rgba(0, 30, 60, 0.3)",
                  borderRadius: "4px",
                  borderLeft: `4px solid ${getStatusColor(node.status)}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden"
                }}
                whileHover={{ 
                  backgroundColor: "rgba(0, 100, 200, 0.4)",
                  boxShadow: `0 0 15px ${getStatusColor(node.status)}33`
                }}
                onClick={() => setSelectedNode(node.id)}
              >
                {/* Efeito de brilho */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(90deg, transparent, ${getStatusColor(node.status)}15, transparent)`,
                  pointerEvents: "none"
                }} />
                
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ 
                      fontWeight: "bold",
                      color: "#0ff",
                      marginBottom: "0.3rem"
                    }}>
                      {node.name}
                    </div>
                    <div style={{ 
                      fontSize: "0.8rem",
                      color: "#aaa",
                      marginBottom: "0.3rem"
                    }}>
                      ID: {node.id}
                    </div>
                    <div style={{ 
                      fontSize: "0.8rem",
                      color: "#aaa"
                    }}>
                      LOCAL: {node.location}
                    </div>
                  </div>
                  <div style={{ 
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end"
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "0.5rem"
                    }}>
                      <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: getStatusColor(node.status),
                        boxShadow: `0 0 8px ${getStatusColor(node.status)}`,
                        marginRight: "0.5rem"
                      }} />
                      <span style={{ 
                        fontSize: "0.75rem",
                        color: getStatusColor(node.status)
                      }}>
                        {getStatusLabel(node.status)}
                      </span>
                    </div>
                    <div style={{ 
                      fontSize: "0.9rem",
                      color: "#0ff"
                    }}>
                      {node.latency}ms
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Painel de visualização e logs */}
        <div>
          {/* Visualização da rede */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              backgroundColor: "rgba(0, 10, 30, 0.7)",
              padding: "1.5rem",
              borderRadius: "8px",
              border: "1px solid rgba(0, 150, 255, 0.3)",
              boxShadow: "0 0 30px rgba(0, 100, 255, 0.1) inset",
              marginBottom: "2rem",
              height: "300px",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Efeito de visualização da rede (simulado) */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                position: "relative",
                width: "80%",
                height: "80%"
              }}>
                {/* Nós da rede */}
                {networkNodes.map((node, i) => {
                  const angle = (i * 360 / networkNodes.length) * (Math.PI / 180);
                  const x = 50 + 40 * Math.cos(angle);
                  const y = 50 + 40 * Math.sin(angle);
                  
                  return (
                    <div 
                      key={node.id}
                      style={{
                        position: "absolute",
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: getStatusColor(node.status),
                        boxShadow: `0 0 15px ${getStatusColor(node.status)}`,
                        border: "2px solid #001a3a",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 2
                      }}
                    >
                      <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#001a3a"
                      }} />
                    </div>
                  );
                })}
                
                {/* Conexões */}
                {networkNodes.map((node, i) => {
                  const nextNode = networkNodes[(i + 1) % networkNodes.length];
                  const angle1 = (i * 360 / networkNodes.length) * (Math.PI / 180);
                  const angle2 = ((i + 1) * 360 / networkNodes.length) * (Math.PI / 180);
                  const x1 = 50 + 40 * Math.cos(angle1);
                  const y1 = 50 + 40 * Math.sin(angle1);
                  const x2 = 50 + 40 * Math.cos(angle2);
                  const y2 = 50 + 40 * Math.sin(angle2);
                  
                  return (
                    <div 
                      key={`conn-${i}`}
                      style={{
                        position: "absolute",
                        left: `${Math.min(x1, x2)}%`,
                        top: `${Math.min(y1, y2)}%`,
                        width: `${Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))}%`,
                        height: "2px",
                        backgroundColor: "rgba(0, 200, 255, 0.3)",
                        transformOrigin: "0 0",
                        transform: `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`,
                        zIndex: 1
                      }}
                    >
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.8), transparent)",
                        animation: "pulse 3s infinite",
                        animationDelay: `${i * 0.5}s`
                      }} />
                    </div>
                  );
                })}
                
                {/* Nó central */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #00aaff, #0066ff)",
                  boxShadow: "0 0 30px #0066ff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 3
                }}>
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#001a3a"
                  }} />
                </div>
              </div>
            </div>
            
            {/* Legenda */}
            <div style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              zIndex: 4
            }}>
              <div style={{ 
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem"
              }}>
                <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#0f0",
                  boxShadow: "0 0 10px #0f0",
                  marginRight: "0.5rem"
                }} />
                <span style={{ fontSize: "0.8rem" }}>NÓ OPERACIONAL</span>
              </div>
              <div style={{ 
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem"
              }}>
                <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ff0",
                  boxShadow: "0 0 10px #ff0",
                  marginRight: "0.5rem"
                }} />
                <span style={{ fontSize: "0.8rem" }}>NÓ EM ALERTA</span>
              </div>
              <div style={{ 
                display: "flex",
                alignItems: "center"
              }}>
                <div style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#f00",
                  boxShadow: "0 0 10px #f00",
                  marginRight: "0.5rem"
                }} />
                <span style={{ fontSize: "0.8rem" }}>NÓ CRÍTICO</span>
              </div>
            </div>
          </motion.div>

          {/* Logs de transferência */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              backgroundColor: "rgba(0, 20, 50, 0.6)",
              padding: "1.5rem",
              borderRadius: "8px",
              border: "1px solid rgba(0, 150, 255, 0.2)",
              boxShadow: "0 0 20px rgba(0, 100, 255, 0.1) inset",
              backdropFilter: "blur(5px)"
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid rgba(0, 200, 255, 0.3)"
            }}>
              <FaChartLine style={{ marginRight: "1rem", color: "#0cf" }} />
              <h4 style={{ margin: 0, fontSize: "1.2rem", color: "#0cf" }}>TRANSFERÊNCIAS QUÂNTICAS</h4>
            </div>
            
            <div style={{
              maxHeight: "200px",
              overflowY: "auto"
            }}>
              <table style={{ 
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.85rem"
              }}>
                <thead>
                  <tr style={{ 
                    borderBottom: "1px solid rgba(0, 200, 255, 0.3)",
                    color: "#0ff"
                  }}>
                    <th style={{ 
                      padding: "0.5rem",
                      textAlign: "left",
                      fontWeight: "normal"
                    }}>TIPO</th>
                    <th style={{ 
                      padding: "0.5rem",
                      textAlign: "left",
                      fontWeight: "normal"
                    }}>ORIGEM</th>
                    <th style={{ 
                      padding: "0.5rem",
                      textAlign: "left",
                      fontWeight: "normal"
                    }}>DESTINO</th>
                    <th style={{ 
                      padding: "0.5rem",
                      textAlign: "right",
                      fontWeight: "normal"
                    }}>TAMANHO</th>
                    <th style={{ 
                      padding: "0.5rem",
                      textAlign: "right",
                      fontWeight: "normal"
                    }}>VELOCIDADE</th>
                    <th style={{ 
                      padding: "0.5rem",
                      textAlign: "right",
                      fontWeight: "normal"
                    }}>HORA</th>
                  </tr>
                </thead>
                <tbody>
                  {transfers.map((transfer, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        borderBottom: i < transfers.length - 1 ? "1px solid rgba(0, 200, 255, 0.1)" : "none"
                      }}
                    >
                      <td style={{ 
                        padding: "0.5rem",
                        color: "#0ff"
                      }}>{transfer.type}</td>
                      <td style={{ 
                        padding: "0.5rem",
                        color: "#0cf"
                      }}>{transfer.from}</td>
                      <td style={{ 
                        padding: "0.5rem",
                        color: "#0cf"
                      }}>{transfer.to}</td>
                      <td style={{ 
                        padding: "0.5rem",
                        textAlign: "right",
                        color: "#0ff"
                      }}>{transfer.size}</td>
                      <td style={{ 
                        padding: "0.5rem",
                        textAlign: "right",
                        color: "#0f0"
                      }}>{transfer.speed}</td>
                      <td style={{ 
                        padding: "0.5rem",
                        textAlign: "right",
                        color: "#aaa"
                      }}>{transfer.time}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efeitos de CSS */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </motion.section>
  );
}
