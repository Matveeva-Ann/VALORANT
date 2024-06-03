export default function Banner() {
  const imageUrl = '/leaderboards-hero-banner.jpg';

  const keyframesStyles = `
  @keyframes zoom {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
  }
`;

  return (
    <div className="overflow-hidden relative w-full" data-testid="banner-component">
      <div
        className="bg-cover bg-center items-end justify-center flex pb-8 animate-zoom-in"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: '50vh',
          animation: 'zoom 20s forwards linear',
        }}
      >
        <style>{keyframesStyles}</style>
      </div>
      <h2 className="text-4xl italic font-medium text-white absolute bottom-2 translate-x-2/4 right-2/4">
        LEADERBOARD VALORANT
      </h2>
    </div>
  );
}
