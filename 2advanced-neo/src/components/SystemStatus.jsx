import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart, AreaChart, BarChart, ComposedChart, RadarChart, Radar, PolarGrid, PolarAngleAxis,
  Line, Area, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell
} from 'recharts';
import { FaServer, FaShieldAlt, FaSatellite, FaThermometerHalf, FaBolt, FaCloud } from 'react-icons/fa';

// Efeito de gradiente para os gráficos
const gradientColors = {
  system: ['#00ffff', '#0088ff'],
  reactor: ['#ff00ff', '#cc00ff'],
  cloud: ['#00ff88', '#00cc66'],
  satellite: ['#ffaa00', '#ff6600'],
  security: ['#ff3333', '#cc0000'],
  thermal: ['#33aaff', '#0066ff']
};

const generateRandom = (prev = 90, min = 70, max = 100) => {
  const variation = Math.floor(Math.random() * 11) - 5;
  return Math.max(min, Math.min(max, prev + variation));
};

const getCurrentTimeLabel = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const useLiveData = (initial, min, max, color) => {
  const [data, setData] = useState([{ name: getCurrentTimeLabel(), value: initial }]);

  useEffect(() => {
    const interval = setInterval(() => {
      const last = data[data.length - 1]?.value || initial;
      const newVal = generateRandom(last, min, max);
      const newData = [...data, { name: getCurrentTimeLabel(), value: newVal }];
      if (newData.length > 8) newData.shift();
      setData(newData);
    }, 2500);
    return () => clearInterval(interval);
  }, [data]);

  return { data, color };
};

// RadarChart de Segurança
const securitySectors = [
  'FIREWALL',
  'IDS/IPS',
  'AUTH',
  'CRYPTO',
  'MONITOR',
  'BACKUP'
];

const useRadarLiveData = () => {
  const [data, setData] = useState(
    securitySectors.map((subject) => ({
      subject,
      A: Math.floor(Math.random() * 11) + 90,
      fullMark: 100,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = data.map((item) => ({
        ...item,
        A: Math.max(85, Math.min(100, item.A + (Math.floor(Math.random() * 7) - 3))),
    }));
      setData(updated);
    }, 3500);
    return () => clearInterval(interval);
  }, [data]);

  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          backgroundColor: 'rgba(0, 20, 40, 0.9)',
          border: '1px solid #00ffff',
          borderRadius: '5px',
          padding: '12px',
          color: '#00ffff',
          fontFamily: "'Courier New', monospace",
          backdropFilter: 'blur(5px)',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold' }}>⏱️ {label}</p>
        <p style={{ margin: '5px 0 0', color: payload[0].color }}>
          {payload[0].name}: <strong>{payload[0].value}</strong>
        </p>
      </motion.div>
    );
  }
  return null;
};

