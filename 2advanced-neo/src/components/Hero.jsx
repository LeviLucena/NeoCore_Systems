import { motion } from "framer-motion";
import ReactTypingEffect from "react-typing-effect";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(0, 40, 80, 0.8) 0%, rgba(0, 0, 20, 0.9) 50%),
          linear-gradient(145deg, #000814 0%, #001f3f 100%)
        `,
        color: "#0ff",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 255, 255, 0.3)",
        boxShadow: "0 0 40px rgba(0, 255, 255, 0.2) inset",
      }}
    >
      {/* Efeito de partículas */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='1' fill='%2300ffff' opacity='0.1'/%3E%3C/svg%3E")`,
        backgroundSize: "20px 20px",
        opacity: 0.5,
        animation: "particleMove 20s linear infinite"
      }} />
      
      {/* Efeito de grade holográfica */}
      <div style={{
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
        pointerEvents: "none"
      }} />

      {/* Container principal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          padding: "3rem",
          border: "1px solid rgba(0, 255, 255, 0.3)",
          boxShadow: "0 0 60px rgba(0, 255, 255, 0.3)",
          backgroundColor: "rgba(0, 10, 20, 0.7)",
          backdropFilter: "blur(3px)"
        }}
      >
        {/* Título principal com efeito de digitalização */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "1rem"
          }}
        >
          <h1 style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            textShadow: "0 0 15px #0ff, 0 0 30px #0ff",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "3px",
            marginBottom: "1.5rem",
            background: "linear-gradient(90deg, #0ff, #0cf)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            position: "relative"
          }}>
            CENTRAL DE CONTROLE NEURAL
            <span style={{
              position: "absolute",
              bottom: "-10px",
              left: "0",
              width: "100%",
              height: "2px",
              background: "linear-gradient(90deg, #0ff, transparent)",
              animation: "titleUnderline 3s infinite"
            }} />
          </h1>
          
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)",
            animation: "scan 3s linear infinite",
            pointerEvents: "none"
          }} />
        </motion.div>

        {/* Subtítulo com efeito de digitação */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            marginTop: "2rem",
            fontSize: "1.5rem",
            color: "#0fc",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "1px",
            minHeight: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ReactTypingEffect
            text={[
              "INICIALIZANDO SISTEMAS PRIMÁRIOS...",
              "CONECTANDO À REDE NEURAL GLOBAL...",
              "ANALISANDO DADOS EM TEMPO REAL...",
              "SINCRONIZANDO COM SATÉLITES QUÂNTICOS...",
              "ATIVANDO PROTOCOLOS DE SEGURANÇA...",
              "CARREGANDO INTERFACE HOLOGRÁFICA..."
            ]}
            speed={60}
            eraseSpeed={30}
            typingDelay={800}
            eraseDelay={1500}
            displayTextRenderer={(text, i) => {
              return (
                <span style={{
                  borderRight: "2px solid #0ff",
                  paddingRight: "5px",
                  textShadow: "0 0 10px #0ff"
                }}>
                  {text}
                </span>
              );
            }}
          />
        </motion.div>

        {/* Status do sistema */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}
        >
          {[
            { label: "STATUS DA REDE", value: "ONLINE", color: "#0f0" },
            { label: "SEGURANÇA", value: "NÍVEL 5", color: "#ff0" },
            { label: "CONEXÕES", value: "247", color: "#0ff" },
            { label: "LATÊNCIA", value: "3.7ms", color: "#f0f" }
          ].map((item, index) => (
            <div key={index} style={{
              padding: "1rem 2rem",
              border: `1px solid ${item.color}`,
              borderRadius: "5px",
              boxShadow: `0 0 15px ${item.color}33`,
              position: "relative",
              overflow: "hidden",
              minWidth: "180px"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(45deg, transparent, ${item.color}20, transparent)`,
                pointerEvents: "none"
              }} />
              <div style={{
                fontSize: "0.9rem",
                color: "#aaa",
                marginBottom: "0.5rem"
              }}>{item.label}</div>
              <div style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: item.color,
                textShadow: `0 0 10px ${item.color}`
              }}>{item.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Efeitos de CSS */}
        <style>{`
          @keyframes scan {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes particleMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(-200px); }
          }
          @keyframes titleUnderline {
            0% { width: 0; opacity: 0; }
            50% { width: 100%; opacity: 1; }
            100% { width: 0; opacity: 0; }
          }
        `}</style>
      </motion.div>
    </section>
  );
}