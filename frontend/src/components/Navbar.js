import { Link } from "react-router-dom"
//declare function Navbar
const Navbar = () => {
    //return jsx which is HTML elements 
    return (
        <header>
            <div className = "container">
                <Link to = "/">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

//make Navbar importable to other files
export default Navbar 