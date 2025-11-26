import { MapPin, Calendar, Clock } from 'lucide-react';

function EventInfo() {
  return (
    <section id="event" className="min-h-screen flex items-center justify-center py-20 px-4 bg-striped">
      <div className="bg-white w-full max-w-2xl p-8 sm:p-12 shadow-2xl">
        <h2 className="font-vibes text-5xl sm:text-6xl text-center text-navy mb-12">
          Informacje o Wydarzeniu
        </h2>

        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Calendar className="text-orange w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-seasons text-xl sm:text-2xl text-navy font-semibold mb-2">
                Data
              </h3>
              <p className="font-seasons text-lg sm:text-xl text-navy">
                06 czerwca 2026
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="text-orange w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-seasons text-xl sm:text-2xl text-navy font-semibold mb-2">
                Godzina
              </h3>
              <p className="font-seasons text-lg sm:text-xl text-navy">
                15:00
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="text-orange w-8 h-8 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-seasons text-xl sm:text-2xl text-navy font-semibold mb-2">
                Miejsce Ceremonii i Przyjęcia
              </h3>
              <p className="font-seasons text-lg sm:text-xl text-navy mb-4">
                Sala Pod Skrzydłami Anioła<br />
                Zamkowa 31<br />
                Piekary Śląskie
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-2 border-orange pt-8">
          <h3 className="font-seasons text-xl sm:text-2xl text-navy font-semibold mb-4 text-center">
            Lokalizacja na mapie
          </h3>
          <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.497148730488!2d18.93766427640134!3d50.413208371585085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112b2e7cdcf9c7%3A0x187b51355fcd9453!2sPod%20Skrzyd%C5%82ami%20Anio%C5%82a!5e0!3m2!1spl!2spl!4v1763396357756!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokalizacja sali weselnej"
            ></iframe>
          </div>
          <p className="font-seasons text-center text-navy mt-4 italic text-sm sm:text-base">
            Kliknij na mapę, aby uzyskać wskazówki dojazdu
          </p>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;
