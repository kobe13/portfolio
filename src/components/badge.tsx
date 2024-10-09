import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Badge({ ...props }: BadgeProps) {
  return (
    <div
      className="bg-black inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold border-transparent text-zinc-50 shadow hover:bg-primary/80"
      {...props}
    />
  );
}
