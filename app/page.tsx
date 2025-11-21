import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  );
}


