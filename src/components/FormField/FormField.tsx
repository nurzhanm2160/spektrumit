import React, {ChangeEvent, FC} from 'react';

interface PropsType {
    id: string,
    name: string;
    title: string;
    error: string | undefined
    touched: boolean | undefined
    value: string | number | undefined
    handleChange: (e: ChangeEvent<any>) => void
}


export const FormField: FC<PropsType> = ({id, name, title, error, touched, value, handleChange}) => {

    return (
        <div>
            <p className="input-label">{title}:</p>
            <input
                className={error ? "input-error" : "input"}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                type={name === "password" ? "password" : "text"}
            />
            {error ? (
                <span className="error-message">{error}</span>
            ) : null}
        </div>
    );
};
