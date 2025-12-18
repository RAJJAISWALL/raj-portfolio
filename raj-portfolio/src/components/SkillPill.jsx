export default function SkillPill({ label }) {
    return (
      <span
        className="px-4 py-2 rounded-full text-sm
        bg-white/5 border border-white/10
        text-gray-300 hover:border-indigo-400
        transition"
      >
        {label}
      </span>
    );
  }
  