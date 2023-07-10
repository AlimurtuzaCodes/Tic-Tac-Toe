/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ECE5D5",
        secondary: "#4F5D64",
        tertiary: "#EED2A1",
        golden: "#EED3A3",
        xColor: "#C6D4D9",
        oColor: "#E9B98B",
        gray: {
          600: "#828C90",
        },
      },
    },
  },
  plugins: [],
};
