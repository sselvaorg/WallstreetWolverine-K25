/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        euroStyle: "'EuroStyle', sans-serif",
      },
      colors:{
        dark: "#0b1d27",
        light: "#88DCF6",
        medium: "#15394d",
      },
    
      keyframes :{
        movecenter1 : {
                '0%' : {
                  top : '600px',
                  right:'800px'
                },
                '100%' : {
                  top : '0px',
                  transform :  'rotate(360deg)',
                  right:'0px'
                }	
              },
        movecenter2: {
              '0%': {
                bottom: '600px',
                left: '800px',
              },
              '100%': {
                bottom: '0px',
                left: '0px',
                transform: 'rotate(360deg)',
              },
            },
        movecenter3: {
              '0%': {
                fontSize: '350px',
                top: '600px',
              },
              '100%': {
                fontSize: '120px',
                top: '0px',
              },
            },
        movecenter4: {
              '0%': {
                fontSize: '160px',
                top: '600px',
              },
              '100%': {
                fontSize: '40px',
                top: '0px',
              },
            },
        movecenter5: {
          '0%': {
            fontSize: '160px',
            top: '600px',
          },
          '100%': {
            fontSize: '80px',
            top: '0px',
          },
        },
        rDiv: {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
      },
      animation :{
        movecenter1: 'movecenter1 2s ease-in-out',
        movecenter2: 'movecenter2 2s ease-in-out',
        movecenter3: 'movecenter3 2s ease-in-out',
        movecenter4: 'movecenter4 2s ease-in-out',
        movecenter5: 'movecenter5 2s ease-in-out',
        rDiv: 'rDiv 2s linear ',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".custom-scrollbar": {
          "::-webkit-scrollbar": {
            width: "8px",
          },
          "::-webkit-scrollbar-track": {
            background: "#88DCF6",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb": {
            background: "#15394d",
            borderRadius: "4px",
          },
          "::-webkit-scrollbar-thumb:hover": {
            background: "#5555",
          },
        },
      });
    },
  ],
}

