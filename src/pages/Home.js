import Nav from '../components/Nav'
import {useState} from 'react'
import AuthModal from "../components/AuthModal";

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignedUp, setIsSignedUp] = useState(true)

    const authToken = false

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignedUp(false)
    }
    return (
        <>
        <div className={"overlay"}>
            <Nav
                minimal={false}
                authToken={authToken}
                setShowModal={ setShowModal }
                setIsSignedUp={ setIsSignedUp }
            />
            <div className="home">

                <h1 className={"primary-title"}>Swipe Right</h1>
                <button className="primary-button" onClick={handleClick} >
                    {authToken ? 'Sign out' : 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal}/>
                )}

            </div>
        </div>
    </>
    )
}

export default Home