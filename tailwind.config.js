/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pretendard: ['Pretendard'],
        thejamsil: ['TheJamsil'],
        chosunsg: ['ChosunSg'],
        gowundodum: ['GowunDodum'],
        gowunbatang: ['GowunBatang'],
        nanumSquare: ['NanumSquare'],
        nanumSquareNeo: ['NanumSquareNeo'],
        nanumBarunGothic: ['NanumBarunGothic'],
        nanumGothic: ['NanumGothic'],
        hyemin :['IMHyemin'],
        custom: ['IMHyemin']
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), "prettier-plugin-tailwindcss",
    function({ addVariant, e }) {
      addVariant('nth-child-4n', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`nth-child-4n${separator}${className}`)}:nth-child(4n)`;
        });
      });
    }
],
};
