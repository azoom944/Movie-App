// components/Navbar.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../Context/langContext';

// 

const Navbar = () => {
    const handleChange = (e) => {
        setContextLang(contextLang === "en" ? "ar" : "en")
        console.log(contextLang)
    }
    const {contextLang, setContextLang} = useContext(LanguageContext);
const favoritesCount = useSelector((state) => state.favorites.favorites.length);
    return (

        <nav className="navbar navbar-expand-lg bg-black ">
            <div className="container-fluid">
                <a className="navbar-brand text-light pe-3" href="#">
                <i className="bi bi-camera-reels"></i> Movies
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link to="/" className="nav-link active text-light pe-3">Home</Link>
                        </li>

                        <li className="nav-item">
                           <Link to="/login" className="nav-link active text-light pe-3">Login</Link>

                        </li>
                        <li className="nav-item">
                        <Link to="/register" className="nav-link active text-light pe-3">Register</Link>

                        </li>
                        <li className="nav-item">
                        <Link to="/favorite" className="nav-link active text-light pe-3">Favorites({favoritesCount})</Link>
                         

                        </li>
                        <ul>
                            <select className="form-select" aria-label="Default select example"
                                value={contextLang} onChange={(e) => handleChange(e)}>
                                <option value="en">en</option>
                                <option value="ar">ar</option>
                            </select>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>



    )
};

export default Navbar;
