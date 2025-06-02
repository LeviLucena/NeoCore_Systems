import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import QuantumNetwork from './components/QuantumNetwork'; // Novo componente
import SystemStatus from './components/SystemStatus';
import CyberThreats from './components/CyberThreats';
import CommandConsole from './components/CommandConsole';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';
import SatelliteControl from "./components/SatelliteControl";
import BackgroundMusic from "./components/BackgroundMusic";

export default function App() {
  const [loading, setLoading] = useState(true);

  function MainDashboard() {
    return (
      <div className="app">
        <BackgroundParticles />
        <Header />
        <Hero />
        <Features />
        <QuantumNetwork /> {/* Adicionado aqui */}
        <SatelliteControl />
        <SystemStatus />
        <CyberThreats />
        <CommandConsole />
        <Footer />
      </div>
    );
  }

  return (
    <>
      <BackgroundMusic />
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <MainDashboard />
      )}
    </>
  );
}
