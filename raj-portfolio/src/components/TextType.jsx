import { useEffect, useMemo, useState } from "react";

export default function TextType({
  texts = [],
  className = "",
  cursorClassName = "",
  typingSpeedMs = 60,
  deletingSpeedMs = 35,
  pauseMs = 1100,
  loop = true,
  showCursor = true,
  cursorChar = "|",
}) {
  const items = useMemo(() => texts.filter(Boolean), [texts]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const current = items[index % items.length];

    const tick = () => {
      if (!deleting) {
        const next = current.slice(0, value.length + 1);
        setValue(next);
        if (next === current) setDeleting(true);
        return;
      }

      const next = current.slice(0, Math.max(0, value.length - 1));
      setValue(next);
      if (next.length === 0) {
        setDeleting(false);
        const nextIndex = index + 1;
        if (!loop && nextIndex >= items.length) return;
        setIndex(nextIndex);
      }
    };

    const delay =
      !deleting && value === current
        ? pauseMs
        : deleting
          ? deletingSpeedMs
          : typingSpeedMs;

    const timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [
    deleting,
    deletingSpeedMs,
    index,
    items,
    loop,
    pauseMs,
    typingSpeedMs,
    value,
  ]);

  return (
    <span className={className}>
      {value}
      {showCursor ? (
        <span className={cursorClassName} aria-hidden="true">
          {cursorChar}
        </span>
      ) : null}
    </span>
  );
}
