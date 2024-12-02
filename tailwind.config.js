/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "octocat-wave": {
          "0%, 100%": { transform: "rotate(0)" },
          "20%, 60%": { transform: "rotate(-25deg)" },
          "40%, 80%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        "octocat-wave": "octocat-wave 560ms ease-in-out",
      },
    },
  },
  plugins: [],
};
