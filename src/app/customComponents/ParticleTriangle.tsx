import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadTrianglesPreset } from "@tsparticles/preset-triangles";


const ParticleTriangle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadTrianglesPreset(engine); // <-- load triangles preset
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      preset: "triangles",   // base preset

      /* -------------------------------
       CUSTOM OVERRIDES START HERE ↓↓
      --------------------------------*/

      background: {
        color: { value: "#fff" },
      },

      particles: {
        number: {
          value: 140,
          density: { enable: true, area: 800 },
        },

        color: {
          // value: ["#0077b6", "#03045E", "#00B4D8"], // multiple custom colors
          value: ["#1E3A8A", "#2563EB", "#60A5FA"], // multiple custom colors
        },

        shape: {
          type: "triangle",  // ensure triangles
        },

        opacity: {
          value: 0.7,
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.3,
          },
        },

        size: {
          value: { min: 2, max: 6 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 2,
          },
        },

        links: {
          enable: true,
          distance: 120,
          opacity: 0.8,
          width: 1,
          color: "#32FA01",
        },

        move: {
          enable: true,
          speed: 2,
          direction: MoveDirection.none,
          outModes: { default: OutMode.out },
        },
      },

      interactivity: {
        events: {
          onHover: {
            enable: true,
             mode: ["repulse", "bubble"], // repulse | push | grab | bubble
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: { quantity: 3 },
          repulse: { distance: 150, duration: 0.4 },
          grab: { distance: 180 },
        },
      },

      detectRetina: true,
    }
    // {
    //   preset: "triangles",
    //   background: {
    //     color: {
    //       // value: "#0d47a1",
    //       value: "#ffffff",
    //     },
    //   },
    //   fpsLimit: 120,
    //   interactivity: {
    //     events: {
    //       onClick: {
    //         enable: true,
    //         mode: "push",
    //       },
    //       onHover: {
    //         enable: true,
    //         mode: "repulse",
    //       },
    //     },
    //     modes: {
    //       push: {
    //         quantity: 4,
    //       },
    //       repulse: {
    //         distance: 200,
    //         duration: 0.4,
    //       },
    //     },
    //   },
    //   particles: {
    //     color: {
    //       // value: "#ffffff",
    //       value: "#03045E",
    //     },
    //     links: {
    //       // color: "#ffffff",
    //       color: "#03045E",
    //       distance: 150,
    //       enable: true,
    //       opacity: 0.5,
    //       width: 1,
    //     },
    //     move: {
    //       direction: MoveDirection.none,
    //       enable: true,
    //       outModes: {
    //         default: OutMode.out,
    //       },
    //       random: false,
    //       speed: 6,
    //       straight: false,
    //     },
    //     number: {
    //       density: {
    //         enable: true,
    //       },
    //       value: 100,
    //     },
    //     opacity: {
    //       value: 0.5,
    //     },
    //     shape: {
    //       type: "circle",
    //     },
    //     size: {
    //       value: { min: 1, max: 5 },
    //     },
    //   },
    //   detectRetina: true,
    // }
  ),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticleTriangle;
