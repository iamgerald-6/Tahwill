import { cn } from "@/src/utils/utils";
import { Loader } from "@mantine/core";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "font-semibold text-sm rounded-md disabled:cursor-not-allowed flex items-center justify-center dark:border-0",
  {
    variants: {
      variant: {
        primary: "bg-primary-100 text-white disabled:bg-opacity-50",
        outline:
          "border border-primary-100 text-primary bg-white dark:bg-grey-400 dark:text-green-100 ",
        warning: "bg-red-500 text-white",
        filter: "border border-dashed bg-white border-gray-300 font-medium",
        ghost:
          "border-0 bg-white text-black text-sm font-medium hover:bg-gray-100 shadow-none",
      },
      size: {
        primary: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "primary",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, size, variant, loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ size, variant }), className)} // className applied last
        {...props}
      >
        {loading ? (
          <Loader color={variant === "primary" ? "white" : "blue"} size="sm" />
        ) : (
          children
        )}
      </button>
    );
  }
);

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
