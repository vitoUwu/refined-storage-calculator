import { cn } from "@/utils/cn";

interface SwitchProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md";
}

export function Switch(
  { label, checked = false, onChange, size = "md" }: SwitchProps,
) {
  const sizeClasses = {
    sm: "w-12 h-6.5",
    md: "w-15 h-8.5",
  };

  const trackClasses = {
    sm: "h-5.5",
    md: "h-7",
  };

  const iconClasses = {
    sm: "h-2.5",
    md: "h-3",
  };

  return (
    <div className="flex items-center gap-2 mt-1">
      <button
        id="switch"
        role="switch"
        className={cn(
          "bg-transparent border-none cursor-pointer flex relative",
          sizeClasses[size],
        )}
        onClick={() => {
          const newChecked = !checked;
          onChange?.(newChecked);
        }}
      >
        <span
          className={cn(
            "w-full bg-core-grey-2 border-2 border-core-grey-6 mt-auto relative",
            trackClasses[size],
            checked
              ? "bg-vanilla-green-5 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.2)]"
              : "shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]",
          )}
        >
          <span
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              checked
                ? "content-[url(/icons/i.svg)] left-2.5 text-core-grey-1"
                : "content-[url(/icons/o.svg)] right-2 text-core-grey-3",
              iconClasses[size],
            )}
          />
        </span>
        <span
          className={cn(
            "absolute bottom-0 w-[53%] h-full bg-core-grey-2 flex flex-col items-center justify-center border-2 border-core-grey-6",
            checked ? "right-0" : "left-0",
          )}
        >
          <span className="w-full h-full shadow-[inset_0_0_0_2px_rgba(255,255,255,0.5)]">
          </span>
          <span className="w-full h-1 bg-core-grey-4"></span>
        </span>
      </button>
      <label
        htmlFor="switch"
        id="labelSwitch"
        className="text-core-grey-1 text-sm font-medium mt-1"
      >
        {label}
      </label>
    </div>
  );
}
