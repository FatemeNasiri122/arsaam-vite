import {createContext, useContext, useEffect, useReducer, useState} from "react";
import AccountReducer from "./AccountReducer";
import {ActiveDetails} from "../Content/ActiveDetails";

const AccountContext = createContext()

export const AccountProvider = ({children}) =>{
    const initialState = {
        lists: ActiveDetails,
    }
    const [state,dispatch] = useReducer(AccountReducer,initialState)

    const changeActive = (element) => {
        if (!element.dataset.number)
            return

            state.lists.forEach((list) =>{
                list.isActive = false
            })
            state.lists.forEach((list) =>{
                if (list.id === +element.dataset.number){
                    list.isActive = !list.isActive
                }
            })

            dispatch({
                type: 'CHANGE-ACTIVE',
                payload: {
                    lists: state.lists,
                }
            })
            console.log(state.lists)

    }

    const changeMobileActive = (element) => {
        if (!element.dataset.number)
            return

        state.lists.forEach((list) =>{
            if (list.id === +element.dataset.number){
                list.isActive = !list.isActive
            }
        })

        dispatch({
            type: 'CHANGE-ACTIVE',
            payload: {
                lists: state.lists,
            }
        })
        console.log(state.lists)
    }

    return(
        <AccountContext.Provider value={{ lists: state.lists , path: state.path , plus: state.plus , changeActive , changeMobileActive}}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContext