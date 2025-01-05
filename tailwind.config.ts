import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        donationBg: '#FFFAEA',
        progressiveBar: '#839758',
        progressiveText: '#8D7525'
      },
    },
  },
  plugins: [],
} satisfies Config;
