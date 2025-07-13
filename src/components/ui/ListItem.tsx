import React from "react";
import { cn } from "../../utils/cn";

type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn(
          "items-center bg-core-grey-4 border-b-2 border-b-core-grey-6 border-l-2 border-l-core-grey-6 shadow-[inset_-2px_2px_0_0_#817c7a] flex gap-1.5 justify-between h-12 px-3 w-full text-core-grey-1",
          className,
        )}
        {...props}
      />
    );
  },
);

ListItem.displayName = "ListItem";

export default ListItem;
