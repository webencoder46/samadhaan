import { ReactNode } from "react";
import Icon, { IconName } from "./Icon";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`logo ${inverse ? "logo-inverse" : ""}`}>
      <span className="logo-mark">S</span>
      <span>SAMADHAAN<sup>™</sup></span>
    </div>
  );
}

export function Button({
  children, variant = "primary", icon, full = false, type = "button", onClick, disabled = false
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  icon?: IconName;
  full?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button 
      type={type} 
      className={`btn btn-${variant} ${full ? "btn-full" : ""}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "accent" | "success" | "warning" | "danger" | "dark" }) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}

export function Title({ as = "h2", children, className = "" }: { as?: "h1" | "h2" | "h3"; children: ReactNode; className?: string }) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
