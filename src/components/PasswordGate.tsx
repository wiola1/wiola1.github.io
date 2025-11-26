import { useState } from 'react';
import { Lock } from 'lucide-react';

interface PasswordGateProps {
  onUnlock: () => void;
}

function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const encodedPassword = 'S2xpbWN6eWtpMDYwNjI2';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const inputEncoded = btoa(new TextEncoder().encode(password).reduce((data, byte) => data + String.fromCharCode(byte), ''));

    if (inputEncoded === encodedPassword) {
      localStorage.setItem('weddingUnlocked', 'true');
      onUnlock();
    } else {
      setError('Niepoprawne hasło. Spróbuj ponownie.');
      setPassword('');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-striped flex items-center justify-center px-4">
      <div className="bg-white max-w-md w-full p-8 sm:p-12 shadow-2xl">
        <div className="flex justify-center mb-8">
          <Lock className="w-16 h-16 text-orange" />
        </div>

        <h1 className="font-vibes text-5xl sm:text-6xl text-center text-navy mb-2">
          Wioleta
        </h1>
        <div className="text-orange text-4xl sm:text-5xl font-seasons text-center my-4">
          &
        </div>
        <h1 className="font-vibes text-5xl sm:text-6xl text-center text-navy mb-8">
          Kamil
        </h1>

        <p className="font-seasons text-center text-navy text-base sm:text-lg mb-8 leading-relaxed">
          Aby wejść na stronę, wpisz hasło z zaproszenia
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e as any);
                }
              }}
              placeholder="Wpisz hasło..."
              className="w-full px-4 py-3 border-2 border-light-blue rounded-lg font-seasons text-navy placeholder-navy placeholder-opacity-50 focus:outline-none focus:border-orange transition-colors"
              disabled={loading}
            />
          </div>

          {error && (
            <p className="text-orange font-seasons text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-navy text-white font-vibes text-lg py-3 rounded-lg hover:bg-orange transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Sprawdzam...' : 'Wejdź na stronę'}
          </button>
        </form>

        <p className="font-seasons text-center text-navy text-xs sm:text-sm mt-6 opacity-70">
          Wioleta & Kamil • 06.06.2026
        </p>
      </div>
    </div>
  );
}

export default PasswordGate;
