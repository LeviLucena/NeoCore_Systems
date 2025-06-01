import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "[SYSTEM BOOT: 0x78FA3D...OK]",
  "[NEURAL NETWORK SYNCHRONIZATION...DONE]",
  "[QUANTUM ENCRYPTION LAYERS: ACTIVE]",
  "[BIOMETRIC SCAN COMPLETE]",
  "[AWAITING OPERATOR CREDENTIALS...]"
];

const binaryRain = () => {
  const chars = "01";
  let result = "";
  for (let i = 0; i < 1000; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result.match(/.{1,50}/g).join("\n");
};

export default function LoadingScreen({ onFinish }) {
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [authStage, setAuthStage] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [hologramActive, setHologramActive] = useState(false);
  const [accessLevel, setAccessLevel] = useState("GUEST");

  useEffect(() => {
    if (currentMsgIndex < messages.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, messages[currentMsgIndex]]);
        setCurrentMsgIndex(currentMsgIndex + 1);
      }, 800 + Math.random() * 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setAuthStage(true);
        setHologramActive(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentMsgIndex]);

  const handleAuth = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === "admin") {
      setError(false);
      setAccessLevel("ADMIN");
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onFinish, 1200);
      }, 1500);
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`loading-screen ${error ? "shake" : ""}`}
          style={{
            backgroundColor: "#000",
            color: "#0ff",
            fontFamily: "'Courier New', monospace",
            height: "100vh",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: "1.3rem",
            userSelect: "none",
            position: "relative",
            overflow: "hidden",
            letterSpacing: "1px"
          }}
        >
          {/* Matrix rain background */}
          <div className="binary-rain" style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            color: "rgba(0, 255, 255, 0.1)",
            fontSize: "1rem",
            lineHeight: "1.2rem",
            whiteSpace: "pre",
            zIndex: 0,
            pointerEvents: "none"
          }}>
            {binaryRain()}
          </div>

          {/* Scanline overlay */}
          <div className="scanlines" />

          {/* Holographic grid */}
          {hologramActive && (
            <div className="hologram-grid" style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              zIndex: 1,
              pointerEvents: "none"
            }} />
          )}

          {/* Main content container */}
          <motion.div 
            style={{
              position: "relative",
              zIndex: 2,
              padding: "2rem",
              border: "1px solid rgba(0, 255, 255, 0.3)",
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.2)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(2px)"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* System header */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
              borderBottom: "1px solid #0ff",
              paddingBottom: "0.5rem"
            }}>
              <div style={{ color: "#0f0" }}>NEURAL_INTERFACE v4.2.7</div>
              <div style={{ color: "#ff0" }}>ACCESS: {accessLevel}</div>
            </div>

            {/* Messages display */}
            <div style={{ minHeight: "200px" }}>
              {displayedMessages.map((msg, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    margin: "0.5rem 0",
                    textShadow: "0 0 8px #0ff",
                    color: i === displayedMessages.length - 1 ? "#ff0" : "#0ff"
                  }}
                >
                  {msg}
                </motion.p>
              ))}

              {!authStage && currentMsgIndex < messages.length && (
                <span className="blinking-cursor" style={{ color: "#0f0" }}>█</span>
              )}
            </div>

            {/* Authentication form */}
            {authStage && (
              <motion.form
                onSubmit={handleAuth}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "400px"
                }}
              >
                <label htmlFor="password" style={{ 
                  marginBottom: "0.5rem",
                  color: "#0f0",
                  fontSize: "1.1rem"
                }}>
                  [SECURE AUTHENTICATION REQUIRED]
                </label>
                
                <div style={{ position: "relative" }}>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      color: "#0ff",
                      border: "1px solid #0ff",
                      padding: "0.8rem",
                      fontFamily: "monospace",
                      outline: "none",
                      fontSize: "1.2rem",
                      textShadow: "0 0 4px #0ff",
                      width: "100%",
                      boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
                      letterSpacing: "2px"
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
                    animation: "scan 2s linear infinite"
                  }} />
                </div>

                <button
                  type="submit"
                  className="validate-button"
                  style={{
                    marginTop: "1.5rem",
                    background: "linear-gradient(to right, rgba(0, 255, 255, 0.1), rgba(0, 100, 255, 0.2))",
                    border: "1px solid #0ff",
                    color: "#0ff",
                    padding: "0.8rem",
                    cursor: "pointer",
                    fontFamily: "monospace",
                    fontSize: "1.1rem",
                    textShadow: "0 0 8px #0ff",
                    letterSpacing: "2px",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <span style={{ position: "relative", zIndex: 2 }}>INITIATE_SEQUENCE</span>
                  <span style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.4), transparent)",
                    transition: "0.3s"
                  }} className="button-glow" />
                </button>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                      color: "#f00",
                      marginTop: "1.5rem",
                      fontSize: "1rem",
                      textShadow: "0 0 12px #f00",
                      textAlign: "center",
                      padding: "0.5rem",
                      border: "1px solid #f00",
                      background: "rgba(255, 0, 0, 0.1)"
                    }}
                  >
                    [SECURITY ALERT: UNAUTHORIZED ACCESS ATTEMPT]
                  </motion.p>
                )}
              </motion.form>
            )}
          </motion.div>

          {/* System status footer */}
          <motion.div 
            style={{
              position: "absolute",
              bottom: "1rem",
              left: "1rem",
              fontSize: "0.9rem",
              color: "rgba(0, 255, 255, 0.6)",
              zIndex: 2
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            SYSTEM STATUS: {authStage ? "AWAITING_INPUT" : "INITIALIZING"} | CPU_LOAD: {Math.floor(Math.random() * 40) + 10}% | MEM_USAGE: {Math.floor(Math.random() * 60) + 20}%
          </motion.div>

          {/* Estilos CSS */}
          <style>{`
            .blinking-cursor {
              animation: blink 0.7s step-end infinite;
              font-weight: bold;
            }
            @keyframes blink {
              50% { opacity: 0; }
            }
            .scanlines {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-image: repeating-linear-gradient(
                to bottom,
                rgba(0, 255, 255, 0.03) 0px,
                rgba(0, 255, 255, 0.03) 1px,
                transparent 1px,
                transparent 2px
              );
              pointer-events: none;
              z-index: 1;
              animation: scanMove 4s linear infinite;
            }
            @keyframes scanMove {
              0% { background-position: 0 0; }
              100% { background-position: 0 100%; }
            }
            .validate-button:hover .button-glow {
              left: 100%;
            }
            @keyframes scan {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            .shake {
              animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
            }
            @keyframes shake {
              10%, 90% { transform: translateX(-1px); }
              20%, 80% { transform: translateX(2px); }
              30%, 50%, 70% { transform: translateX(-4px); }
              40%, 60% { transform: translateX(4px); }
            }
            .binary-rain {
              animation: rainFlow 10s linear infinite;
            }
            @keyframes rainFlow {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(100%); }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}