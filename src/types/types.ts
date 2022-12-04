export type $fixme = any;

export interface UserType {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

interface UserExtraData {
    name: string;
    created: string;
    vehicles: string[];
}

export interface UserStateType {
    user: UserType,
    form: FormikValuesType & UserExtraData
    imageUrl: string;
}



export interface FormikValuesType {
    login: string
    password: string;
    email: string;
    number: number;
}
