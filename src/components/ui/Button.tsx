import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-opacity duration-75 cursor-pointer select-none border-2 border-vanilla-grey-6",
  {
    variants: {
      variant: {
        primary:
          "bg-vanilla-green-5 hover:bg-[#367723] text-white shadow-[inset_0_-6px_0_var(--color-vanilla-green-6),inset_0_6px_0_var(--color-vanilla-green-4)] active:shadow-none",
        secondary:
          "bg-vanilla-grey-2 hover:bg-vanilla-grey-2/80 text-vanilla-grey-6 shadow-[inset_0_.375rem_0_0_var(--color-vanilla-grey-1),inset_0_-.375rem_0_0_var(--color-vanilla-grey-3)] active:shadow-none",
        danger:
          "bg-dungeons-red-5 hover:bg-[#99211f] text-white shadow-[inset_0_-6px_0_var(--color-dungeons-red-6),inset_0_6px_0_var(--color-dungeons-red-4)] active:shadow-none",
        success:
          "bg-vanilla-green-5 hover:bg-[#367723] text-white shadow-[inset_0_-6px_0_var(--color-vanilla-green-6),inset_0_6px_0_var(--color-vanilla-green-4)] active:shadow-none",
        blue:
          "bg-vanilla-blue-5 hover:bg-vanilla-blue-5/90 text-white shadow-[inset_0_-6px_0_var(--color-vanilla-blue-6),inset_0_6px_0_var(--color-vanilla-blue-4)] active:shadow-none",
        realms:
          "bg-realms-deep-blue-3 hover:bg-realms-deep-blue-3/90 text-white shadow-[inset_0_-6px_0_var(--color-realms-deep-blue-4),inset_0_6px_0_var(--color-realms-deep-blue-2)] active:shadow-none",
      },
      size: {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  children,
  disabled,
  type = "button",
  ...props
}: ButtonProps & ButtonVariants) {
  const baseClasses = buttonVariants({ variant, size });

  return (
    <button
      className={cn(baseClasses, className)}
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {isLoading
        ? (
          <div className="flex items-center space-x-21">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-sm animate-spin" />
            <span>Carregando...</span>
          </div>
        )
        : children}
    </button>
  );
}
