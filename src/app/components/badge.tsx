import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

export const Badge = ({ ...props }: BadgeProps) => {
  return (
    <div
      className="bg-gray-900 text-white inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-gray-800 hover:bg-gray-800 transition-colors"
      {...props}
    />
  );
};
