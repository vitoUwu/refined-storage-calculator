import React from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-core-grey-5",
        "shadow-[inset_0_4px_0_0_hsla(0,0%,100%,.2),inset_0_-4px_0_0_rgba(0,0,0,.32),inset_-4px_0_0_0_hsla(0,0%,100%,.16)]",
        "relative",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div
      className={cn(
        "p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn("p-4", className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div
      className={cn(
        "p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
