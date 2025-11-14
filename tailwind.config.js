/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      // colors
      colors: {
        mainColor: "#FF5A5F",
        greenColor: "#1B5E1F",
        bgColor: "#FF5A5F1A",
        yellowColor: "#EE872D",
        blackColor: "#000000",
        blueColor:"#007AFF",
        
        lightBgColor: "#F7F7F7",
        halfWhite: "#FFFFFF80",
        stockColor: "#DBDBDB",
        whiteColor: "#FFFFFF",
        redColor: "#E53935",
        descColor: "#15151580",
      },

      //font family
      fontFamily: {
        custom: ['"Poppins", sans-serif'], //font family
      },

      // font sizes
      fontSize: {
        h1: "26px",
        h2: "24px",
        h3: "20px",
        h4: "16px",
        h6: "12px",
        text1: "14px",
        text2: "10px",
        text3: "28px",
        text4:"18px",
      },

      // font weight
      fontWeight: {
        b4: "400",
        b5: "500",
        b6: "600",
        b7: "700",
        b8: "800",
      },

      // border radius
      borderRadius: {
        custom: "10px",
      },

      borderColor: {
        custom: "#DBDBDB",
      },
    },
  },
  plugins: [],

};
