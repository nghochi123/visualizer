import React, {useReducer, createContext} from 'react';

export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const initialState = {
    darkMode: false,
    userToken: 'chicken nuggets'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        case 'SET_USER_TOKEN':
            return {
                ...state,
                userToken: action.payload
            }
        default:
            throw new Error('Illegal Action Type');
    }
}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider;