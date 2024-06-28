import { useContext, useEffect } from "react"
import { SettingsContext } from "../context/SettingsContext";



export const useSettingsContext = () => {
    const {
        languages,
        globalSettings,
        setGlobalSettings,
        colorsLight,
        colorsDark,
    } = useContext(SettingsContext);



    function toggleDarkMode() {
        
        if(globalSettings.isDark === true){
            setGlobalSettings({
                ...globalSettings,
                isDark:         false,
                whiteBg:        colorsLight.white,
                whiteHighlight: colorsLight.white,
            })
        }else{

            setGlobalSettings({
                ...globalSettings,
                isDark:         !globalSettings.isDark,
                whiteBg:        colorsDark.whiteBg,
                whiteHighlight: colorsDark.whiteHighlight,
            })
        }
        
        
    }

    function selectColor(colorChoice){
        
        switch (colorChoice) {
            case 'red':
                globalSettings.isDark === false ?
                setGlobalSettings({
                    ...globalSettings,
                    color:          colorsLight.red,
                    colorBg:        colorsLight.redBg,
                    colorHighlight: 'red',
                }) :
                setGlobalSettings({
                    ...globalSettings,
                    color:          colorsDark.red,
                    colorBg:        colorsDark.darkBg,
                    colorHighlight: 'red',
                });
                break;
                case 'blue':
                    globalSettings.isDark === false ?
                    setGlobalSettings({
                        ...globalSettings,
                        color:          colorsLight.blue,
                        colorBg:        colorsLight.blueBg,
                        colorHighlight: 'blue',
                    }) :
                    setGlobalSettings({
                        ...globalSettings,
                        color:          colorsDark.blue,
                        colorBg:        colorsDark.darkBg,
                        colorHighlight: 'blue',
                    });
                    break;
                    case 'green':
                    globalSettings.isDark === false ?
                    setGlobalSettings({
                        ...globalSettings,
                        color:          colorsLight.green,
                        colorBg:        colorsLight.greenBg,
                        colorHighlight: 'green',
                    }) :
                    setGlobalSettings({
                        ...globalSettings,
                        color:          colorsDark.green,
                        colorBg:        colorsDark.darkBg,
                        colorHighlight: 'green',
                    });
                    break;
                    default:
                        return ""
                    }

                    
    }
    
    //useEffect - update colors to dark mode or !
    useEffect(() => {
        selectColor(globalSettings.colorHighlight);
    }, [globalSettings.isDark]);

    return {
        languages,
        colorsLight,
        colorsDark,
        globalSettings,
        setGlobalSettings,
        toggleDarkMode,
        selectColor,
    }
}