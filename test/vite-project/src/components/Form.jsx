
import React, { useState } from 'react';

function Form() {

    const [name, setName] = useState({
        firstname: '',
        lastname: ''
    });


    return (
        <div>
            <form>
                <label>First Name:</label>
                <input
                    type="text"
                    value={name.firstname}
                    onChange={(e) =>
                        setName({ ...name, firstname: e.target.value })
                    }
                />

                < br />< br />

                <label>Last Name:</label>
                <input
                    type="text"
                    value={name.lastname}
                    onChange={(e) =>
                        setName({ ...name, lastname: e.target.value })
                    }
                />

            <h1>{name.firstname} {name.lastname}</h1> 
            <button onClick={(e) => handleSubmit(e)}>submit</button>
            </form>
        </div>
    );
}

export default Form
