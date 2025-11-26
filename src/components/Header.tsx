interface HeaderProps {
  activeSection: string;
}

function Header({ activeSection }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Start' },
    { id: 'event', label: 'Informacje' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-navy z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`font-seasons text-lg transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-orange font-semibold'
                    : 'text-white hover:text-orange'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
