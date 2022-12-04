import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const registrationFormValidation = Yup.object({
    login: Yup.string()
        .required('Login nie może byč pustym'),
    password: Yup.string()
        .required('Hasło nie może być pustym'),
    email: Yup.string().email('Nieprawidłowy format adresu e-mail').required('E-email nie może być pustym'),
    number: Yup.string()
        .matches(phoneRegExp, 'Nieprawidłowy numer telefonu')
        .min(9, 'Numer nie może być mniej niż 9 cyfr')
        .required('numer nie może być pustym'),
    isChecked: Yup.boolean().oneOf([true], 'Wymagana akceptacja regulaminu')
})