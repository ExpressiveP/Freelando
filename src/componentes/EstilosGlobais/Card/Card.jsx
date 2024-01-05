import styled from '@emotion/styled'
import React from 'react';

const DivEstilizada = styled.div`
padding: ${props => props.theme.espacamentos.l};
background: ${props => props.theme.cores.secundarias.a};
border: 1px solid;
boder-color: ${props => props.theme.cores.primarias.a};
border-radius: ${props => props.theme.espacamentos.s};
`

export const Card =({ children }) => {
    return (<DivEstilizada>
        { children }
    </DivEstilizada>) 
}