
export default function Banner() {
  const imageUrl = '/leaderboards-hero-banner.jpg';

  return (
    <div
      className="bg-cover bg-center items-end justify-center flex pb-8"
      style={{ backgroundImage: `url(${imageUrl})`, height: '50vh' }}
    >
      <h2 className="text-4xl italic font-medium text-white">LEADERBOARD VALORANT</h2>
    </div>
  );
}
