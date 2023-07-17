// import { createContext } from "react";
// import { Children } from "react";
import { AunthContext } from "./AuthContext";

export function StateAunth(){

    return(
        <AunthContext.Provider
        value={{

        }}
        >
            {/* {Children} */}
        </AunthContext.Provider>
    );
}