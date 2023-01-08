/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const thierrySimonMumbelConfig = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    fontSize: {
      xs: ["14px", "14px"],
      sm: ["16px", "16px"],
      base: ["18px", "25.2px"],
      lg: ["24px", "34.8px"],
      xl: ["24px", "30px"],
      "2xl": ["32px", "40px"],
      "3xl": ["40px", "50px"],
      "4xl": ["48px", "60px"],
    },
    extend: {
      spacing: {
        xxs: "4px",
        xs: "8px",
        s: "16px",
        m: "24px",
        l: "32px",
        xl: "48px",
        xxl: "64px",
      },
      borderRadius: {
        md: "6px",
        lg: "8px",
        xl: "16px",
      },
      borderWidth: {
        md: "6px",
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    plugin(function ({ addBase, theme }) {
      addBase({
        // html: { fontSize: '10px' },
        h1: {
          fontSize: theme("fontSize.4xl"),
          lineHeight: theme("fontSize.4xl.1"),
          fontWeight: "700",
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          lineHeight: theme("fontSize.3xl.1"),
          fontWeight: "700",
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
          lineHeight: theme("fontSize.2xl.1"),
          fontWeight: "600",
        },
        h4: {
          fontSize: theme("fontSize.xl"),
          lineHeight: theme("fontSize.xl.1"),
          fontWeight: "600",
        },
        p: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("fontSize.base.1"),
        },
      });
    }),
  ],
};

module.exports = thierrySimonMumbelConfig;
// export tailwind config as plugin to be used by other projects when isntalled as npm package
module.exports.plugin = thierrySimonMumbelConfig;