const PanelWrapper = ({ title, color, icon, children }) => {
  const IconComponent = icon;
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: 'rgba(0, 20, 40, 0.6)',
        padding: '1.5rem',
        borderRadius: '8px',
        border: `1px solid ${color}`,
        color: color,
        fontFamily: "'Courier New', monospace",
        marginBottom: '2rem',
        boxShadow: `0 0 25px ${color}33`,
        backdropFilter: 'blur(5px)',
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
        background: `linear-gradient(45deg, transparent, ${color}10, transparent)`,
        pointerEvents: 'none'
      }} />

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
          backgroundColor: `${color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '1rem',
          border: `1px solid ${color}`,
          boxShadow: `0 0 15px ${color}33`
        }}>
          <IconComponent size={20} />
        </div>
        <h3 style={{ 
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          textShadow: `0 0 10px ${color}`
        }}>
          {title}
        </h3>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        {children}
      </ResponsiveContainer>
    </motion.div>
  );
};

export default function NeoCoreDashboard() {
  const system = useLiveData(94, 85, 100, gradientColors.system);
  const reactor = useLiveData(82, 75, 90, gradientColors.reactor);
  const cloud = useLiveData(88, 70, 95, gradientColors.cloud);
  const satellites = useLiveData(14, 10, 18, gradientColors.satellite);
  const security = useRadarLiveData();
  const thermal = useLiveData(38, 32, 42, gradientColors.thermal);

  return (
    <div style={{
      padding: '3rem',
      background: `
        radial-gradient(circle at 20% 30%, rgba(0, 40, 80, 0.8) 0%, rgba(0, 10, 30, 0.9) 70%),
        linear-gradient(to right, #000a1a, #001a2a)
      `,
      position: 'relative',
      overflow: 'hidden'
    }}>
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
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#00ffff',
          textShadow: '0 0 15px #00ffff',
          fontFamily: "'Courier New', monospace",
          letterSpacing: '2px',
          position: 'relative'
        }}
      >
        <span style={{
          background: 'linear-gradient(90deg, #00ffff, #00aaff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          NEO CORE DASHBOARD
        </span>
        <div style={{
          width: '150px',
          height: '3px',
          background: 'linear-gradient(90deg, #00ffff, transparent)',
          margin: '0.5rem auto 0',
          animation: 'underlinePulse 3s infinite'
        }} />
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Status do Sistema */}
        <PanelWrapper title="STATUS DO SISTEMA" color="#00ffff" icon={FaServer}>
          <LineChart data={system.data}>
            <defs>
              <linearGradient id="systemGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={system.color[0]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={system.color[1]} stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              stroke="#00ffff88" 
              tick={{ fill: '#00ffff' }}
            />
            <YAxis 
              stroke="#00ffff88" 
              domain={[80, 100]} 
              tick={{ fill: '#00ffff' }}
            />
            <CartesianGrid stroke="#00ffff22" strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="url(#systemGradient)" 
              strokeWidth={3} 
              dot={{ fill: '#00ffff', strokeWidth: 2, r: 4 }}
              activeDot={{ fill: '#00ffff', stroke: '#00ffff', strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </PanelWrapper>

        {/* Reator Central */}
        <PanelWrapper title="REATOR CENTRAL" color="#ff00ff" icon={FaBolt}>
          <AreaChart data={reactor.data}>
            <defs>
              <linearGradient id="reactorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={reactor.color[0]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={reactor.color[1]} stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#ff00ff88" tick={{ fill: '#ff00ff' }} />
            <YAxis stroke="#ff00ff88" domain={[70, 95]} tick={{ fill: '#ff00ff' }} />
            <CartesianGrid stroke="#ff00ff22" strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="url(#reactorGradient)" 
              fill="url(#reactorGradient)" 
              strokeWidth={2}
            />
          </AreaChart>
        </PanelWrapper>

        {/* Nuvem de Processamento */}
        <PanelWrapper title="NUVEM DE DADOS" color="#00ff88" icon={FaCloud}>
          <BarChart data={cloud.data}>
            <defs>
              <linearGradient id="cloudGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={cloud.color[0]} stopOpacity={1} />
                <stop offset="95%" stopColor={cloud.color[1]} stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#00ff8888" tick={{ fill: '#00ff88' }} />
            <YAxis stroke="#00ff8888" domain={[60, 100]} tick={{ fill: '#00ff88' }} />
            <CartesianGrid stroke="#00ff8822" strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="url(#cloudGradient)" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            >
              {cloud.data.map((entry, index) => (
                <Cell key={`cell-${index}`} stroke={cloud.color[0]} strokeWidth={1} />
              ))}
            </Bar>
          </BarChart>
        </PanelWrapper>

        {/* Satélites Ativos */}
        <PanelWrapper title="SATÉLITES ATIVOS" color="#ffaa00" icon={FaSatellite}>
          <ComposedChart data={satellites.data}>
            <XAxis dataKey="name" stroke="#ffaa0088" tick={{ fill: '#ffaa00' }} />
            <YAxis stroke="#ffaa0088" domain={[8, 20]} tick={{ fill: '#ffaa00' }} />
            <CartesianGrid stroke="#ffaa0022" strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="#ffaa0066" 
              barSize={20}
              radius={[4, 4, 0, 0]}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#ffaa00" 
              strokeWidth={2} 
              dot={{ fill: '#ffaa00', strokeWidth: 2, r: 4 }}
            />
          </ComposedChart>
        </PanelWrapper>

        {/* Segurança do Sistema */}
        <PanelWrapper title="SEGURANÇA CIBERNÉTICA" color="#ff3333" icon={FaShieldAlt}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={security}>
            <PolarGrid stroke="#ff333322" radialLines={false} />
            <PolarAngleAxis 
              dataKey="subject" 
              stroke="#ff3333" 
              tick={{ fill: '#ff3333' }}
            />
            <Radar 
              name="Segurança" 
              dataKey="A" 
              stroke="#ff3333" 
              fill="#ff3333" 
              fillOpacity={0.4} 
              strokeWidth={2}
            />
            <Tooltip 
              content={<CustomTooltip />} 
              wrapperStyle={{ zIndex: 100 }}
            />
          </RadarChart>
        </PanelWrapper>

        {/* Variação Térmica */}
        <PanelWrapper title="VARIAÇÃO TÉRMICA (°C)" color="#33aaff" icon={FaThermometerHalf}>
          <LineChart data={thermal.data}>
            <defs>
              <linearGradient id="thermalGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={thermal.color[0]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={thermal.color[1]} stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#33aaff88" tick={{ fill: '#33aaff' }} />
            <YAxis stroke="#33aaff88" domain={[30, 45]} tick={{ fill: '#33aaff' }} />
            <CartesianGrid stroke="#33aaff22" strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="url(#thermalGradient)" 
              strokeWidth={3} 
              dot={{ fill: '#33aaff', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </PanelWrapper>
      </div>

      {/* Efeitos de CSS */}
      <style>{`
        @keyframes underlinePulse {
          0% { opacity: 0.3; width: 50px; }
          50% { opacity: 1; width: 150px; }
          100% { opacity: 0.3; width: 50px; }
        }
      `}</style>
    </div>
  );
}