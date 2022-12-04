import {UserStateType, UserType} from "../../types/types";
import {BaseThunkType, InferActionsType} from "../store";
import {userAPI} from "../../DAL/userAPI";
import {formAPI} from "../../DAL/formAPI";

type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>;

const initialState: UserStateType = {
    user: {
        name: "",
        height: 0,
        mass: 0,
        hair_color: "",
        skin_color: "",
        eye_color: "",
        birth_year: "",
        gender: "",
        homeworld: "",
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: "",
        edited: "",
        url: ""
    },
    form: {
        login: '',
        email: '',
        password: '',
        number: 0,
        name: '',
        created: '',
        vehicles: []
    },
    imageUrl: 'https://picsum.photos/534/383'
}

export const userReducer = (state = initialState, action: ActionsType): UserStateType => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: { ...action.user }
            }
        case "SET_FORM_DATA":
            return {
                ...state,
                form: {
                    ...action.payload,
                    name: state.user.name,
                    created: state.user.created,
                    vehicles: [...state.user.vehicles]
                }
            }
        case "UPDATE_IMAGE_URL":
            return {
                ...state,
                imageUrl: action.url
            }
        default:
            return state
    }
}

export const actions = {
    setUser: (user: UserType) => ({type: 'SET_USER', user} as const),
    setFormData: (login: string, email: string, password: string, number: number) => ({type: 'SET_FORM_DATA', payload: {login, email, password, number }} as const),
    updateImageUrl: (url: string) => ({type: 'UPDATE_IMAGE_URL', url} as const)
}

export const getUserData = (id: number): ThunkType => {
    return async (dispatch) => {
        // need try catch
        const user = await userAPI.getPeople(id)

        dispatch(actions.setUser(user))
    }
}

export const sendUserData = (login: string, email: string, password: string, number: number): ThunkType => {
    return async (dispatch) => {
        // need try catch
        await formAPI.sendUserFormData(login, email, password, number)
        dispatch(actions.setFormData(login, email, password, number))
    }
}

export const updateUserData = (url: string): ThunkType => {
    return async (dispatch) => {
        const imageUrl = await userAPI.getPhoto(url)
        dispatch(actions.updateImageUrl(imageUrl))
    }
}