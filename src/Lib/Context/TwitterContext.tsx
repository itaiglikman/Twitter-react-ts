import { createContext, useContext } from "react";
import { type TwittsContextsTuple } from "../Types/types";

export const TwittsContexts = createContext<TwittsContextsTuple>([[], () => { }]);

export const useTwitterContext = () => {
    return useContext(TwittsContexts);
} 