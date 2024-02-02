import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
// import { tsParticles } from "tsparticles";
import { loadFull as tsParticlesLoadFull } from "tsparticles";


export const ParticlesConfig = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // You can directly initialize the particles engine with options
    tsParticlesLoadFull("tsparticles", {
      preset: "fountain",
      // other options...
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {};

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};
