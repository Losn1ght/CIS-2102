import { Link } from 'react-router-dom'
import './style.css'

function Home(){


    return(
        <>
            <div className="Home">
                <h1>Home</h1>
                <Link to="/first">
                    <button>First Activity</button>
                </Link>
                <Link to="/second">
                    <button>Second Activity</button>
                </Link>
            </div>
        </>
    )
}

export default Home