import React, { useEffect } from "react";
import { cn } from "../../utils/cn";
import { Button } from "./Button";
import { Card } from "./Card";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  size = "lg",
  closeOnBackdrop = true,
  showCloseButton = true,
  className,
  children,
}: ModalProps) {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw] max-h-[95vh]",
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnBackdrop) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={handleBackdropClick}
    >
      <Card
        className={cn(
          "w-full font-minecraft",
          "max-h-[90vh] overflow-hidden",
          sizes[size],
          className,
        )}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-4">
            {title && (
              <h2 className="text-xl font-medium text-white">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <Button
                variant="danger"
                size="sm"
                onClick={onClose}
                className="ml-auto size-10"
              >
                ✕
              </Button>
            )}
          </div>
        )}

        <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
          {children}
        </div>
      </Card>
    </div>
  );
}

interface ModalHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function ModalHeader({ className, children }: ModalHeaderProps) {
  return (
    <div
      className={cn(
        "p-4 border-b-2 border-gray-600",
        "bg-gradient-to-b from-gray-600 to-gray-700",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface ModalContentProps {
  className?: string;
  children: React.ReactNode;
}

export function ModalContent({ className, children }: ModalContentProps) {
  return (
    <div className={cn("p-4", className)}>
      {children}
    </div>
  );
}

interface ModalFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function ModalFooter({ className, children }: ModalFooterProps) {
  return (
    <div
      className={cn(
        "p-4 border-t-2 border-gray-600",
        "bg-gradient-to-b from-gray-700 to-gray-800",
        "flex items-center justify-end space-x-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
