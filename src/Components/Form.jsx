const Form = () => {
    return (
        <div>
            <input
                type="text"
                placeholder="Enter You Name"
            />
            <br />
            <input
                type="email"
                placeholder="Enter Email Address"
            />
            <br />
            <input
                type="text"
                placeholder="Description"
            />
            <br />
            <button>Send Mail</button>
        </div>
    )
}


export default Form;