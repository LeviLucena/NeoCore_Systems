import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaMicrophone, FaKeyboard, FaPaperPlane } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { BsFillVolumeUpFill } from 'react-icons/bs';

const responses = [
  "SISTEMA ANALISADO. TUDO FUNCIONANDO NOS PARÂMETROS.",
  "DETECTO 3 AMEAÇAS POTENCIAIS NA REDE PRINCIPAL.",
  "CRIPTOGRAFIA QUÂNTICA ATIVA EM TODOS OS NÓS.",
  "SUGESTÃO: ATUALIZAR FIRMWARE DOS DRONES DE VIGILÂNCIA.",
  "ALERTA: POSSÍVEL TENTATIVA DE INVASÃO NO SETOR 7.",
  "REDE NEURAL OPERANDO COM 98.7% DE EFICIÊNCIA."
];

const moods = {
  neutral: { color: "#00a8ff", model: "M1" },
  analyzing: { color: "#ffaa00", model: "M2" },
  alert: { color: "#ff5555", model: "M3" },
  success: { color: "#00ff88", model: "M4" }
};

export default function HolographicAIChatbot() {
  const [messages, setMessages] = useState([
    { text: "SISTEMA DE IA HOLO-7 INICIADO", sender: "ai", mood: "neutral" }
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [currentMood, setCurrentMood] = useState("neutral");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Mensagem do usuário
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setCurrentMood("analyzing");
    
    // Resposta da IA após delay
    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const moodKeys = Object.keys(moods);
      const randomMood = moodKeys[Math.floor(Math.random() * moodKeys.length)];
      
      setMessages(prev => [...prev, { 
        text: randomResponse, 
        sender: "ai", 
        mood: randomMood 
      }]);
      setCurrentMood(randomMood);
    }, 1500);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulação de captura de voz
      setTimeout(() => {
        const voiceCommands = [
          "Verifique o status da rede",
          "Existem ameaças detectadas?",
          "Ativar protocolo de segurança",
          "Mostre os logs do sistema"
        ];
        setInput(voiceCommands[Math.floor(Math.random() * voiceCommands.length)]);
        setIsListening(false);
      }, 2000);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 1000
    }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              width: '350px',
              backgroundColor: 'rgba(0, 20, 40, 0.9)',
              borderRadius: '12px',
              border: `1px solid ${moods[currentMood].color}`,
              boxShadow: `0 0 30px ${moods[currentMood].color}40`,
              overflow: 'hidden',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Cabeçalho */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(0, 30, 60, 0.7)',
              borderBottom: `1px solid ${moods[currentMood].color}`
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FaRobot size={24} style={{ 
                  color: moods[currentMood].color,
                  marginRight: '0.5rem'
                }} />
                <span style={{ 
                  fontWeight: 'bold',
                  background: `linear-gradient(90deg, ${moods[currentMood].color}, #00a8ff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  HOLO-AI v7.{moods[currentMood].model}
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ff5555',
                  cursor: 'pointer'
                }}
              >
                <IoMdClose size={20} />
              </button>
            </div>

            {/* Chat container */}
            <div style={{
              height: '300px',
              overflowY: 'auto',
              padding: '1rem',
              background: `
                radial-gradient(circle at 20% 30%, rgba(0, 40, 80, 0.3) 0%, transparent 50%),
                linear-gradient(to bottom, rgba(0, 10, 30, 0.9), rgba(0, 20, 50, 0.9))
              `,
              scrollbarWidth: 'thin'
            }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
                    alignItems: 'flex-start'
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    padding: '0.7rem 1rem',
                    borderRadius: msg.sender === 'user' 
                      ? '12px 0 12px 12px' 
                      : '0 12px 12px 12px',
                    backgroundColor: msg.sender === 'user'
                      ? 'rgba(0, 100, 200, 0.4)'
                      : `rgba(${msg.mood ? moods[msg.mood].color.replace('#', '') : '0,168,255'}, 0.2)`,
                    border: `1px solid ${msg.sender === 'user' 
                      ? '#00a8ff' 
                      : msg.mood ? moods[msg.mood].color : '#00a8ff'}`,
                    color: '#fff',
                    fontSize: '0.9rem',
                    lineHeight: '1.4',
                    boxShadow: `0 2px 10px ${msg.sender === 'user' 
                      ? 'rgba(0, 168, 255, 0.2)' 
                      : msg.mood ? `${moods[msg.mood].color}30` : 'rgba(0, 168, 255, 0.2)'}`
                  }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div style={{
              padding: '1rem',
              borderTop: `1px solid ${moods[currentMood].color}20`,
              backgroundColor: 'rgba(0, 30, 60, 0.5)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '0.5rem'
              }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite um comando..."
                  style={{
                    flex: 1,
                    padding: '0.7rem',
                    backgroundColor: 'rgba(0, 10, 30, 0.7)',
                    border: `1px solid ${moods[currentMood].color}80`,
                    borderRadius: '6px',
                    color: '#fff',
                    outline: 'none',
                    fontFamily: "'Courier New', monospace"
                  }}
                />
                <button
                  onClick={handleSend}
                  style={{
                    marginLeft: '0.5rem',
                    padding: '0.7rem',
                    backgroundColor: 'rgba(0, 100, 200, 0.5)',
                    border: '1px solid #00a8ff',
                    borderRadius: '6px',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <FaPaperPlane />
                </button>
                <button
                  onClick={toggleListening}
                  style={{
                    marginLeft: '0.5rem',
                    padding: '0.7rem',
                    backgroundColor: isListening 
                      ? 'rgba(255, 0, 0, 0.3)' 
                      : 'rgba(0, 100, 200, 0.5)',
                    border: `1px solid ${isListening ? '#ff5555' : '#00a8ff'}`,
                    borderRadius: '6px',
                    color: isListening ? '#ff5555' : '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <FaMicrophone />
                </button>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: '#aaa'
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: moods[currentMood].color,
                    boxShadow: `0 0 8px ${moods[currentMood].color}`,
                    marginRight: '0.5rem'
                  }} />
                  STATUS: {currentMood.toUpperCase()}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <BsFillVolumeUpFill style={{ marginRight: '0.3rem' }} />
                  VOZ ATIVADA
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: moods[currentMood].color,
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: `0 0 20px ${moods[currentMood].color}`,
          position: 'absolute',
          bottom: '0',
          right: '0'
        }}
      >
        <FaRobot size={24} />
      </motion.button>
    </div>
  );
}
