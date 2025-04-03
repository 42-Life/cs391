import {useContext, createContext} from "react";

export const ColorContext = createContext({
    theme: "blue",
    // changeTheme: () => {}
});

export default function ColorContextProvider({children}:{children:React.ReactNode}) {
    return(
        <ColorContext.Provider value={useContext(ColorContext)}>
            {children}
        </ColorContext.Provider>
    );
}