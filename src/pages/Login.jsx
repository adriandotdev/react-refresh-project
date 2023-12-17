import { Link } from 'react-router-dom';

// Components
import Textbox from '../components/Textbox';

function Login() {

    const textboxes = [
        {
            label: 'Username',
            id: 'username',
            placeholder: 'Enter your username here'
        },
        {
            label: 'Password',
            id: 'password',
            placeholder: 'Enter your password here'
        }
    ]

    return (
        <>

            <div className="container">

                <form onSubmit={(e) => {

                    e.preventDefault();
                }} style={{ minHeight: '100vh', gap: '1rem', maxWidth: '25rem' }} className="d-flex flex-column  justify-content-center align-items-center mx-auto">

                    {
                        textboxes.map(textbox => <Textbox key={textbox.id} label={textbox.label} id={textbox.id} placeholder={textbox.placeholder} />)
                    }

                    <div className="align-self-stretch" >

                        <button className="btn btn-primary w-100">Sign In</button>
                    </div>

                    <div className="align-self-stretch" >

                        <div className='w-100 text-center'>
                            <span className="mr-1 font-weight-">{"Don't have an account yet?"}</span><Link to="/signup">Sign Up</Link>
                        </div>
                    </div>
                    <div className="align-self-stretch" >

                        <div className='w-100 text-center'>
                            <Link to="/sign-up">Forgot Password?</Link>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default Login