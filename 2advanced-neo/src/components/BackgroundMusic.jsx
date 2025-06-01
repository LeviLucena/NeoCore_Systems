// src/components/BackgroundMusic.jsx
import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playMusic = () => {
      audio.volume = 0.3; // volume inicial (30%)
      audio.loop = true;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("🎵 Música de fundo iniciada");
          })
          .catch((error) => {
            console.warn("🔇 Autoplay bloqueado pelo navegador:", error);
          });
      }
    };

    // Alguns navegadores exigem interação do usuário antes de tocar som
    window.addEventListener("click", playMusic, { once: true });

    return () => {
      window.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio ref={audioRef} src="/sounds/loading-music.mp3" />
  );
}
