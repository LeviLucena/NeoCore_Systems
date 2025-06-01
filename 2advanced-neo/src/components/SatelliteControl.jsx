import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSatellite, FaGlobeAmericas, FaSignal, FaSatelliteDish } from "react-icons/fa";
import { GiOrbital } from "react-icons/gi";

const satellites = [
  { 
    id: 1, 
    name: "NEO-ALPHA", 
    altitude: "Low Earth Orbit (520 km)", 
    region: "AMÉRICA DO SUL", 
    status: "ATIVO", 
    signal: 98,
    frequency: "Ka-Band (26.5-40 GHz)"
  },
  { 
    id: 2, 
    name: "NEO-BETA", 
    altitude: "Medium Earth Orbit (600 km)", 
    region: "EUROPA", 
    status: "MANUTENÇÃO", 
    signal: 45,
    frequency: "X-Band (8-12 GHz)"
  },
  { 
    id: 3, 
    name: "NEO-GAMMA", 
    altitude: "High Earth Orbit (750 km)", 
    region: "ÁSIA-PACÍFICO", 
    status: "OFFLINE", 
    signal: 5,
    frequency: "Ku-Band (12-18 GHz)"
  },
  {
    id: 4,
    name: "NEO-OMEGA",
    altitude: "Geostationary Orbit (35,786 km)",
    region: "COBERTURA GLOBAL",
    status: "ATIVO",
    signal: 92,
    frequency: "C-Band (4-8 GHz)"
  }
];

const statusColor = {
  "ATIVO": "#00ff88",
  "MANUTENÇÃO": "#ffcc00",
  "OFFLINE": "#ff3333"
};

