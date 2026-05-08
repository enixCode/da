// Style Dictionary config — enixCode DA
// Source : tokens.json (W3C DTCG)
// Output : dist/{css,scss,js,ios,android}/

const filterColorPath = (group) => (token) =>
  token.path[0] === 'color' && token.path[1] === group;

const filterColors = (token) =>
  token.path[0] === 'color' && (token.path[1] === 'light' || token.path[1] === 'constants');

export default {
  log: { verbosity: 'default' },
  source: ['tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables',
          filter: filterColorPath('light'),
          options: { selector: ':root' }
        },
        {
          destination: 'dark.css',
          format: 'css/variables',
          filter: filterColorPath('dark'),
          options: { selector: ':root[data-theme="dark"]' }
        },
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: { selector: ':root' }
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_light.scss',
          format: 'scss/variables',
          filter: filterColorPath('light')
        },
        {
          destination: '_dark.scss',
          format: 'scss/variables',
          filter: filterColorPath('dark')
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        },
        {
          destination: 'tokens.json',
          format: 'json/flat'
        }
      ]
    },
    'ios-swift': {
      transformGroup: 'ios-swift',
      buildPath: 'dist/ios/',
      files: [
        {
          destination: 'EnixTokens.swift',
          format: 'ios-swift/class.swift',
          options: { className: 'EnixTokens' }
        }
      ]
    },
    android: {
      transformGroup: 'android',
      buildPath: 'dist/android/',
      files: [
        {
          destination: 'colors.xml',
          format: 'android/colors',
          filter: filterColors
        }
      ]
    }
  }
};
