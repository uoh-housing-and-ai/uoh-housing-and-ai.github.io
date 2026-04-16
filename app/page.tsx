import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Publications from './components/Publications';
import People from './components/People';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects preview />
        <Publications preview />
        <People preview />
      </main>
    </>
  );
}
