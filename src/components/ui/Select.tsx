import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

const variants = cva([
  "appearance-none relative",
  "font-minecraft border-2 border-solid",
  "px-3 py-2 text-white placeholder-gray-400",
  "transition-colors duration-200",
  "focus:outline-none focus:ring-0",
  "disabled:opacity-50 disabled:cursor-not-allowed",
  "peer",
], {
  variants: {
    variant: {
      default:
        "bg-core-grey-6 border-core-grey-3 text-core-grey-1 shadow-[inset_0_6px_0_0_rgba(0,0,0,.5)]",
    },
  },
});

type Variants = VariantProps<typeof variants>;
type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & Variants;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ variant = "default", className, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(variants({ variant }), className)}
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none size-6 [background-image:var(--select-down-arrow)] peer-open:rotate-180" />
      </div>
    );
  },
);

Select.displayName = "Select";
