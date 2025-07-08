import HeroBanner from '@/components/Banner';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className='min-h-screen bg-black font-sans'>
      <Navbar />
      <HeroBanner />
    </div>
  );
}
