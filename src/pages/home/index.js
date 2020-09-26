import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Container, Filter, Price, Product, ProductSection, Info } from './style';


import api from '../../services/api'
/*
TODO: -Improve price filter
        -Deve voltar ao padrão quando vazio
        -Adicionar forma mais simples de limpar o filtro
*/

const Home = () => {
    const [products, setProducts] = useState(['']);

    const loadProducts = useCallback(
        async () => {
            const response = await api.get("produto")

            setProducts(response.data)
        }, [])

    useEffect(() => {
        loadProducts();

    }, [])


    function convertPrice(value) {
        return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    return (
        <Container>

            <ProductSection>
                {!products.length ? "Nenhum produto encontrado :(" :
                    products.map(product => (

                        <Product key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.fotoLink}
                                    alt={product.nome}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png" }}>
                                </img>
                            </Link>

                            <Info>
                                <Link to={`/product/${product.id}`}>
                                    <p className="nome">{product.nome} - {product.descricao}</p>
                                </Link>
                                <h3>{convertPrice(product.valor)}</h3>
                            </Info>

                        </Product>
                    )
                    )
                }

            </ProductSection>
        </Container>

    )
}

export default Home
