import Textbox from './Textbox'

function SignupPersonalInfo({ register }) {

    const textboxes = [
        {
            label: 'Given Name',
            id: 'given_name',
            placeholder: 'Enter your given name'
        },
        {
            label: 'Middle Name',
            id: 'middle_name',
            placeholder: 'Enter your middle name'
        },
        {
            label: 'Last Name',
            id: 'last_name',
            placeholder: 'Enter your last name'
        },
        {
            label: 'Contact Number',
            id: 'contact_number',
            placeholder: 'Enter your contact number'
        },
        {
            label: 'Email',
            id: 'email',
            placeholder: 'Enter your email address'
        }
    ]

    return (
        <>
            {
                textboxes.map(textbox =>
                    <Textbox key={textbox.id} label={textbox.label} id={textbox.id} placeholder={textbox.placeholder} register={register} registerConstraints={{ required: true }} />)
            }
        </>
    )
}

export default SignupPersonalInfo