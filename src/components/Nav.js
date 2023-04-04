import logo from '../images/color-logo-tinder.png'
import logolight from '../images/tinder_logo_white.png'

const Nav = ({minimal, authToken, setShowModal, setIsSignedUp}) =>{
    const handleClick = () => {
        setShowModal(true)
        setIsSignedUp(true)
    }

    return (
        <div>
        <nav>
            <div className={"logo-container"}>
                <img className={"logo"} src={minimal ? logo : logolight}/>
            </div>
            {!authToken && !minimal &&
                <button className="nav-button"
                onClick={handleClick}>
                    Log In
                </button>}
        </nav>
        </div>
    )
}
export default Nav