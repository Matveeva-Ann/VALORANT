'use client';

import PlayerCard from '@/app/components/PlayerCard';
import { useGetPlayerQuery } from '@/redux/leaders';
import Link from 'next/link';
import React from 'react';
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const {data, error} = useGetPlayerQuery(params.id);
  const logo = '/radiant-badge.png';


  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  gsap.registerPlugin(ScrollToPlugin);

  function scrollTo(target: any) {
    gsap.to(window, { duration: 1, scrollTo: target });
  }


  return (
    <div className='min-h-screen' style={{ backgroundColor: '#ff4655' }}>
       <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
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
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1800,
              },
              value: 150,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <Link className="inline-block" href={'/'}>
        <img className='p-8' src={logo} alt="logo"/>
      </Link>
      <div className="flex items-center justify-center" >
        {!error && data && <PlayerCard playerData={data}></PlayerCard>}
      </div>
    </div>
  );
}
