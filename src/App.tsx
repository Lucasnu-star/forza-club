import Nav from './components/Nav';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import DangerTape from './components/DangerTape';
import Hero from './sections/Hero';
import Club from './sections/Club';
import Classes from './sections/Classes';
import Trainers from './sections/Trainers';
import Plans from './sections/Plans';
import Location from './sections/Location';
import CtaBand from './sections/CtaBand';
import Footer from './sections/Footer';

function App() {
  return (
    <div style={{ background: 'var(--color-bg)', width: '100%', overflowX: 'hidden' }}>
      <FloatingWhatsApp />
      <Nav />
      <Hero />
      <DangerTape height={16} />
      <Club />
      <Classes />
      <Trainers />
      <Plans />
      <Location />
      <CtaBand />
      <Footer />
    </div>
  );
}

export default App;
