import { Link } from "react-router-dom"

const MainPage = () => {
    return(
        <div>
            MainPage
            <div><Link to='/works'>Works</Link></div>
            <div><Link to='/about'>About</Link></div>
        </div>
    )
}

export default MainPage