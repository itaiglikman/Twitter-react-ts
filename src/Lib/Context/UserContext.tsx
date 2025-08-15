import { createContext, useContext } from "react";
import { type UserContextTuple } from "../Types/types";

export const UserContext = createContext<UserContextTuple>(['', () => { }]);

export const useUserContext = () => {
    return useContext(UserContext);
} 