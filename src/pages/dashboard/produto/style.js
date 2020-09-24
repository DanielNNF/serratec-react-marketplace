import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

`

export const Form = styled.div`
    width: 70%;
    button {
        width: 100%;
        height: 50px;
        border: 0;
        background-color: green;
        color:white;

        &:hover{
            background-color: darkgreen;
        }
    }
    margin-left: auto;
    margin-right: auto;
`

export const CriarProduto = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;

    input {
        width: 100%;
        margin: 5px;
        height: 30px;
    }

    select{
        border: 1px solid #ccc;
        height: 30px;
        background-color: #fff;
        color: #7f7f7f;
        margin: 5px;
        width: 100%;
    }

    button {
        display: block;
        width: 100px;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        color: black;
        border: 1px solid #ccc;

        &:hover {
            background-color: #fffeee;
        }
    }


`

export const Produtos = styled.div`
    display: flex;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 20px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;

    div {
        margin-left: auto;
        cursor: pointer;
    }

    svg {
        cursor: pointer;

        & + svg {
            margin-left: 10px;
        }
    }
`