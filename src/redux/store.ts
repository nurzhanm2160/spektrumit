import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import {userReducer} from "./reducers/userReducer";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({userReducer})

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
        // @ts-expect-error
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        window?.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

type RootReducerType = typeof rootReducer
export type StateType = ReturnType<RootReducerType>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
    R,
    StateType,
    unknown,
    A
    >;

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U }
    ? U
    : never;