/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow-sm': '0 0 10px rgba(76, 195, 138, 1)',
        'glow-md': '0 0 20px rgba(76, 195, 138, 1)',
        'glassmorphism': '0 10px 20px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(76, 195, 138, 1)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(76, 195, 138, 1)',
          },
        }
      },
      animation: {
        'glow-shadow': 'glow 2s ease-in-out infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      colors: {
        tomatoDark: {
          1: '#1D1412',
          2: '#2A1410',
          3: '#3B1813',
          4: '#481A14',
          5: '#541C15',
          6: '#652016',
          7: '#7F2315',
          8: '#A42A12',
          9: '#E54D2E',
          10: '#EC5E41',
          11: '#F16A50',
          12: '#FEEFEC',
        },
        redDark: {
          1: '#1F1315',
          2: '#291415',
          3: '#3C181A',
          4: '#481A1D',
          5: '#541B1F',
          6: '#671E22',
          7: '#822025',
          8: '#AA2429',
          9: '#E5484D',
          10: '#F2555A',
          11: '#FF6369',
          12: '#FEECEE',
        },
        crimsonDark: {
          1: '#1D1418',
          2: '#27141C',
          3: '#3C1827',
          4: '#481A2D',
          5: '#541B33',
          6: '#641D3B',
          7: '#801D45',
          8: '#AE1955',
          9: '#E93D82',
          10: '#F04F88',
          11: '#F76190',
          12: '#FEECF4',
        },
        pinkDark: {
          1: '#1F121B',
          2: '#271421',
          3: '#3A182F',
          4: '#451A37',
          5: '#501B3F',
          6: '#601D48',
          7: '#7A1D5A',
          8: '#A71873',
          9: '#D6409F',
          10: '#E34BA9',
          11: '#F65CB6',
          12: '#FEEBF7',
        },
        plumDark: {
          1: '#1D131D',
          2: '#251425',
          3: '#341A34',
          4: '#3E1D40',
          5: '#48214B',
          6: '#542658',
          7: '#692D6F',
          8: '#883894',
          9: '#AB4ABA',
          10: '#BD54C6',
          11: '#D864D8',
          12: '#FBECFC',
        },
        purpleDark: {
          1: '#1B141D',
          2: '#221527',
          3: '#301A3A',
          4: '#3A1E48',
          5: '#432155',
          6: '#4E2667',
          7: '#5F2D84',
          8: '#7938B2',
          9: '#8E4EC6',
          10: '#9D5BD2',
          11: '#BF7AF0',
          12: '#F7ECFC',
        },
        violetDark: {
          1: '#17151F',
          2: '#1C172B',
          3: '#251E40',
          4: '#2C2250',
          5: '#32275F',
          6: '#392C72',
          7: '#443592',
          8: '#5842C3',
          9: '#6E56CF',
          10: '#7C66DC',
          11: '#9E8CFC',
          12: '#F1EEFE',
        },
        indigoDark: {
          1: '#131620',
          2: '#15192d',
          3: '#192140',
          4: '#1c274f',
          5: '#1f2c5c',
          6: '#22346e',
          7: '#273e89',
          8: '#2f4eb2',
          9: '#3e63dd',
          10: '#5373e7',
          11: '#849dff',
          12: '#eef1fd',
        },
        blueDark: {
          1: '#0f1720',
          2: '#0f1b2d',
          3: '#10243e',
          4: '#102a4c',
          5: '#0f3058',
          6: '#0d3868',
          7: '#0a4481',
          8: '#0954a5',
          9: '#0091ff',
          10: '#369eff',
          11: '#52a9ff',
          12: '#eaf6ff',
        },
        cyanDark: {
          1: '#07191d',
          2: '#061e24',
          3: '#072830',
          4: '#07303b',
          5: '#073844',
          6: '#064150',
          7: '#045063',
          8: '#00647d',
          9: '#05a2c2',
          10: '#00b1cc',
          11: '#00c2d7',
          12: '#e1f8fa',
        },
        tealDark: {
          1: '#091915',
          2: '#04201b',
          3: '#062923',
          4: '#07312b',
          5: '#083932',
          6: '#09443c',
          7: '#0b544a',
          8: '#0c6d62',
          9: '#12a594',
          10: '#10b3a3',
          11: '#0ac5b3',
          12: '#e1faf4',
        },
        greenDark: {
          1: '#0d1912',
          2: '#0c1f17',
          3: '#0f291e',
          4: '#113123',
          5: '#133929',
          6: '#164430',
          7: '#1b543a',
          8: '#236e4a',
          9: '#30a46c',
          10: '#3cb179',
          11: '#4cc38a',
          12: '#e5fbeb',
        },
        grassDark: {
          1: '#0d1912',
          2: '#0f1e13',
          3: '#132819',
          4: '#16301d',
          5: '#193921',
          6: '#1d4427',
          7: '#245530',
          8: '#2f6e3b',
          9: '#46a758',
          10: '#55b467',
          11: '#63c174',
          12: '#e5fbeb',
        },
        orangeDark: {
          1: '#1f1206',
          2: '#2b1400',
          3: '#391a03',
          4: '#441f04',
          5: '#4f2305',
          6: '#5f2a06',
          7: '#763205',
          8: '#943e00',
          9: '#f76808',
          10: '#ff802b',
          11: '#ff8b3e',
          12: '#feeadd',
        },
        brownDark: {
          1: '#191513',
          2: '#221813',
          3: '#2e201a',
          4: '#36261e',
          5: '#3e2c22',
          6: '#493528',
          7: '#5c4332',
          8: '#775940',
          9: '#ad7f58',
          10: '#bd8b60',
          11: '#dba16e',
          12: '#faf0e5',
        },
        skyDark: {
          1: '#0c1820',
          2: '#071d2a',
          3: '#082636',
          4: '#082d41',
          5: '#08354c',
          6: '#083e59',
          7: '#064b6b',
          8: '#005d85',
          9: '#68ddfd',
          10: '#8ae8ff',
          11: '#2ec8ee',
          12: '#eaf8ff',
        },
        mintDark: {
          1: '#081917',
          2: '#05201e',
          3: '#052926',
          4: '#04312c',
          5: '#033a34',
          6: '#01453d',
          7: '#00564a',
          8: '#006d5b',
          9: '#70e1c8',
          10: '#95f3d9',
          11: '#25d0ab',
          12: '#e7fcf7',
        },
        limeDark: {
          1: '#141807',
          2: '#181d08',
          3: '#1e260d',
          4: '#252e0f',
          5: '#2b3711',
          6: '#344213',
          7: '#415215',
          8: '#536716',
          9: '#99d52a',
          10: '#c4f042',
          11: '#87be22',
          12: '#effbdd',
        },
        yellowDark: {
          1: '#1c1500',
          2: '#221a00',
          3: '#2c2100',
          4: '#352800',
          5: '#3e3000',
          6: '#493c00',
          7: '#594a05',
          8: '#705e00',
          9: '#f5d90a',
          10: '#ffef5c',
          11: '#f0c000',
          12: '#fffad1',
        },
        amberDark: {
          1: '#1f1300',
          2: '#271700',
          3: '#341c00',
          4: '#3f2200',
          5: '#4a2900',
          6: '#573300',
          7: '#693f05',
          8: '#824e00',
          9: '#ffb224',
          10: '#ffcb47',
          11: '#f1a10d',
          12: '#fef3dd',
        },
        grayDark: {
          1: '#161616',
          2: '#1c1c1c',
          3: '#232323',
          4: '#282828',
          5: '#2e2e2e',
          6: '#343434',
          7: '#3e3e3e',
          8: '#505050',
          9: '#707070',
          10: '#7e7e7e',
          11: '#a0a0a0',
          12: '#ededed',
        },
        mauveDark: {
          1: '#161618',
          2: '#1c1c1f',
          3: '#232326',
          4: '#28282c',
          5: '#2e2e32',
          6: '#34343a',
          7: '#3e3e44',
          8: '#504f57',
          9: '#706f78',
          10: '#7e7d86',
          11: '#a09fa6',
          12: '#ededef',
        },
        slateDark: {
          1: '#151718',
          2: '#1a1d1e',
          3: '#202425',
          4: '#26292b',
          5: '#2b2f31',
          6: '#313538',
          7: '#3a3f42',
          8: '#4c5155',
          9: '#697177',
          10: '#787f85',
          11: '#9ba1a6',
          12: '#ecedee',
        },
        sageDark: {
          1: '#141716',
          2: '#191d1b',
          3: '#1f2421',
          4: '#252a27',
          5: '#2a2f2c',
          6: '#303633',
          7: '#393f3c',
          8: '#4a524e',
          9: '#66736d',
          10: '#75817b',
          11: '#99a29e',
          12: '#eceeed',
        },
        oliveDark: {
          1: '#151715',
          2: '#1a1d19',
          3: '#20241f',
          4: '#262925',
          5: '#2b2f2a',
          6: '#313530',
          7: '#3b3f3a',
          8: '#4c514b',
          9: '#687366',
          10: '#778175',
          11: '#9aa299',
          12: '#eceeec',
        },
        goldDark: {
          1: '#171613',
          2: '#1c1a15',
          3: '#26231c',
          4: '#2e2a21',
          5: '#353026',
          6: '#3e382c',
          7: '#504737',
          8: '#6b5d48',
          9: '#978365',
          10: '#a59071',
          11: '#bfa888',
          12: '#f7f4e7',
        },
        bronzeDark: {
          1: '#191514',
          2: '#1f1917',
          3: '#2a211f',
          4: '#332824',
          5: '#3b2e29',
          6: '#453530',
          7: '#57433c',
          8: '#74594e',
          9: '#a18072',
          10: '#b08c7d',
          11: '#cba393',
          12: '#f9ede7',
        },
        blackA: {
          1: 'hsla(0, 0%, 0%, 0.012)',
          2: 'hsla(0, 0%, 0%, 0.027)',
          3: 'hsla(0, 0%, 0%, 0.047)',
          4: 'hsla(0, 0%, 0%, 0.071)',
          5: 'hsla(0, 0%, 0%, 0.090)',
          6: 'hsla(0, 0%, 0%, 0.114)',
          7: 'hsla(0, 0%, 0%, 0.141)',
          8: 'hsla(0, 0%, 0%, 0.220)',
          9: 'hsla(0, 0%, 0%, 0.439)',
          10: 'hsla(0, 0%, 0%, 0.478)',
          11: 'hsla(0, 0%, 0%, 0.565)',
          12: 'hsla(0, 0%, 0%, 0.910)',
        },
        whiteA: {
          1: 'hsla(0, 0%, 100%, 0)',
          2: 'hsla(0, 0%, 100%, 0.013)',
          3: 'hsla(0, 0%, 100%, 0.034)',
          4: 'hsla(0, 0%, 100%, 0.056)',
          5: 'hsla(0, 0%, 100%, 0.086)',
          6: 'hsla(0, 0%, 100%, 0.124)',
          7: 'hsla(0, 0%, 100%, 0.176)',
          8: 'hsla(0, 0%, 100%, 0.249)',
          9: 'hsla(0, 0%, 100%, 0.386)',
          10: 'hsla(0, 0%, 100%, 0.446)',
          11: 'hsla(0, 0%, 100%, 0.592)',
          12: 'hsla(0, 0%, 100%, 0.923)',
        },
        borderGradient: {
          18: 'rgba(199, 199, 199, 0.18)',
          68: 'rgba(199, 199, 199, 0.68)',
        },
        glassmorphishm: {
          8: 'rgba(32, 32, 32, 0.08)',
          38: 'rgba(32, 32, 32, 0.38)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
}
