import { ReactNode } from "react";
import "./styles.css";

export default function NCDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="attio-clone">
      {children}
    </div>
  );
}
