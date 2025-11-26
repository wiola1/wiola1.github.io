import React, { useState } from 'react';

const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/u/0/d/1IMifH35lF1Iu-7UG3GiK52IZmK5aFEI6Lt4tszkh5LI/formResponse'; 

const FIELD_IDS = {
    GUESTS_COUNT: 'entry.877086558', // 1. Liczba gości (select)
    NAMES: 'entry.1498135098',       // 2. Imiona i nazwiska (textarea)
    NOTES: 'entry.2606285',    // 3. Dodatkowe uwagi (textarea)
};

function RSVP() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Inicjalizacja stanu formularza z kluczami ENTRY ID dla 3 pól
    const [formData, setFormData] = useState({
        [FIELD_IDS.GUESTS_COUNT]: '0 - nie mogę się zjawić',
        [FIELD_IDS.NAMES]: '',
        [FIELD_IDS.NOTES]: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const encodedData = new URLSearchParams();
        for (const key in formData) {
            encodedData.append(key, formData[key] as string);
        }

        try {
            await fetch(GOOGLE_FORM_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encodedData.toString(),
            });
            setIsSubmitted(true);
            
        } catch (error) {
            alert('Wystąpił błąd podczas wysyłania. Spróbuj ponownie.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
    };
    
    return (
        <section id="rsvp" className="min-h-screen flex items-center justify-center py-20 px-4 bg-striped">
            <div className="bg-white w-full max-w-2xl p-8 sm:p-12 shadow-2xl">
                <h2 className="font-vibes text-5xl sm:text-6xl text-center text-navy mb-12">
                    Potwierdzenie Przybycia
                </h2>

                <div className="text-center space-y-8">
                    
                    <div className="flex justify-center mb-8">
                        <img
                            src="/assets/image.png"
                            alt="Pomarańcz"
                            className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                        />
                    </div>
                    <div className="py-8 my-8">
                      <p className="font-seasons text-lg sm:text-2xl text-navy leading-relaxed mb-4">
                        Prosimy o informację do <span className="font-semibold text-orange">30 kwietnia</span>,<br />
                        czy się widzimy! 
                      </p>

                      <p className="font-seasons text-lg sm:text-xl text-navy leading-relaxed mb-4">
                        Możesz skorzystać z formularza lub skontaktować się z nami telefonicznie/osobiście
                      </p>
                    </div>
                    
                    {isSubmitted ? (
                        <div className="border-t-2 border-b-2 border-orange py-8 my-8">
                            <p className="font-seasons text-lg sm:text-2xl text-navy leading-relaxed mb-4">
                                Dziękujemy! Twoja odpowiedź została zapisana.<br />
                                Nie możemy się doczekać, by Was zobaczyć!
                            </p>
                            <button
                                onClick={handleReset} // Wywołanie nowej funkcji
                                className="mt-6 bg-orange text-white font-semibold py-2 px-6 rounded-full text-lg shadow-md hover:bg-opacity-80 transition duration-300"                            >
                                Wyślij ponownie
                            </button>
                        </div>
                    ) : (
                      <div className="border-t-2 border-b-2 border-orange py-8 my-8">
                        <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
                            
                            <div>
                                <label className="font-seasons text-xl text-navy block mb-2" htmlFor="guests-select">
                                    Liczba osób (wliczając siebie):
                                </label>
                                <select
                                    id="guests-select"
                                    name={FIELD_IDS.GUESTS_COUNT}
                                    value={formData[FIELD_IDS.GUESTS_COUNT]}
                                    onChange={handleChange}
                                    className="w-full p-3 border-2 border-gray-300 focus:outline-none focus:border-orange rounded-md bg-white"
                                    required
                                >
                                    <option value="1">1 osoba</option>
                                    <option value="2">2 osoby</option>
                                    <option value="3">3 osoby</option>
                                    <option value="4">4 osoby</option>
                                    <option value="0 - nie mogę się zjawić">Niestety, nie mogę/możemy się zjawić</option>
                                </select>
                            </div>
                            
                            {formData[FIELD_IDS.GUESTS_COUNT] !== '0' && (
                                <div>
                                    <label className="font-seasons text-xl text-navy block mb-2" htmlFor="names-textarea">
                                        Imiona i Nazwiska Gości:
                                    </label>
                                    <textarea
                                        id="names-textarea"
                                        name={FIELD_IDS.NAMES}
                                        value={formData[FIELD_IDS.NAMES]}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full p-3 border-2 border-gray-300 focus:outline-none focus:border-orange rounded-md resize-none"
                                        required
                                    />
                                </div>
                            )}
                            
                            {/* 3. DODATKOWE UWAGI (TEXTAREA) */}
                            <div>
                                <label className="font-seasons text-xl text-navy block mb-2" htmlFor="notes-textarea">
                                    Dodatkowe uwagi (np. alergie, prośba o nocleg):
                                </label>
                                <textarea
                                    id="notes-textarea"
                                    name={FIELD_IDS.NOTES}
                                    value={formData[FIELD_IDS.NOTES]}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full p-3 border-2 border-gray-300 focus:outline-none focus:border-orange rounded-md resize-none"
                                />
                            </div>
                            
                            {/* --- PRZYCISK WYSYŁANIA --- */}
                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-orange text-white font-semibold py-3 px-8 rounded-full text-xl shadow-lg hover:bg-opacity-90 transition duration-300 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij Potwierdzenie'}
                                </button>
                            </div>
                        </form>
                      </div>
                    )}
                    
                    <p className="font-vibes text-2xl sm:text-4xl text-navy mt-8">
                        Czekamy na Wasze odpowiedzi!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RSVP;