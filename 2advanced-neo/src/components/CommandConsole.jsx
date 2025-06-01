import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaRobot, FaSatellite, FaShieldAlt } from 'react-icons/fa';

export default function CommandConsole() {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const consoleRef = useRef(null);

  // Efeito de partículas no fundo
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1
      });
    }
  }, []);

  // Simulação de eventos automáticos com estilo cyberpunk
  useEffect(() => {
    const startupLogs = [
      {
        msg: '[BOOT] INICIALIZANDO SISTEMA NEOCORE v4.2.1...',
        color: '#00ff88',
        icon: <FaTerminal />
      },
      {
        msg: '[SECURITY] PROTOCOLOS DE SEGURANÇA CARREGADOS [OK]',
        color: '#00ff88',
        icon: <FaShieldAlt />
      },
      {
        msg: '[WARNING] CONEXÃO COM SATÉLITE BETA-3 FALHOU',
        color: '#ffcc00',
        icon: <FaSatellite />
      },
      {
        msg: '[SYSTEM] FALLBACK PARA SATÉLITE DELTA-2 ESTABELECIDO',
        color: '#00aaff',
        icon: <FaSatellite />
      },
      {
        msg: '[SCAN] SCANNER DE AMEAÇAS ATIVADO - COBERTURA 98.7%',
        color: '#00ffff',
        icon: <FaRobot />
      },
      {
        msg: '[STATUS] NENHUMA ANOMALIA DETECTADA',
        color: '#00ff88',
        icon: <FaShieldAlt />
      },
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < startupLogs.length) {
        const time = new Date().toLocaleTimeString('pt-BR', { hour12: false });
        setLogs(prev => [...prev, { ...startupLogs[i], time, id: Date.now() + i }]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Resposta a comandos com animação
  const handleCommand = async () => {
    if (!input.trim() || isProcessing) return;

    setIsProcessing(true);
    const time = new Date().toLocaleTimeString('pt-BR', { hour12: false });
    const command = input.trim().toLowerCase();

    // Adiciona o comando ao log
    setLogs(prev => [...prev, {
      msg: `> ${command}`,
      color: '#00ffff',
      time,
      id: Date.now()
    }]);
    setInput('');

    // Processa o comando
    if (command === 'status') {
      await simulateProcessing(1000);
      addLog('STATUS DO SISTEMA: TODOS OS SISTEMAS OPERACIONAIS', '#00ff88');
      addLog('CPU: 42% | MEM: 68% | TEMP: 36°C', '#00aaff');
    }
    else if (command === 'scan') {
      await simulateScan();
    }
    else if (command === 'reboot') {
      await simulateProcessing(1500);
      addLog('REINICIANDO SUBSISTEMAS...', '#ffcc00');
      addLog('DESATIVANDO MÓDULOS SECUNDÁRIOS', '#ffcc00');
      addLog('REINICIALIZAÇÃO CONCLUÍDA [OK]', '#00ff88');
    }
    else if (command === 'help') {
      addLog('COMANDOS DISPONÍVEIS:', '#00ffff');
      addLog('status - Exibe o status do sistema', '#00aaff');
      addLog('scan   - Executa varredura completa', '#00aaff');
      addLog('reboot - Reinicia subsistemas', '#00aaff');
      addLog('help   - Mostra esta ajuda', '#00aaff');
    }
    else {
      await simulateProcessing(500);
      addLog(`ERRO: COMANDO "${command.toUpperCase()}" NÃO RECONHECIDO`, '#ff3333');
    }

    setIsProcessing(false);
  };

  // Funções auxiliares
  const addLog = (msg, color = '#00ffff', delay = 0) => {
    setTimeout(() => {
      const time = new Date().toLocaleTimeString('pt-BR', { hour12: false });
      setLogs(prev => [...prev, { msg, color, time, id: Date.now() }]);
    }, delay);
  };

  const simulateProcessing = (duration) => {
    return new Promise(resolve => {
      addLog('PROCESSANDO...', '#ffcc00');
      setTimeout(resolve, duration);
    });
  };

  const simulateScan = async () => {
    addLog('INICIANDO VARREDURA DE SEGURANÇA...', '#00ffff');
    await simulateProcessing(800);

    const sectors = ['ALPHA', 'BETA', 'GAMMA', 'DELTA', 'EPSILON'];
    for (const sector of sectors) {
      addLog(`ESCANEANDO SETOR ${sector}...`, '#00aaff');
      await simulateProcessing(600 + Math.random() * 800);

      if (Math.random() > 0.7) {
        addLog(`ANOMALIA DETECTADA EM NÓ ${sector}-${Math.floor(Math.random() * 50)}`, '#ffcc00');
        await simulateProcessing(800);
        addLog(`CORREÇÃO AUTOMÁTICA APLICADA [OK]`, '#00ff88');
      } else {
        addLog(`SETOR ${sector} VERIFICADO [OK]`, '#00ff88');
      }
    }

    addLog('VARREDURA COMPLETA - NENHUMA AMEAÇA CRÍTICA DETECTADA', '#00ff88');
  };

  // Auto-scroll para o final
  useEffect(() => {
    consoleRef.current?.scrollTo(0, consoleRef.current.scrollHeight);
  }, [logs]);

  return (
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: 'rgba(0, 20, 30, 0.8)',
          color: '#00ffff',
          fontFamily: "'Courier New', monospace",
          padding: '1.5rem',
          borderRadius: '5px',
          border: '1px solid rgba(0, 255, 255, 0.3)',
          boxShadow: '0 0 30px rgba(0, 255, 255, 0.2) inset',
          position: 'relative',
          overflow: 'hidden',
          maxHeight: '500px',
          display: 'flex',
          flexDirection: 'column'
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
          linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
        `,
          backgroundSize: '30px 30px',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {/* Cabeçalho */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '1rem',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            border: '1px solid #00ffff',
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
          }}>
            <FaTerminal size={18} color="#00ffff" />
          </div>
          <h3 style={{
            margin: 0,
            fontSize: '1.5rem',
            color: '#00ffff',
            textShadow: '0 0 10px #00ffff',
            letterSpacing: '1px'
          }}>
            TERMINAL DE COMANDO
          </h3>
        </div>

        {/* Área de logs */}
        <div
          ref={consoleRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            marginBottom: '1rem',
            fontFamily: "'Courier New', monospace",
            fontSize: '0.95rem',
            lineHeight: '1.4',
            position: 'relative',
            zIndex: 1
          }}
        >
          <AnimatePresence>
            {logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: log.color,
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                <span style={{
                  color: '#00ffff',
                  marginRight: '0.5rem',
                  minWidth: '80px'
                }}>
                  [{log.time}]
                </span>
                <span>{log.msg}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input de comando */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(0, 255, 255, 0.2)',
          paddingTop: '1rem'
        }}>
          <span style={{
            color: '#00ffff',
            marginRight: '0.5rem',
            fontSize: '1.1rem'
          }}>
            &gt;
          </span>
          <input
            style={{
              flex: 1,
              background: 'transparent',
              color: '#00ffff',
              border: 'none',
              outline: 'none',
              fontFamily: "'Courier New', monospace",
              fontSize: '1rem',
              caretColor: '#00ffff',
              textShadow: '0 0 5px #00ffff'
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommand();
            }}
            placeholder={isProcessing ? "Processando..." : "Digite um comando (help para ajuda)"}
            disabled={isProcessing}
          />
        </div>

        {/* Efeitos de CSS */}
        <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 255, 0.3);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 255, 0.5);
        }
        input::placeholder {
          color: rgba(0, 255, 255, 0.5);
          text-shadow: none;
        }
      `}</style>
      </motion.div>
      );
}