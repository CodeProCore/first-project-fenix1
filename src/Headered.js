import App from './App';
import './Headered.css';

const Headered = () =>
<header>
    <>
    <a href="#" class="logo">food</a>

    <div class="menu-bar" class="fas fa-bars"></div>

    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#speciality">speciality</a>
        <a href="#popular">popular</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#order">order</a>
    </nav>

    </>
</header>

export default Headered;