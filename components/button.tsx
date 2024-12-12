import { LucideIcon } from "lucide-react";

interface ButtonProps {
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  bgColor?: string;
}

export function Button({ label, icon: Icon, onClick, bgColor }: ButtonProps) {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      <div className="flex flex-row space-x-2">
        {Icon && <Icon size={24} />}
        <p>{label}</p>
      </div>
    </button>
  );
}