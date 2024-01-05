import { Global, css } from "@emotion/react"
import React from 'react';

const estilos = css`
    *{
        font-family: 'Montserrat', sans-serif;
    }
`

export const Estilos = () => {
    return (<Global styles={estilos} />)
}