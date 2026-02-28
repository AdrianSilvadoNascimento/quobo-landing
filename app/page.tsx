import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { HomeView } from '@/views/landing/HomeView';

export default function Page() {
  return (
    <main>
      <Navbar />
      <HomeView />
      <Footer />
    </main>
  );
}
