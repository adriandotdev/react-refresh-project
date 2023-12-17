import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'

// Components
import SignupPersonalInfo from '../components/SignupPersonalInfo';
import SignupConfirmPassword from '../components/SignupConfirmPassword';

function SignUp() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [progress, setProgress] = useState(() => 50);

    const submit = data => console.log(data);

    return (
        <div className="container">

            <form onSubmit={progress === 100 && handleSubmit(submit)} style={{ minHeight: '100vh', gap: '1rem', maxWidth: '25rem' }} className="d-flex flex-column  justify-content-center align-items-center mx-auto">
                <h1 className="h4">{

                    progress === 50 ? 'Personal Information' : progress === 100 ? 'Setting Up Your Password' : ''
                }</h1>
                <ProgressBar className='w-100' label={`${progress}%`} now={progress} />

                {
                    progress === 50 ? <SignupPersonalInfo register={register} /> : <SignupConfirmPassword register={register} />
                }

                <div className="w-100 row">

                    {
                        progress > 50 &&
                        <button onClick={() => {

                            setProgress(prev => prev - 50);

                        }} className="col-6 btn btn-primary w-100">
                            Back
                        </button>
                    }

                    <button onClick={() => {

                        setProgress(prev => prev + 50 <= 100 ? prev + 50 : prev);

                    }} className={`${progress <= 50 ? 'col-12' : 'col-6'} btn btn-primary w-100`}>
                        {
                            progress !== 100 ? 'Next' : 'Submit'
                        }
                    </button>
                </div>

                <div className="align-self-stretch" >

                    <div className='w-100 text-center'>
                        <span className="mr-1 font-weight-">{"Already have an account?"}</span><Link to="/login">Login</Link>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default SignUp