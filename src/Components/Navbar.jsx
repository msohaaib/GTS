import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


    const menu = [
        {
            id: 1,
            name : "Home",
            path : "/"
        },
        {
            id: 2,
            name : "About",
            path : "/about"
        },
        {
            id: 1,
            name : "Contact",
            path : "/contact"
        },
    ]

function App() {
return (
    <Router>
    <div>
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand / Logo */}
                <div className="text-white text-xl font-bold">
                <Link to="/">MyApp</Link>
                </div>
            {/* Nav Links */}
                <ul className="flex space-x-4">
                {menu.map( (item) => (
                    <li key={item.id}>
                        <Link
                        to={item.path}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                        {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    </Router>
);
}

export default App;
