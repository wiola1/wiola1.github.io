import { Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 bg-striped">
      <div className="bg-white w-full max-w-2xl p-8 sm:p-12 shadow-2xl">
        <h2 className="font-vibes text-5xl sm:text-6xl text-center text-navy mb-12">
          Kontakt
        </h2>

        <div className="space-y-8">
          <div className="text-center">
            <p className="font-seasons text-base sm:text-xl text-navy mb-8 leading-relaxed">
              W razie pytań lub wątpliwości, prosimy o kontakt:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-light-blue p-6 sm:p-8 rounded-lg text-center">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-orange mx-auto mb-4" />
              <h3 className="font-vibes text-3xl sm:text-4xl text-navy mb-4">Wiola</h3>
              <a
                href="tel:518844906"
                className="font-seasons text-lg sm:text-2xl text-navy hover:text-orange transition-colors duration-300 block"
              >
                518-844-906
              </a>
            </div>

            <div className="bg-light-blue p-6 sm:p-8 rounded-lg text-center">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-orange mx-auto mb-4" />
              <h3 className="font-vibes text-3xl sm:text-4xl text-navy mb-4">Kamil</h3>
              <a
                href="tel:725940554"
                className="font-seasons text-lg sm:text-2xl text-navy hover:text-orange transition-colors duration-300 block"
              >
                725-940-554
              </a>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t-2 border-orange">
            <p className="font-vibes text-2xl sm:text-3xl text-navy">
              Nie możemy się doczekać,<br />
              aby świętować z Wami!
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-300 text-center">
          <p className="font-seasons text-xs sm:text-sm text-navy italic">
            Wioleta & Kamil • 06.06.2026
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
