import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://swapi.py4e.com/api/'
})