import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --bgColor: #f7f7f7;
    --textColor: #124a63;
    --accentColor: #21b6b7;
    --spacer: 8px;
    --textAltColor: #b3c5cd;

    [data-theme="dark"] {
      --bgColor: #252329;
      --textColor: #fff;
    }
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: #000;
    font-size: 16px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    font-weight: 500;
    line-height: 2;
  }

  // Fix scrollbars during animation on Windows
  html,
  body {
    overflow: hidden;
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bgColor);
    color: var(--textColor);
    margin: 0;
    text-align: left;
    text-rendering: optimizeLegibility;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border-style: solid;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 600;
    line-height: inherit;
    margin-bottom: 0;
    margin-top: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 0;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: normal;
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: 700;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  a {
    color: #0000ff;
    font-weight: 400;
    text-decoration: underline;
    background-color: transparent;

    &:hover {
      color: #0000ff;
      text-decoration: none;
    }
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:focus {
      outline: 0;
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
  }

  svg {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #000;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: none;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  /* Remove background from React Image Lightbox toolbar */
  .ril__toolbar {
    background-color: transparent;
  }
`
