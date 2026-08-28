"use client";
import { ReactNode } from "react";

export default function PrintButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <button onClick={() => window.print()} className={className}>
      {children}
    </button>
  );
}
