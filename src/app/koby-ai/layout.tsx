import React from "react";

export default function KobyAiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="koby-theme-root">{children}</div>;
}
