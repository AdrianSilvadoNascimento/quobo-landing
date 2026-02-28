import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { TermsView } from '@/views/landing/TermsView';

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <TermsView />
      <Footer />
    </main>
  );
}
