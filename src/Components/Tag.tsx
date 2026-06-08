import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block dark:bg-gray-500 bg-[#1e1e1f] rounded-full px-2 py-1 mr-1 mt-1">
      {children}
    </span>
  );
}
