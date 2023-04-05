/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
=======
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
>>>>>>> c2333b53917b65074f3e46dfd781d58cc876b835
  theme: {
    extend: {},
  },
  plugins: [],
<<<<<<< HEAD
};
=======
});
>>>>>>> c2333b53917b65074f3e46dfd781d58cc876b835
