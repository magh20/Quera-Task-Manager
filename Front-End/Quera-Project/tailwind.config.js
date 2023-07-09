/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'registerh':"486px",
        "bgh":"60vh",
        "checkh":"13px"


      },
      width:{
        'registerw':"402px",
        "inputW":"354px",
        "checkw":"5px",
        "23":"95px",
        "100":"500px"
      }
      ,
      ringColor:{
        "check":"#B4DFDF"
      }
      ,
      borderColor:{
        "inputBorder":"#AAAAAA",
        "submitColor":"#208D8E",
        "check":"#B4DFDF",
        "mark":"#208D8E",
        "uncheck":"#999999"
        
      },
      backgroundColor:{
        "submitColor":"#208D8E",
        "check":"#B4DFDF",
        "footBtn":"rgba(32, 141, 142, 1)",
        "makeWorkspace":"rgba(211, 211, 211, 1)",
        "asideProject":"rgba(233, 249, 255, 1)",
        "shareProject":"rgb(100,100,101,0.7)",
        "sendEmailBtn":"rgba(32, 141, 142, 1)"
      },
      borderRadius:{
        "registerRad":"20px"
      },
      boxShadow:{
        "registerShadow":"0px 12px 50px rgba(0, 0, 0, 0.18)",
        "newTaskShadow":"0px 12px 32px 0px rgba(0, 0, 0, 0.25)"
      },
      fontSize:{
        "headerSize":"32px",
        "xxs":"11px"
      },
      
      backgroundImage:{
        "bggradient":" linear-gradient(269.55deg, #06846F 0.35%, #54BEE8 103.4%);",
        "namegradient":"linear-gradient(90deg, #118C80 0%, #4AB7D8 120%);"
      },
      skew:{
        "7":"7deg"
      },
      borderWidth:{
        "1":"1px"
      },
      fontFamily:{
        "dana":"dana"
      },
      maxHeight:{
        'maxh':"530px",
      },
      spacing:{
        "7%":"7.8vh",
        "15":"60px"
      },
      textColor:{
        "squareG1":"rgba(113, 253, 169, 1)",
        "squareG2":"rgba(146, 255, 7, 1)",
        "squareP":"rgba(222, 136, 253, 1)",
        "squareR":"rgba(252, 7, 51, 1)",
      },
      transitionProperty:{
        "height":"height"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}

