import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/amazonia-white.png'
import { Container} from './style'
import { FiSearch } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md'
import { ImExit } from 'react-icons/im'
import { AiOutlineUser } from 'react-icons/ai'



const Header = () => {
    const history = useHistory();
    const [query, setQuery] = useState('');
    const [getItem, setGetItem] = useState (localStorage.getItem("@AMAZONIA:user"))
    
    

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
                <p>Bem vindo : {() => (getItem.nome)}</p>
                    <li>
                    <Link to='/cart'> <AiOutlineUser /></Link>
                    </li>
                    <li>
                    <Link to='/cart'> <MdShoppingCart /></Link>
                    </li>
                    <li onClick={() => localStorage.removeItem("@AMAZONIA:user")}>
                    <Link to='/home'><ImExit /></Link>
                    </li>
                    

                </ul>

            </Container>
        </>
    )


}

export default Header;