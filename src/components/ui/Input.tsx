import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
}

const variants = cva([
  "font-minecraft border-2 border-solid",
  "px-3 py-2 text-white placeholder-gray-400",
  "transition-colors duration-200",
  "focus:outline-none focus:ring-0",
  "disabled:opacity-50 disabled:cursor-not-allowed",
], {
  variants: {
    variant: {
      default:
        "bg-core-grey-6 border-core-grey-3 text-core-grey-1 shadow-[inset_0_6px_0_0_rgba(0,0,0,.5)] placeholder:text-core-grey-3",
    },
  },
});

type Variants = VariantProps<typeof variants>;

export const Input = React.forwardRef<HTMLInputElement, InputProps & Variants>(
  ({ variant = "default", icon, className, ...props }, ref) => {
    if (icon) {
      return (
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-core-grey-3 pointer-events-none">
            {icon}
          </div>
          <input
            ref={ref}
            className={cn(variants({ variant }), "pl-9", className)}
            {...props}
          />
        </div>
      );
    }

    return (
      <input
        ref={ref}
        className={cn(variants({ variant }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
