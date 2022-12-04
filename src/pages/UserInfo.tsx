import React, {FC, useEffect, useState} from 'react';
import '../index.css'
import {$fixme} from "../types/types";
import {useDispatch, useSelector} from "react-redux";
import {getUserData} from "../redux/reducers/userReducer"

import favorite from '../assets/favorite.png'
import valid from '../assets/valid.png'
import {StateType} from "../redux/store";
import {UserImage} from "../components/UserImage/UserImage";

export const UserInfo: FC = () => {
    const dispatch: $fixme = useDispatch()
    const [id, setId] = useState(1)

    useEffect(() => {
        dispatch(getUserData(id))
    }, [id])

    const username = useSelector((state: StateType) => state.userReducer.user.name)
    const eyeColor = useSelector((state: StateType) => state.userReducer.user.eye_color)
    const birthYear = useSelector((state: StateType) => state.userReducer.user.birth_year)

    return (
        <>
            <div className="header">
                <p>Nurzhan Murzakhmet</p>
                <button className="green_button"><span>formularz</span> <span>rejestracyjny</span></button>
            </div>
            <div className="user__info-container">
                <div className="rectangle">
                    <UserImage id={id} />
                    <div className="user-info">
                            <p className="name">
                                {username}
                            </p>
                            <img src={favorite} alt="Favorite" width={20}/>
                            <img src={valid} alt="Valid" width={20}/>
                    </div>
                    <div className="user">
                        <p>
                            birth year: {birthYear}
                        </p>
                        <p>
                            eye color: {eyeColor}
                        </p>
                    </div>
                </div>
            </div>
            <div className="user__button-container">
                <button onClick={() => setId((prev) => prev + 1)} className="user-button">
                    next profiles
                </button>
            </div>
        </>
    );
};
