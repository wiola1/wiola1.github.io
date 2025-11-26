import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventInfo from './components/EventInfo';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import PasswordGate from './components/PasswordGate';
import { useTapSequence } from './themes/useTapSequence';
import { ThemeProvider, useTheme } from './themes/ThemeContext'; 

function AppContent() {
  const [unlocked, setUnlocked] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { handleTap, sequenceComplete, resetSequence } = useTapSequence();
  const { currentVars, toggleSecretTheme } = useTheme(); 

  useEffect(() => {
    const isUnlocked = localStorage.getItem('weddingUnlocked') === 'true';
    setUnlocked(isUnlocked);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'event', 'rsvp', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (sequenceComplete) {
      toggleSecretTheme();
      console.log('Tryb Polonia Bytom dez/aktywowany!');
      resetSequence();
    }
  }, [sequenceComplete, toggleSecretTheme]);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-striped" style={currentVars} onClick={handleTap}>
      <Header activeSection={activeSection} />
      <Hero />
      <EventInfo />
      <RSVP />
      <Contact />
    </div>
  );
}

function App() {
    return (
        <ThemeProvider>
            <AppContent />
        </ThemeProvider>
    );
}

export default App;