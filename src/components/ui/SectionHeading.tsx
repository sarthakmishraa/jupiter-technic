import type { FC } from "react";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading: FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
}) => (
  <div className="text-center mb-16">
    <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">
      {tag}
    </span>
    <h2
      className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);
