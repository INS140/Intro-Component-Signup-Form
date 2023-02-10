import { useState } from "react";

export default function Form() {
    const [inputs, setInputs] = useState({
        first: 'First Name',
        last: 'Last Name',
        email: 'Email Address',
        password: 'Password'
    })

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setInputs(values => {return {...values, [name]: value}})
    }

    return (
        <form>
            <input
              type="text"
              value={inputs.first}
              name="first"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              value={inputs.last}
              name="last"
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              value={inputs.email}
              name="email"
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              value={inputs.password}
              name="password"
              onChange={handleInputChange}
              required
            />
            <input type="submit" value="CLAIM YOUR FREE TRIAL"/>
        </form>
    )
}