export default function SatelliteControl() {
  const [selected, setSelected] = useState(satellites[0]);
  const [orbitProgress, setOrbitProgress] = useState(0);
  const [signalData, setSignalData] = useState([]);

  useEffect(() => {
    // Simulação de dados de sinal em tempo real
    const interval = setInterval(() => {
      setSignalData(prev => {
        const newValue = Math.random() * 20 - 10 + (selected?.signal || 0);
        return [...prev.slice(-9), Math.min(100, Math.max(0, newValue))];
      });
      
      setOrbitProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
    }, 500);

    return () => clearInterval(interval);
  }, [selected]);

  useEffect(() => {
    setSignalData(Array(10).fill(selected?.signal || 0));
  }, [selected]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(0, 40, 80, 0.8) 0%, rgba(0, 10, 30, 0.9) 70%),
          linear-gradient(to right, #000a1a, #001a2a)
        `,
        padding: "2rem",
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

      {/* Cabeçalho */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1.5rem",
          position: "relative",
          zIndex: 1
        }}
      >
        <FaSatelliteDish size={32} style={{ color: "#0ff", marginRight: "1rem" }} />
        <h3 style={{ 
          fontSize: "1.8rem",
          fontWeight: "bold",
          margin: 0,
          background: "linear-gradient(90deg, #0ff, #0cf)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "2px"
        }}>
          CONTROLE ORBITAL
        </h3>
        <div style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          fontSize: "0.9rem",
          color: "#0f0"
        }}>
          <div style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#0f0",
            boxShadow: "0 0 10px #0f0",
            marginRight: "0.5rem"
          }} />
          SISTEMA OPERACIONAL
        </div>
      </motion.div>

      {/* Grid de satélites */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.5rem",
        marginBottom: "2rem",
        position: "relative",
        zIndex: 1
      }}>
        {satellites.map((sat) => (
          <motion.div
            key={sat.id}
            onClick={() => setSelected(sat)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sat.id * 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: `0 10px 25px ${statusColor[sat.status]}33`
            }}
            style={{
              cursor: "pointer",
              backgroundColor: selected?.id === sat.id ? "rgba(0, 50, 80, 0.6)" : "rgba(0, 20, 40, 0.6)",
              padding: "1.5rem 1rem",
              borderRadius: "5px",
              border: `1px solid ${statusColor[sat.status]}`,
              boxShadow: selected?.id === sat.id 
                ? `0 0 25px ${statusColor[sat.status]}66` 
                : `0 0 10px ${statusColor[sat.status]}33`,
              backdropFilter: "blur(5px)",
              textAlign: "center",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Efeito de brilho */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `linear-gradient(45deg, transparent, ${statusColor[sat.status]}10, transparent)`,
              pointerEvents: "none"
            }} />

            <FaSatellite size={36} style={{ 
              color: statusColor[sat.status],
              marginBottom: "1rem",
              filter: `drop-shadow(0 0 8px ${statusColor[sat.status]})`
            }} />
            <h4 style={{ 
              fontSize: "1.2rem",
              fontWeight: "bold",
              margin: "0.5rem 0",
              color: "#0ff",
              letterSpacing: "1px"
            }}>
              {sat.name}
            </h4>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "0.5rem"
            }}>
              <div style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: statusColor[sat.status],
                boxShadow: `0 0 8px ${statusColor[sat.status]}`,
                marginRight: "0.5rem"
              }} />
              <span style={{ 
                fontSize: "0.85rem",
                color: statusColor[sat.status],
                textTransform: "uppercase"
              }}>
                {sat.status}
              </span>
            </div>
            <div style={{
              height: "4px",
              background: `linear-gradient(90deg, ${statusColor[sat.status]}, transparent)`,
              marginTop: "0.5rem",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${sat.signal}%`,
                height: "100%",
                background: statusColor[sat.status],
                boxShadow: `0 0 10px ${statusColor[sat.status]}`
              }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Painel de detalhes do satélite */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "rgba(0, 20, 40, 0.7)",
            padding: "2rem",
            borderRadius: "5px",
            border: `1px solid ${statusColor[selected.status]}`,
            boxShadow: `0 0 30px ${statusColor[selected.status]}33`,
            backdropFilter: "blur(5px)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Efeito de brilho */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(45deg, transparent, ${statusColor[selected.status]}10, transparent)`,
            pointerEvents: "none"
          }} />

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem"
          }}>
            {/* Informações do satélite */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1.5rem"
              }}>
                <GiOrbital size={40} style={{ 
                  color: statusColor[selected.status],
                  marginRight: "1rem"
                }} />
                <h4 style={{ 
                  fontSize: "1.8rem",
                  margin: 0,
                  color: statusColor[selected.status],
                  textShadow: `0 0 10px ${statusColor[selected.status]}`,
                  letterSpacing: "1px"
                }}>
                  {selected.name}
                </h4>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem"
              }}>
                <div>
                  <p style={{ color: "#aaa", marginBottom: "0.3rem" }}>ALTITUDE</p>
                  <p style={{ 
                    fontSize: "1.2rem",
                    color: "#0ff",
                    fontWeight: "bold"
                  }}>{selected.altitude}</p>
                </div>
                <div>
                  <p style={{ color: "#aaa", marginBottom: "0.3rem" }}>REGIÃO</p>
                  <p style={{ 
                    fontSize: "1.2rem",
                    color: "#0ff",
                    fontWeight: "bold"
                  }}>{selected.region}</p>
                </div>
                <div>
                  <p style={{ color: "#aaa", marginBottom: "0.3rem" }}>STATUS</p>
                  <p style={{ 
                    fontSize: "1.2rem",
                    color: statusColor[selected.status],
                    fontWeight: "bold",
                    textShadow: `0 0 8px ${statusColor[selected.status]}`
                  }}>{selected.status}</p>
                </div>
                <div>
                  <p style={{ color: "#aaa", marginBottom: "0.3rem" }}>FREQUÊNCIA</p>
                  <p style={{ 
                    fontSize: "1.2rem",
                    color: "#0ff",
                    fontWeight: "bold"
                  }}>{selected.frequency}</p>
                </div>
              </div>
            </div>

            {/* Gráfico de sinal */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem"
              }}>
                <FaSignal size={24} style={{ 
                  color: statusColor[selected.status],
                  marginRight: "0.5rem"
                }} />
                <h5 style={{ 
                  fontSize: "1.2rem",
                  margin: 0,
                  color: "#0ff"
                }}>
                  FORÇA DO SINAL: <span style={{ color: statusColor[selected.status] }}>{selected.signal}%</span>
                </h5>
              </div>

              <div style={{
                height: "150px",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(0, 255, 255, 0.2)",
                borderRadius: "5px",
                padding: "1rem",
                position: "relative"
              }}>
                <div style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "flex-end",
                  gap: "4px"
                }}>
                  {signalData.map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: "0%" }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.5 }}
                      style={{
                        flex: 1,
                        backgroundColor: statusColor[selected.status],
                        borderRadius: "2px",
                        opacity: 0.7,
                        position: "relative"
                      }}
                    >
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(transparent, ${statusColor[selected.status]})`,
                        opacity: 0.3
                      }} />
                    </motion.div>
                  ))}
                </div>
                <div style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  right: "1rem",
                  height: "1px",
                  backgroundColor: "rgba(0, 255, 255, 0.3)"
                }} />
              </div>
            </div>
          </div>

          {/* Simulação de órbita */}
          <div style={{ marginTop: "2rem" }}>
            <h5 style={{ 
              fontSize: "1.2rem",
              marginBottom: "1rem",
              color: "#0ff",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <FaGlobeAmericas /> SIMULAÇÃO DE ÓRBITA
            </h5>
            <div style={{
              height: "150px",
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(0, 255, 255, 0.2)",
              borderRadius: "5px",
              overflow: "hidden"
            }}>
              {/* Planeta */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, #0077be, #001a33)",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 20px #0077be"
              }} />
              
              {/* Órbita */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "80%",
                height: "80%",
                border: "1px dashed rgba(0, 255, 255, 0.3)",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)"
              }} />
              
              {/* Satélite */}
              <motion.div
                animate={{
                  x: `calc(40% * cos(${orbitProgress * 3.6}deg))`,
                  y: `calc(40% * sin(${orbitProgress * 3.6}deg))`
                }}
                transition={{ ease: "linear", duration: 0 }}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: statusColor[selected.status],
                  boxShadow: `0 0 10px ${statusColor[selected.status]}`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <div style={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "24px"
                }}>
                  <FaSatellite style={{ color: statusColor[selected.status] }} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}