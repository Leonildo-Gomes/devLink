
import { Link } from 'react-router-dom';
import styles from './header.module.css';
export function Header () {
    return (
        <header className={ styles.container}>
            <h1>My App</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav> 

            {/* Add more links here */} 
        </header>
    );
}