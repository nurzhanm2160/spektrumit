import {instance} from "./api";
import {UserType} from "../types/types";
import axios from "axios";

export const userAPI = {
    getPeople(id: number = 1) {
        return instance.get<UserType>(`people/${id}`).then(response => response.data)
    },
    getPhoto(url: string) {
        return axios.get('https://picsum.photos/534/383').then(response => response.request.responseURL)
    }
}