import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

export const Badge = ({ ...props }: BadgeProps) => {
  return (
    <div
      className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border border-gray-800 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors"
      {...props}
    />
  );
};
