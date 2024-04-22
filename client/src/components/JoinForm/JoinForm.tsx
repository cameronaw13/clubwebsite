import React, { useState } from 'react';

import "./JoinForm.css"

const JoinForm = () => {

    const defaultFormData = {
        name: '',
        studentId: '',
        email: '',
        hearAbout: ''
    };
    
    const [formData, setFormData] = useState(defaultFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // TO-DO: hook up submit to back-end
    // TO-DO: validate data
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data")
        console.log(formData);
        setFormData(defaultFormData);
    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <label>
                    What is your name?
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    What is your student ID?
                    <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    What is your student email?
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    How did you hear about us?
                    <select
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        required
                    >
                        <option value=""></option>
                        <option value="Friend">Friend</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Internet Search">Internet Search</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default JoinForm;
