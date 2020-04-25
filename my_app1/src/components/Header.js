import React from 'react' ;
import { Link } from 'react-router-dom' ;

function Header () {

    return (
        <header style={headerStyle}>
        <h2> Task Management  </h2>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about"> About </Link>
        |  <Link style={linkStyle} to="/login"> Login </Link>

        </header>
    )
}
const headerStyle = {
    background : 'black',
    color : '#fff' ,
    textAlign : 'center',
    padding : '8px',
}
const linkStyle = {
    color : 'white',
    textDecoration: 'none',
}

export default Header;
