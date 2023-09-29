/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'web-orange': 'rgb(239,108,0)',
      },
      height: {
        '90': '90vh',
      },
      translate: {
        'translateCenter': 'translate(-50%,-50%)',
      },
      letterSpacing: {
        lspace: '.15em',
        blspace: ".20em",
      },
      width: {
        '90': '90%',
        '70': '70%',
        '60': '60%',
        '40': '40%',
      },
      padding: {
        'em1': '0.5em',
        'em2': '1.5em',
      },
      backgroundImage: {
        'main-img': "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('./img/travell-main.jpg')",
        'container-gradient': "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6))",
     }
    },
  },
  plugins: [],
}

