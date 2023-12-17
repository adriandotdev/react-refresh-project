import Textbox from "./Textbox"

function SignupConfirmPassword({ register }) {

    const textboxes = [
        {
            label: 'Username',
            id: 'username',
            placeholder: 'Enter your username'
        },
        {
            label: 'Password',
            id: 'password',
            placeholder: 'Enter your password'
        }
        ,
        {
            label: 'Re-type your password',
            id: 'confirm_password',
            placeholder: 'Confirm your password'
        }
    ]

    return (
        <>
            {
                textboxes.map(textbox => <Textbox key={textbox.id} label={textbox.label} id={textbox.id} placeholder={textbox.placeholder} register={register} registerConstraints={{ required: true }} />)
            }
        </>
    )
}

export default SignupConfirmPassword