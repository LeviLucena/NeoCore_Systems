import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaSkull, FaUserSecret, FaRadiation, FaServer } from "react-icons/fa";
import { GiSpiderWeb, GiHacker, GiCrossedBones } from "react-icons/gi";

const threatTypes = [
  { icon: <GiHacker size={20} />, name: "HACKER", color: "#ff5555" },
  { icon: <FaRadiation size={18} />, name: "MALWARE", color: "#ffaa00" },
  { icon: <FaServer size={18} />, name: "DDoS", color: "#ff00aa" },
  { icon: <GiSpiderWeb size={20} />, name: "PHISHING", color: "#aa00ff" },
  { icon: <FaUserSecret size={18} />, name: "ESPIONAGEM", color: "#00aaff" }
];

const cities = [
  { name: "NOVA YORK", coords: [40.7, -74], threats: [] },
  { name: "TÓQUIO", coords: [35.7, 139.7], threats: [] },
  { name: "LONDRES", coords: [51.5, -0.1], threats: [] },
  { name: "SÃO PAULO", coords: [-23.5, -46.6], threats: [] },
  { name: "MOSCOU", coords: [55.8, 37.6], threats: [] },
  { name: "XANGAI", coords: [31.2, 121.5], threats: [] },
  { name: "DUBAI", coords: [25.3, 55.3], threats: [] },
  { name: "SINGAPURA", coords: [1.3, 103.8], threats: [] }
];

function generateRandomThreat() {
  const cityIndex = Math.floor(Math.random() * cities.length);
  const threatIndex = Math.floor(Math.random() * threatTypes.length);
  const intensity = Math.floor(Math.random() * 3) + 1; // 1-3
  
  return {
    id: Date.now() + Math.random(),
    city: cities[cityIndex].name,
    coords: [...cities[cityIndex].coords],
    type: threatTypes[threatIndex],
    intensity,
    time: new Date().toLocaleTimeString("pt-BR", { hour12: false })
  };
}

