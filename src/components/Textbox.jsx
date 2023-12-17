function Textbox({ label, id, placeholder, register, registerConstraints }) {

    return (
        <div style={{ maxWidth: '25rem', width: '100%' }}>

            <label className="form-label font-weight-bold" htmlFor="username">{label}</label>
            <input {...register(id, registerConstraints)} className='form-control' type="text" name={id} id={id} placeholder={placeholder} />
        </div>
    )
}


export default Textbox