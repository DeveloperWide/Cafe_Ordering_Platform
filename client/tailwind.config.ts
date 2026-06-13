import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        restaurant: {
          primary: "#2563eb",
          secondary: "#7c3aed",
          background: "#f8fafc",
          surface: "#ffffff",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
          text: {
            DEFAULT: "#111827",
            muted: "#6b7280",
          },
          border: "#e5e7eb",
        },
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
} satisfies Config;
