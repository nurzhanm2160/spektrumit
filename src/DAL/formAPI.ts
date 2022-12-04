import axios from "axios";

export const formAPI = {
    sendUserFormData: (login: string,  email: string, password: string, number: number) => {
        axios.post('https://example/', {login, email, password, number}).then(response => response.data)
    }
}