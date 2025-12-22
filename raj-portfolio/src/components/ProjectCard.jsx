export default function ProjectCard({ title, desc, stack, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative bg-white/5 border border-white/10
p-8 rounded-2xl transition-all hover:scale-[1.02]
active:scale-[0.98]"

    >
      <h3 className="text-xl font-semibold mb-3 text-white">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {desc}
      </p>

      <div
        className="absolute inset-0 bg-black/70
          flex items-center justify-center text-sm text-gray-300
          opacity-0 group-hover:opacity-100 transition"
      >
        {stack}
      </div>
    </button>
  );
}
