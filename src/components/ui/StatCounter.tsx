import type { FC } from "react";
import { useCounter } from "../../hooks";

interface StatCounterProps {
  end: number;
  suffix?: string;
  label: string;
  color?: string;
}

export const StatCounter: FC<StatCounterProps> = ({
  end,
  suffix = "+",
  label,
  color = "text-amber-400",
}) => {
  const [count, ref] = useCounter(end);

  return (
    <div ref={ref} className="text-center p-4 rounded-xl bg-slate-900/60">
      <div
        className={`text-4xl font-black ${color}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {count}
        {suffix}
      </div>
      <div className="text-slate-400 text-sm mt-1">{label}</div>
    </div>
  );
};
