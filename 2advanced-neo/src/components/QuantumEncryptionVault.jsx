import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaKey, FaLock, FaShieldAlt, FaFingerprint, FaSatellite, FaChartBar } from "react-icons/fa";
import { GiCube, GiSpy, GiNetworkBars } from "react-icons/gi";

const encryptionProtocols = [
  { 
    name: "QKD-256", 
    status: "active", 
    strength: 98,
    color: "#00ff88"
  },
  { 
    name: "ENTANGLE-X", 
    status: "active", 
    strength: 95,
    color: "#00a8ff"
  },
  { 
    name: "QUANTUM SHIELD", 
    status: "warning", 
    strength: 82,
    color: "#ffaa00"
  },
  { 
    name: "NEURAL CRYPT", 
    status: "critical", 
    strength: 65,
    color: "#ff5555"
  },
  { 
    name: "HYPER-VAULT", 
    status: "active", 
    strength: 99,
    color: "#aa00ff"
  }
];

const securityEvents = [
  "TENTATIVA DE INVASÃO BLOQUEADA",
  "CHAVE QUÂNTICA REGENERADA",
  "PACOTE SUSPEITO ANALISADO",
  "TÚNEL CIFRADO ESTABELECIDO",
  "VARREdura DE VULNERABILIDADES",
  "SINCRONIZAÇÃO DE ENTRELAÇAMENTO",
  "ATUALIZAÇÃO DE FIRMWARE"
];

function generateSecurityLog() {
  return {
    event: securityEvents[Math.floor(Math.random() * securityEvents.length)],
    protocol: encryptionProtocols[Math.floor(Math.random() * encryptionProtocols.length)].name,
    time: new Date().toLocaleTimeString("pt-BR", { hour12: false }),
    threatLevel: Math.floor(Math.random() * 3) // 0-2
  };
}

