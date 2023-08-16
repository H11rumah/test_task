import React from "react";

type FormInputProps = {
    id: string;
    type: string;
    placeholder: string;
    isRequired: boolean;
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
};

const FormInput: React.FC<FormInputProps> = ({ id, type, placeholder, isRequired, state, setState }) => {
    return (
        <label htmlFor={id} className="login_page_form_field">
            <span>Username</span>
            <input
                id={id}
                className="login_page_form_field_input"
                type={type}
                placeholder={placeholder}
                required={isRequired}
                value={state}
                onChange={(event) => setState(event.target.value)}
            ></input>
        </label>
    );
};

export default FormInput;
