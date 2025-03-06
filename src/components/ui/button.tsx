import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50 btn-hover",
  {
    variants: {
      variant: {
        default: "bg-cyan-600 text-white hover:bg-cyan-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-600",
        secondary: "bg-slate-800 text-slate-200 hover:bg-slate-700",
        ghost: "hover:bg-slate-800/50 hover:text-white",
        link: "text-cyan-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-7 px-3 py-1 text-xs",
        sm: "h-6 rounded-md px-2 text-[10px]",
        lg: "h-8 rounded-md px-6 text-xs",
        icon: "h-7 w-7",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
