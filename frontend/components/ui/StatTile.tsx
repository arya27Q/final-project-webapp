import React from "react";
import { cn } from "../../lib/utils";

export interface StatTileProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  subValue?: React.ReactNode;
  subValueVariant?: "emerald" | "amber" | "rose" | "zinc";
}

const subVariantColors = {
  emerald: "text-[rgba(52,184,150,0.95)]",
  amber: "text-[rgba(224,154,64,0.95)]",
  rose: "text-[rgba(220,90,110,0.95)]",
  zinc: "text-zinc-400",
};

export const StatTile: React.FC<StatTileProps> = ({
  label,
  value,
  subValue,
  subValueVariant = "zinc",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-zinc-50 dark:bg-[#0d0e13] p-2.5 sm:p-3 border border-zinc-100 dark:border-zinc-800/70 transition-colors flex flex-col justify-between min-w-0",
        className
      )}
      {...props}
    >
      <span className="text-[10px] sm:text-[11px] text-zinc-400 block leading-snug break-words">{label}</span>
      <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 tabular-nums mt-0.5 sm:mt-1 block leading-snug break-words">
        {value}
      </span>
      {subValue && (
        <span
          className={cn(
            "text-[9.5px] sm:text-[10px] font-semibold tabular-nums block leading-snug mt-0.5 sm:mt-1 break-words",
            subVariantColors[subValueVariant]
          )}
        >
          {subValue}
        </span>
      )}
    </div>
  );
};