export default function HolographicGlobalThreatMap() {
  const [threats, setThreats] = useState([]);
  const [activeThreat, setActiveThreat] = useState(null);
  const [mapTilt, setMapTilt] = useState(15);
  const [alertLevel, setAlertLevel] = useState(1); // 1-3

  useEffect(() => {
    // Inicializa com 3 ameaças
    setThreats(Array.from({ length: 3 }, () => generateRandomThreat()));
    
    // Gera novas ameaças periodicamente
    const threatInterval = setInterval(() => {
      setThreats(prev => {
        const newThreats = [...prev.slice(0, 9)];
        if (Math.random() > 0.3) {
          newThreats.unshift(generateRandomThreat());
        }
        return newThreats;
      });
    }, 4000);

    // Atualiza nível de alerta
    const alertInterval = setInterval(() => {
      const threatCount = threats.filter(t => t.intensity >= 2).length;
      setAlertLevel(threatCount > 3 ? 3 : threatCount > 1 ? 2 : 1);
    }, 3000);

    return () => {
      clearInterval(threatInterval);
      clearInterval(alertInterval);
    };
  }, [threats.length]);

  const getAlertColor = () => {
    return ["#00ff00", "#ffaa00", "#ff0000"][alertLevel - 1];
  };

  const renderGlobe = () => {
    return (
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {/* Base do holograma */}
        <div style={{
          position: "absolute",
          bottom: "0",
          width: "120%",
          height: "20px",
          background: "linear-gradient(to right, transparent, #00aaff, transparent)",
          borderRadius: "50%",
          filter: "blur(10px)",
          opacity: 0.7
        }} />
        
        {/* Efeito de grade holográfica */}
        <div style={{
          position: "absolute",
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          background: `
            radial-gradient(circle at center, rgba(0, 170, 255, 0.1) 0%, transparent 70%),
            linear-gradient(to right, rgba(0, 170, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 170, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          transform: `rotateX(${mapTilt}deg)`,
          border: "1px solid rgba(0, 170, 255, 0.3)",
          boxShadow: "0 0 50px rgba(0, 170, 255, 0.2) inset"
        }}>
          {/* Linhas longitudinais */}
          {[...Array(12)].map((_, i) => (
            <div key={`long-${i}`} style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "1px",
              background: `linear-gradient(to right, transparent, rgba(0, 200, 255, 0.3), transparent)`,
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
              transformOrigin: "left center"
            }} />
          ))}
          
          {/* Linhas latitudinais */}
          {[...Array(6)].map((_, i) => {
            const angle = i * 30;
            return (
              <div key={`lat-${i}`} style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: `${Math.cos(angle * Math.PI/180) * 100}%`,
                height: "1px",
                background: `linear-gradient(to right, transparent, rgba(0, 200, 255, 0.3), transparent)`,
                transform: `translate(-50%, -50%) rotateX(${angle}deg)`,
                transformOrigin: "center center"
              }} />
            );
          })}
          
          {/* Ameaças */}
          {threats.map((threat, i) => {
            const [lat, long] = threat.coords;
            const x = 50 + (long / 180) * 40;
            const y = 50 - (lat / 90) * 40;
            
            return (
              <motion.div
                key={threat.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: activeThreat === threat.id ? 1.5 : 1,
                  boxShadow: activeThreat === threat.id 
                    ? `0 0 30px ${threat.type.color}` 
                    : `0 0 15px ${threat.type.color}`
                }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  color: threat.type.color,
                  cursor: "pointer",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                onClick={() => setActiveThreat(threat.id)}
                whileHover={{ scale: 1.3 }}
              >
                <div style={{
                  fontSize: "24px",
                  filter: `drop-shadow(0 0 5px ${threat.type.color})`
                }}>
                  {threat.intensity >= 3 ? <GiCrossedBones /> : 
                   threat.intensity >= 2 ? <FaSkull /> : threat.type.icon}
                </div>
                <div style={{
                  width: `${threat.intensity * 5}px`,
                  height: `${threat.intensity * 5}px`,
                  borderRadius: "50%",
                  backgroundColor: threat.type.color,
                  opacity: 0.3,
                  marginTop: "-10px"
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <motion.section
      id="threat-map"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(0, 40, 80, 0.9) 0%, rgba(0, 10, 30, 1) 70%),
          linear-gradient(to bottom, #001a3a, #000a1a)
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
          <FaGlobeAmericas size={28} style={{ marginRight: "1rem", color: "#00aaff" }} />
          <h3 style={{ 
            fontSize: "1.8rem",
            fontWeight: "bold",
            margin: 0,
            textShadow: "0 0 15px #0ff",
            letterSpacing: "2px",
            background: "linear-gradient(90deg, #00aaff, #00ffaa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            MAPA HOLOGRÁFICO DE AMEAÇAS
          </h3>
        </div>
        
        <div style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: `rgba(${alertLevel === 3 ? "255,0,0" : alertLevel === 2 ? "255,170,0" : "0,170,0"},0.2)`,
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: `1px solid ${getAlertColor()}`,
          boxShadow: `0 0 15px ${getAlertColor()}40`
        }}>
          <div style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: getAlertColor(),
            boxShadow: `0 0 10px ${getAlertColor()}`,
            marginRight: "0.5rem",
            animation: "pulse 1s infinite"
          }} />
          <span>NÍVEL DE ALERTA: {["BAIXO", "MÉDIO", "ALTO"][alertLevel - 1]}</span>
        </div>
      </motion.div>

      {/* Conteúdo principal */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "2rem",
        position: "relative",
        zIndex: 1,
        height: "500px"
      }}>
        {/* Mapa holográfico */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            backgroundColor: "rgba(0, 10, 30, 0.7)",
            borderRadius: "8px",
            border: "1px solid rgba(0, 150, 255, 0.3)",
            boxShadow: "0 0 30px rgba(0, 100, 255, 0.1) inset",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {renderGlobe()}
          
          {/* Controles do mapa */}
          <div style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            display: "flex",
            gap: "0.5rem",
            zIndex: 3
          }}>
            <button 
              onClick={() => setMapTilt(prev => Math.min(prev + 10, 60))}
              style={{
                background: "rgba(0, 50, 100, 0.5)",
                border: "1px solid #0ff",
                color: "#0ff",
                width: "30px",
                height: "30px",
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              ↑
            </button>
            <button 
              onClick={() => setMapTilt(prev => Math.max(prev - 10, -20))}
              style={{
                background: "rgba(0, 50, 100, 0.5)",
                border: "1px solid #0ff",
                color: "#0ff",
                width: "30px",
                height: "30px",
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              ↓
            </button>
          </div>
        </motion.div>

        {/* Painel de informações */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem"
        }}>
          {/* Detalhes da ameaça selecionada */}
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
              flex: 1
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              borderBottom: "1px solid rgba(0, 200, 255, 0.3)",
              paddingBottom: "0.5rem"
            }}>
              <FaSkull style={{ marginRight: "0.8rem", color: "#ff5555" }} />
              <h4 style={{ 
                margin: 0,
                fontSize: "1.2rem",
                color: "#0cf"
              }}>
                {activeThreat ? "AMEAÇA DETECTADA" : "NENHUMA AMEAÇA SELECIONADA"}
              </h4>
            </div>
            
            {activeThreat ? (
              (() => {
                const threat = threats.find(t => t.id === activeThreat);
                if (!threat) return null;
                
                return (
                  <div>
                    <div style={{ 
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "1rem",
                      marginBottom: "1rem"
                    }}>
                      <div>
                        <div style={{ color: "#aaa", fontSize: "0.8rem" }}>TIPO</div>
                        <div style={{ 
                          color: threat.type.color,
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem"
                        }}>
                          {threat.type.icon} {threat.type.name}
                        </div>
                      </div>
                      <div>
                        <div style={{ color: "#aaa", fontSize: "0.8rem" }}>INTENSIDADE</div>
                        <div style={{ 
                          color: threat.type.color,
                          fontWeight: "bold",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem"
                        }}>
                          {Array.from({ length: threat.intensity }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div style={{ color: "#aaa", fontSize: "0.8rem" }}>LOCALIZAÇÃO</div>
                        <div style={{ color: "#0ff" }}>{threat.city}</div>
                      </div>
                      <div>
                        <div style={{ color: "#aaa", fontSize: "0.8rem" }}>HORÁRIO</div>
                        <div style={{ color: "#0ff" }}>{threat.time}</div>
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
                        background: "linear-gradient(to right, rgba(255, 0, 0, 0.2), rgba(200, 0, 0, 0.3))",
                        border: "1px solid #ff5555",
                        color: "#ff5555",
                        padding: "0.8rem",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem"
                      }}
                    >
                      <FaSkull />
                      NEUTRALIZAR AMEAÇA
                    </button>
                  </div>
                );
              })()
            ) : (
              <div style={{ 
                color: "#aaa",
                textAlign: "center",
                padding: "2rem 0"
              }}>
                <div style={{ fontSize: "3rem", opacity: 0.5 }}>?</div>
                <div>Selecione uma ameaça no mapa</div>
              </div>
            )}
          </motion.div>

          {/* Estatísticas rápidas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              backgroundColor: "rgba(0, 20, 50, 0.6)",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid rgba(0, 150, 255, 0.2)",
              boxShadow: "0 0 20px rgba(0, 100, 255, 0.1) inset",
              backdropFilter: "blur(5px)"
            }}
          >
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
              textAlign: "center"
            }}>
              <div>
                <div style={{ color: "#aaa", fontSize: "0.8rem" }}>TOTAL</div>
                <div style={{ 
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#0ff"
                }}>
                  {threats.length}
                </div>
              </div>
              <div>
                <div style={{ color: "#aaa", fontSize: "0.8rem" }}>ATIVAS</div>
                <div style={{ 
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#ffaa00"
                }}>
                  {threats.filter(t => t.intensity >= 2).length}
                </div>
              </div>
              <div>
                <div style={{ color: "#aaa", fontSize: "0.8rem" }}>CRÍTICAS</div>
                <div style={{ 
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#ff5555"
                }}>
                  {threats.filter(t => t.intensity >= 3).length}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efeitos de CSS */}
      <style>{`
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
