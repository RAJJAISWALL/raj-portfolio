export default function Section({ children, id }) {
    return (
      <section
        id={id}
        className="
          w-screen min-h-screen
          flex items-center justify-center
          px-6
        "
      >
        {children}
      </section>
    );
  }
  
