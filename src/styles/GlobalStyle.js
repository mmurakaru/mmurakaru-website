import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}
:root {
    font-size: 112.5%;
}
body {
    margin: 0 auto;
    font-family: 'Quicksand', sans-serif;
    width: 100%;
    background: white;
    color: black;
}
`