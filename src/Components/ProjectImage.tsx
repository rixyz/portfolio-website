import { useState } from "react";

/**
 * Renders a project image, falling back to a labelled placeholder box when
 * there is no source or the image fails to load (e.g. GitHub's Open Graph
 * service rate-limiting with a 429).
 */
export function ProjectImage({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="mb-4 w-full h-48 rounded-lg bg-[#383838] flex items-center justify-center overflow-hidden">
        <div className="text-gray-300 text-xl font-bold">{name}</div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      loading="lazy"
      decoding="async"
      className="mb-4 rounded-lg"
      onError={() => setFailed(true)}
    />
  );
}
