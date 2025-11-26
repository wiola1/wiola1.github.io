import { useState, useEffect } from 'react';

function Hero() {
  const weddingDate = new Date('2026-06-06T15:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 bg-striped">
      <div className="bg-white w-full max-w-2xl p-8 sm:p-12 shadow-2xl text-center">
        <h1 className="font-vibes text-4xl sm:text-6xl text-navy mb-2">
          Wioleta Ranik
        </h1>
        <div className="text-orange text-3xl sm:text-5xl font-seasons my-4">&</div>
        <h1 className="font-vibes text-4xl sm:text-6xl text-navy mb-8">
          Kamil Klimczyk
        </h1>

        <p className="font-seasons text-navy text-base sm:text-xl mb-8 leading-relaxed">
          Z ogromną radością zapraszamy na ślub i wspólne świętowanie,<br />
          które odbędzie się
        </p>

        <div className="my-12">
          <p className="font-seasons text-2xl sm:text-4xl text-orange mb-4">06 czerwca 2026</p>
          <p className="font-seasons text-lg sm:text-2xl text-navy">o godzinie 15:00</p>
        </div>

        <div className="mt-12 border-t-2 border-orange pt-8">
          <h2 className="font-seasons text-lg sm:text-2xl text-navy font-semibold mb-8">
            Odliczanie do wielkiego dnia
          </h2>
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            <div className="bg-light-blue p-3 sm:p-4 rounded-lg">
              <div className="text-2xl sm:text-4xl font-bold text-navy">{timeLeft.days}</div>
              <div className="text-xs sm:text-sm text-navy mt-1 sm:mt-2">dni</div>
            </div>
            <div className="bg-light-blue p-3 sm:p-4 rounded-lg">
              <div className="text-2xl sm:text-4xl font-bold text-navy">{timeLeft.hours}</div>
              <div className="text-xs sm:text-sm text-navy mt-1 sm:mt-2">godzin</div>
            </div>
            <div className="bg-light-blue p-3 sm:p-4 rounded-lg">
              <div className="text-2xl sm:text-4xl font-bold text-navy">{timeLeft.minutes}</div>
              <div className="text-xs sm:text-sm text-navy mt-1 sm:mt-2">minut</div>
            </div>
            <div className="bg-light-blue p-3 sm:p-4 rounded-lg">
              <div className="text-2xl sm:text-4xl font-bold text-navy">{timeLeft.seconds}</div>
              <div className="text-xs sm:text-sm text-navy mt-1 sm:mt-2">sekund</div>
            </div>
          </div>
        </div>

        <p className="font-vibes text-2xl sm:text-3xl text-navy mt-12">
          Do zobaczenia!
        </p>
      </div>
    </section>
  );
}

export default Hero;
