import React, {FC} from 'react';
import "../index.css"
import {useFormik} from "formik";
import {FormField} from "../components/FormField/FormField";

import {registrationFormValidation} from "../utils/registrationFormValidation";
import {useDispatch} from "react-redux";
import {$fixme} from "../types/types";
import {sendUserData} from "../redux/reducers/userReducer";


export const Registration: FC = () => {
    const dispatch: $fixme = useDispatch()

    const formik = useFormik({
        enableReinitialize: false,
        initialValues: {
            login: '',
            password: '',
            email: '',
            number: 48,
            isChecked: false
        },
        validationSchema: registrationFormValidation,
        onSubmit: values => {
            const {login, password, email, number} = values
            dispatch(sendUserData(login, email, password, number))
        },
    })

    return (
        <div className="form__container">
            <div className="form-header">
                <span>FORMULARZ REJESTRACYJNY</span>
                <div className="blue-line"></div>
            </div>
            <div className="form">

                <form onSubmit={formik.handleSubmit}>

                    <FormField
                        id="login"
                        name="login"
                        title="Login"
                        error={formik.errors.login}
                        touched={formik.touched.login}
                        value={formik.values.login}
                        handleChange={formik.handleChange}
                    />

                    <FormField
                        id="password"
                        name="password"
                        title="Hasło"
                        error={formik.errors.password}
                        touched={formik.touched.password}
                        value={formik.values.password}
                        handleChange={formik.handleChange}
                    />

                    <FormField
                        id="email"
                        name="email"
                        title="E-mail"
                        error={formik.errors.email}
                        touched={formik.touched.email}
                        value={formik.values.email}
                        handleChange={formik.handleChange}
                    />

                    <FormField
                        id="number"
                        name="number"
                        title="Numer"
                        error={formik.errors.number}
                        touched={formik.touched.number}
                        value={formik.values.number}
                        handleChange={formik.handleChange}
                    />

                    <div className="checkbox-container">
                        <input
                            id="isChecked"
                            name="isChecked"
                            onChange={formik.handleChange}
                            className="checkbox"
                            type="checkbox"
                            checked={formik.values.isChecked}
                        />
                        <h3>Akceptuję Regulamin</h3>
                        {formik.errors.isChecked ? (
                            <span className="error-message">{formik.errors.isChecked}</span>
                        ) : null}
                    </div>

                    <div className="form__button-container">
                        <input
                            className="blue-button"
                            type="submit"
                            value="zapisz"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
