import { createContext, useContext } from "react";
import { type TwittsContextsTuple } from "../Types/types";

export const TwittsContext = createContext<TwittsContextsTuple>([[], () => { }]);

export const useTwitterContext = () => {
    return useContext(TwittsContext);
} 