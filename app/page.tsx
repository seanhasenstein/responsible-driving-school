import ContactModalProvider from '@/components/ContactModalProvider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Faqs from '@/components/Faqs';
import Instructors from '@/components/Instructors';
import Footer from '@/components/Footer';

import styles from './page.module.css';

export default function Home() {
  return (
    <ContactModalProvider>
      <div>
        <div className={styles.background}>
          <Header />
          <Hero />
        </div>
        <Programs />
        <Faqs />
        <Instructors />
        <Footer />
      </div>
    </ContactModalProvider>
  );
}
