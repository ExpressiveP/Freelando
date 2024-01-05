import { ThemeProvider } from '@emotion/react'
import React from 'react';

const tema ={
    cores: {
        Branco:'',
        atencao:'',
        focus:'',
        primarias: {
            a:'#5754ED',
            b:'',
            c:'',
        },
        secundarias: {
            a:'#EBEAF9',
            b:'',
            c:'',
        },
        neutras: {
            a:'373737',
            b:'',
            c:'',
            d:'',
        },
        Dark: {
            a:'',
            b:'',
        }
    },
    espacamentos: {
        xs: '8px',
        s : '16px',
        l : '32px',
    },
    fontFamily: "'Montserrat', sans-serif;"
}   
    export const ProvedorTema = ({ children }) => {
        return <ThemeProvider theme={tema}>
            { children }
        </ThemeProvider>
    }