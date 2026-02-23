import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type FloatingNavCtaProps = {
  to: string;
  label: string;
  direction?: "forward" | "back";
};

const FloatingNavCta = ({ to, label, direction = "forward" }: FloatingNavCtaProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "fixed bottom-5 right-4 z-[70] inline-flex items-center gap-2 rounded-full",
        "bg-gradient-primary px-4 py-3 text-sm font-semibold text-white shadow-brand",
        "transition-transform duration-300 hover:scale-105 sm:bottom-8 sm:right-8 sm:text-base",
      )}
      aria-label={label}
    >
      {direction === "back" ? <ArrowLeft className="h-4 w-4" /> : null}
      <span>{label}</span>
      {direction === "forward" ? <ArrowRight className="h-4 w-4" /> : null}
    </Link>
  );
};

export default FloatingNavCta;
