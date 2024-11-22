/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          sunsetBlaze: "hsl(var(--primary-sunset-blaze))",
          hibiscus: "hsl(var(--primary-hibiscus))",
          tint: {
            80: "hsl(var(--primary-sunset-tint-80))",
            60: "hsl(var(--primary-sunset-tint-60))",
            40: "hsl(var(--primary-sunset-tint-40))",
            20: "hsl(var(--primary-sunset-tint-20))",
          },
          gradient: "var(--gradient-primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          sage: "hsl(var(--secondary-sage))",
          summerBreeze: "hsl(var(--secondary-summer-breeze))",
          plum: "hsl(var(--secondary-plum))",
          charcoal: "hsl(var(--secondary-charcoal))",
          tint: {
            sage: {
              80: "hsl(var(--secondary-sage-tint-80))",
              60: "hsl(var(--secondary-sage-tint-60))",
              40: "hsl(var(--secondary-sage-tint-40))",
            },
            summerBreeze: {
              80: "hsl(var(--secondary-breeze-tint-80))",
              60: "hsl(var(--secondary-breeze-tint-60))",
              40: "hsl(var(--secondary-breeze-tint-40))",
            },
            plum: {
              80: "hsl(var(--secondary-plum-tint-80))",
              60: "hsl(var(--secondary-plum-tint-60))",
              40: "hsl(var(--secondary-plum-tint-40))",
            },
            charcoal: {
              80: "hsl(var(--secondary-charcoal-tint-80))",
              60: "hsl(var(--secondary-charcoal-tint-60))",
              40: "hsl(var(--secondary-charcoal-tint-40))",
            },
          },
          gradient: "var(--gradient-secondary)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--primary-sunset-blaze))",
          2: "hsl(var(--primary-hibiscus))",
          3: "hsl(var(--secondary-summer-breeze))",
          4: "hsl(var(--secondary-plum))",
          5: "hsl(var(--secondary-sage))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
