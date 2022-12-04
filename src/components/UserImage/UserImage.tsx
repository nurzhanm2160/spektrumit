import React, {FC, useEffect} from 'react';
import '../../index.css'
import {useDispatch, useSelector} from "react-redux";
import {$fixme} from "../../types/types";
import {updateUserData} from "../../redux/reducers/userReducer";
import {StateType} from "../../redux/store";

interface PropsType {
    id: number;
}

export const UserImage: FC<PropsType> = ({id}) => {
    const dispatch: $fixme = useDispatch()

    const imageUrl = useSelector((state: StateType) => state.userReducer.imageUrl)

    useEffect(() => {
        dispatch(updateUserData('https://picsum.photos/534/383'))
    }, [id])

    return <img className="user-img" alt="User" src={imageUrl} width={400} />
};

