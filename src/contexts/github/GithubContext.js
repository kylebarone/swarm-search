import { createContext, useReducer, useState } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        user: {},
        user_repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    return <GithubContext.Provider value={{
        ...state,
        dispatch,

    }}> {  children } </GithubContext.Provider>

}

export default GithubContext