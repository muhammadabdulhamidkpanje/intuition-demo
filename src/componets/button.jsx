// src/components/ui/button.jsx
import React from "react";
import clsx from "clsx";

export function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-xl font-medium transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
