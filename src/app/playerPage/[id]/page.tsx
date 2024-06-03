'use client';

import PlayerCard from '@/app/components/PlayerCard';
import { useGetPlayerQuery } from '@/redux/leaders';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useCallback } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { data, error, isLoading } = useGetPlayerQuery(params.id);
  const logo = '/radiant-badge.png';

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  gsap.registerPlugin(ScrollToPlugin);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f1923' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'mode',
              },
              onHover: {
                enable: true,
                mode: 'grab',
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
              value: '#ff4655',
            },
            links: {
              color: '#ff4655',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
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
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <Link className="inline-block" href={'/'}>
        <img className="p-8" src={logo} alt="logo" />
      </Link>
      <div className="flex items-center justify-center">
        {isLoading && (
          <div
            style={{ minHeight: '50vh' }}
            className="w-8/12 z-10 rounded-lg bg-white p-6 pt-2 border-solid border-1 shadow-md"
          ></div>
        )}
        {!error && !isLoading && data && <PlayerCard playerData={data}></PlayerCard>}
      </div>
    </div>
  );
}
