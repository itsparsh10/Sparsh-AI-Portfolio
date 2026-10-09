import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface DotGridPatternProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const DotGridPattern = forwardRef<HTMLDivElement, DotGridPatternProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="dot-grid-pattern"
        className={cn(
          "relative isolate overflow-hidden bg-[#FFFCF7] [background-image:radial-gradient(circle,#e2ded7_1.2px,transparent_1.2px)] [background-size:16px_16px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DotGridPattern.displayName = "DotGridPattern";