export default function QuantumEncryptionVault() {
  const [activeKey, setActiveKey] = useState(null);
  const [logs, setLogs] = useState([]);
  const [vaultStatus, setVaultStatus] = useState("ARMED");
  const [accessAttempts, setAccessAttempts] = useState(0);

  useEffect(() => {
    // Inicializa com 5 logs
    setLogs(Array.from({ length: 5 }, () => generateSecurityLog()));
    
    // Atualiza logs a cada 4 segundos
    const logInterval = setInterval(() => {
      setLogs(prev => [generateSecurityLog(), ...prev.slice(0, 9)]);
    }, 4000);

    // Simula tentativas de acesso não autorizado
    const accessInterval = setInterval(() => {
      setAccessAttempts(prev => prev + Math.floor(Math.random() * 3));
    }, 7000);

    return () => {
      clearInterval(logInterval);
      clearInterval(accessInterval);
    };
  }, []);

  const getThreatColor = (level) => {
    return ["#00ff00", "#ffaa00", "#ff0000"][level];
  };

  const renderCubeFace = (protocol, index) => {
    const rotation = index * 72; // 72 graus para cada face (360/5)
    return (
      <motion.div
        key={protocol.name}
        initial={{ opacity: 0, rotateY: 0 }}
        animate={{ 
          opacity: 1, 
          rotateY: activeKey === protocol.name ? 360 : rotation,
          boxShadow: activeKey === protocol.name 
            ? `0 0 30px ${protocol.color}` 
            : `0 0 15px ${protocol.color}80`
        }}
        transition={{ duration: 1.5, type: "spring" }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 20, 40, 0.7)",
          border: `2px solid ${protocol.color}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg) translateZ(100px)`
        }}
        onClick={() => setActiveKey(protocol.name)}
        whileHover={{ scale: 1.05 }}
      >
        <div style={{ 
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: protocol.color,
          marginBottom: "0.5rem"
        }}>
          {protocol.name}
        </div>
        <div style={{ 
          width: "80%",
          height: "6px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "3px",
          marginBottom: "0.5rem"
        }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${protocol.strength}%` }}
            transition={{ duration: 1.5 }}
            style={{
              height: "100%",
              backgroundColor: protocol.color,
              borderRadius: "3px"
            }}
          />
        </div>
        <div style={{ 
          fontSize: "0.8rem",
          color: "#aaa"
        }}>
          FORÇA: {protocol.strength}%
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="quantum-vault"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: `
          radial-gradient(circle at 70% 30%, rgba(0, 60, 80, 0.9) 0%, rgba(0, 15, 40, 1) 70%),
          linear-gradient(to bottom, #001a3a, #000a1a)
        `,
        padding: "3rem 2rem",
        margin: "2rem 0",
        borderRadius: "8px",
        color: "#0ff",
        fontFamily: "'Courier New', monospace",
        border: "1px solid rgba(0, 200, 255, 0.3)",
        boxShadow: "0 0 60px rgba(0, 150, 255, 0.1) inset",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Efeito de partículas */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.03) 0%, transparent 20%),
          radial-gradient(circle at 80% 70%, rgba(0, 200, 255, 0.03) 0%, transparent 20%)
        `,
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Header */}
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaLock size={28} style={{ marginRight: "1rem", color: "#00ffaa" }} />
          <h3 style={{ 
            fontSize: "1.8rem",
            fontWeight: "bold",
            margin: 0,
            textShadow: "0 0 15px #0ff",
            letterSpacing: "2px",
            background: "linear-gradient(90deg, #0ff, #0cf)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            COFRE QUÂNTICO
          </h3>
        </div>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 50, 100, 0.5)",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: `1px solid ${vaultStatus === "ARMED" ? "#0f0" : "#f00"}`
        }}>
          <FaShieldAlt style={{ 
            marginRight: "0.5rem",
            color: vaultStatus === "ARMED" ? "#0f0" : "#f00",
            animation: vaultStatus === "ARMED" ? "pulse 2s infinite" : "none"
          }} />
          <span>STATUS: {vaultStatus}</span>
          <button 
            onClick={() => setVaultStatus(vaultStatus === "ARMED" ? "DISARMED" : "ARMED")}
            style={{
              marginLeft: "1rem",
              background: "none",
              border: "1px solid #0ff",
              color: "#0ff",
              padding: "0.2rem 0.5rem",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "0.8rem"
            }}
          >
            {vaultStatus === "ARMED" ? "DESATIVAR" : "ATIVAR"}
          </button>
        </div>
      </motion.div>

      {/* Conteúdo principal */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        position: "relative",
        zIndex: 1
      }}>
        {/* Visualização 3D do cubo de protocolos */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            perspective: "1000px"
          }}
        >
          <motion.div
            style={{
              position: "relative",
              width: "200px",
              height: "200px",
              transformStyle: "preserve-3d",
              animation: "rotate 20s infinite linear"
            }}
            animate={{ 
              rotateY: activeKey ? 360 : 0,
              rotateX: activeKey ? 20 : 0
            }}
            transition={{ duration: 2 }}
          >
            {encryptionProtocols.map((protocol, index) => 
              renderCubeFace(protocol, index)
            )}
          </motion.div>
        </motion.div>

        {/* Painel de informações */}
        <div>
          {/* Status do protocolo selecionado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              backgroundColor: "rgba(0, 20, 50, 0.6)",
              padding: "1.5rem",
              borderRadius: "8px",
              border: "1px solid rgba(0, 150, 255, 0.2)",
              boxShadow: "0 0 20px rgba(0, 100, 255, 0.1) inset",
              backdropFilter: "blur(5px)",
              marginBottom: "2rem"
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem"
            }}>
              <FaKey style={{ marginRight: "0.8rem", color: "#0cf" }} />
              <h4 style={{ 
                margin: 0,
                fontSize: "1.2rem",
                color: "#0cf"
              }}>
                {activeKey || "SELECIONE UM PROTOCOLO"}
              </h4>
            </div>
            
            {activeKey ? (
              <div>
                <div style={{ 
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1rem",
                  marginBottom: "1rem"
                }}>
                  <div>
                    <div style={{ color: "#aaa", fontSize: "0.8rem" }}>STATUS</div>
                    <div style={{ 
                      color: encryptionProtocols.find(p => p.name === activeKey)?.color,
                      fontWeight: "bold"
                    }}>
                      {encryptionProtocols.find(p => p.name === activeKey)?.status.toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#aaa", fontSize: "0.8rem" }}>FORÇA</div>
                    <div style={{ color: "#0ff", fontWeight: "bold" }}>
                      {encryptionProtocols.find(p => p.name === activeKey)?.strength}%
                    </div>
                  </div>
                  <div>
                    <div style={{ color: "#aaa", fontSize: "0.8rem" }}>TIPO</div>
                    <div style={{ color: "#0ff" }}>QUÂNTICO</div>
                  </div>
                  <div>
                    <div style={{ color: "#aaa", fontSize: "0.8rem" }}>TENTATIVAS</div>
                    <div style={{ color: "#ff5555", fontWeight: "bold" }}>
                      {accessAttempts}
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  height: "3px",
                  background: "rgba(0, 150, 255, 0.2)",
                  margin: "1rem 0",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(0, 200, 255, 0.8), transparent)",
                    animation: "scan 2s linear infinite"
                  }} />
                </div>
                
                <button
                  style={{
                    width: "100%",
                    background: "linear-gradient(to right, rgba(0, 150, 255, 0.2), rgba(0, 100, 200, 0.3))",
                    border: "1px solid #0ff",
                    color: "#0ff",
                    padding: "0.8rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <FaFingerprint style={{ marginRight: "0.5rem" }} />
                  REGENERAR CHAVE QUÂNTICA
                </button>
              </div>
            ) : (
              <div style={{ 
                color: "#aaa",
                textAlign: "center",
                padding: "2rem 0"
              }}>
                <GiCube size={48} style={{ marginBottom: "1rem", opacity: 0.5 }} />
                <div>Selecione um protocolo no cubo 3D</div>
              </div>
            )}
          </motion.div>

          {/* Logs de segurança */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              backgroundColor: "rgba(0, 10, 30, 0.7)",
              padding: "1.5rem",
              borderRadius: "8px",
              border: "1px solid rgba(0, 150, 255, 0.3)",
              boxShadow: "0 0 30px rgba(0, 100, 255, 0.1) inset",
              height: "200px",
              overflowY: "auto"
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem"
            }}>
              <GiSpy size={20} style={{ marginRight: "0.8rem", color: "#f00" }} />
              <h4 style={{ 
                margin: 0,
                fontSize: "1.1rem",
                color: "#0cf"
              }}>
                LOGS DE SEGURANÇA
              </h4>
            </div>
            
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {logs.map((log, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    padding: "0.5rem 0",
                    borderBottom: i < logs.length - 1 ? "1px solid rgba(0, 200, 255, 0.1)" : "none",
                    fontSize: "0.85rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "0.2rem" }}>
                    <div style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: getThreatColor(log.threatLevel),
                      boxShadow: `0 0 8px ${getThreatColor(log.threatLevel)}`,
                      marginRight: "0.5rem"
                    }} />
                    <span style={{ 
                      color: "#0ff",
                      fontWeight: "bold",
                      marginRight: "0.5rem"
                    }}>[{log.protocol}]</span>
                    <span style={{ flex: 1 }}>{log.event}</span>
                    <span style={{ color: "#aaa", fontSize: "0.75rem" }}>{log.time}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Rodapé */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        style={{
          marginTop: "2rem",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(0, 200, 255, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.8rem",
          color: "#aaa"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiNetworkBars style={{ marginRight: "0.5rem" }} />
          <span>SISTEMA DE CRIPTOGRAFIA QUÂNTICA v4.7</span>
        </div>
        <div>
          <span>ÚLTIMA ATUALIZAÇÃO: {new Date().toLocaleTimeString("pt-BR", { hour12: false })}</span>
        </div>
      </motion.div>

      {/* Efeitos de CSS */}
      <style>{`
        @keyframes rotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </motion.section>
  );
}
