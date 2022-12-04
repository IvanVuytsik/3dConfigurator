import { createContext, useContext, useState } from "react"; 

const CustomizationContext = createContext({});

export const gemColors = [
    {
    color: "#0000ff",
    name: "blue",
    },
    {
    color: "#ffa500", 
    name: "orange",
    },
    {
    color: "#8b0000",
    name: "red",
    },
    {
    color: "#90ee90",
    name: "green",
    },
    {
    color: "#800080",
    name: "purple",
    },
]

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState("gold");
    const [holder, setHolder] = useState(1);
    const [gemColor, setGemColor] = useState(gemColors[0]);

    return <CustomizationContext.Provider value={{
        material, 
        setMaterial,
        holder,
        setHolder,
        gemColor,
        setGemColor
        }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}