const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
};

export default function Navbar() {
  const items = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
        bg-white/10 backdrop-blur-md border border-white/10
        px-6 py-3 rounded-full flex gap-6 text-white text-sm shadow-lg"
    >
      {items.map(({ label, id }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="hover:text-indigo-400 transition"
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
