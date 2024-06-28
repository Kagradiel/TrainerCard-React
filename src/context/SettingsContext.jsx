import { createContext, useState } from "react";



export const SettingsContext = createContext();
SettingsContext.displayName = "Settings";

export const SettingsProvider = ({children}) => {

    const languages = [
        {
            lang:   'English',
            key:    '1',
        },
        {
            lang:   'Português',
            key:    '2',
        },
    ];


    const colorsLight = {
        red:    "#CA5959",
        redBg:  "#ca5959cc",
        blue:   "#599fca",
        blueBg: "#599fcad3",
        green:  "#47b584",
        greenBg:"#47b584cc",
        white:  "#f6f3e2",
    }
    
    const colorsDark = {
        red:            "#932d2d",
        blue:           "#063f63",
        green:          "#064127",
        darkBg:         "#292828cc",
        bg:             "#686868",
        whiteBg:        "#5d5b58",
        whiteHighlight: "#9f9f9d",
    }

    const [globalSettings, setGlobalSettings]   = useState({
        isDark:         false,
        color:          colorsLight.red,
        colorBg:        colorsLight.redBg,
        whiteBg:        colorsLight.white,
        whiteHighlight: colorsLight.white,
        colorHighlight: 'red',
    })

    

    return(
        <SettingsContext.Provider
            value={{
                languages,
                globalSettings,
                setGlobalSettings,
                colorsLight,
                colorsDark,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )   


}