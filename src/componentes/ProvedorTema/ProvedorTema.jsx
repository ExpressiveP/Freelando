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
            a:'',
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
        s : '16px',
        l : '32px',
    }
}   
    export const ProvedorTema = ({ children }) => {
        return <ThemeProvider theme={tema}>
            { children }
        </ThemeProvider>
    }