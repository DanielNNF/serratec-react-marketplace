import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/amazonia-white.png'
import { Container} from './style'
import { FiSearch } from 'react-icons/fi';



const Header = () => {
    const history = useHistory();
    const [query, setQuery] = useState('');

    return (
        <>
            <Container>
                <Link to="/home"><img src={logoImg} alt="logo" /></Link>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    history.push({
                        pathname: '/search',
                        search: query.split(' ').join('&')
                    })
                    setQuery('');
                    }}>
                    <input 
                        type="text" 
                        value={query}
                        onChange={e => setQuery(e.target.value)}/>
                    <button><FiSearch/></button>
                </form>

                <ul>
                    <li>
                        <Link to='/cart'>Carrinho</Link>
                    </li>
                    <li onClick={() => localStorage.removeItem("@AMAZONIA:user")}>
                        <Link to='/'>Sair</Link>
                    </li>

                </ul>

            </Container>
        </>
    )


}

export default Header;