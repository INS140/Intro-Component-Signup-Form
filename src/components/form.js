import { useState } from "react";

export default function Form() {
    const [inputs, setInputs] = useState({
        first: 'First Name',
        last: 'Last Name',
        email: 'Email Address',
        password: 'Password'
    })

    const [validEmail, setValidEmail] = useState(true)

    const handleInputChange = (event) => {
      const { value, name } = event.target
      setInputs(values => {return {...values, [name]: value}})
    }

    const handleEmailChange = async (event) => {
      const { value, name } = event.target
      const valid = (/\w+@\w+.com/.test(value)) //working here
      
      if (valid) setValidEmail(true)
      else setValidEmail(false)
      setInputs(values => {return {...values, [name]: value}})
    }

    return (
        <form>
          {
            (inputs.first !== '') 
              ? <div>
                  <input
                    type="text"
                    value={inputs.first}
                    name="first"
                    onChange={handleInputChange}
                    aria-label="first name"
                  />
                </div> 
              : <div>
                  <input
                    type="text"
                    value={inputs.first}
                    name="first"
                    onChange={handleInputChange}
                    className="field-empty"
                    aria-label="first name"
                  />
                  <p className="warning-text"><i>First Name cannot be empty</i></p>
                </div>
          }
          {
            (inputs.last !== '')
              ? <div>
                <input
                  type="text"
                  value={inputs.last}
                  name="last"
                  onChange={handleInputChange}
                  aria-label="last name"
                />
              </div>
              : <div>
                <input
                  type="text"
                  value={inputs.last}
                  name="last"
                  onChange={handleInputChange}
                  className="field-empty"
                  aria-label="last name"
                />
                <p className="warning-text"><i>Last Name cannot be empty</i></p>
              </div>
          }
          {
            (validEmail)
              ? <div>
                  <input
                    type="email"
                    value={inputs.email}
                    name="email"
                    onChange={handleEmailChange}
                    aria-label="email"
                  />
              </div>
              : <div>
                <input
                  type="email"
                  value={inputs.email}
                  name="email"
                  onChange={handleEmailChange}
                  placeholder="email@example.com"
                  className="field-empty"
                  aria-label="email"
                />
                <p className="warning-text"><i>Looks like this is not an email</i></p>
              </div>
          }
          {
            (inputs.password !== '')
              ? <div>
                <input
                  type="password"
                  value={inputs.password}
                  name="password"
                  onChange={handleInputChange}
                  aria-label="password"
                />
              </div>
              : <div>
                <input
                  type="password"
                  value={inputs.password}
                  name="password"
                  onChange={handleInputChange}
                  className="field-empty"
                  aria-label="password"
                />
                <p className="warning-text"><i>Password cannot be empty</i></p>
              </div>
          }
          <input type="submit" value="CLAIM YOUR FREE TRIAL"/>
        </form>
    )
}