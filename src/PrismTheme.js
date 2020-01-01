import mergeDeepRight from 'ramda/es/mergeDeepRight'
import theme from 'react-syntax-highlighter/dist/styles/prism/ghcolors'

export default mergeDeepRight(theme, {
  'code[class*="language-"]': {
    fontFamily:
      '"Source Code Pro", "Roboto Mono", "Fira Mono", Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
    fontSize: '1em',
  },
  'pre[class*="language-"]': {
    fontFamily:
      '"Source Code Pro", "Roboto Mono", "Fira Mono", Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
    fontSize: '1em',
  },
})
