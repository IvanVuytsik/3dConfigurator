import { gemColors, useCustomization } from "../utils/Customization";

const Configurator = () => {
    const {material, setMaterial, holder, setHolder, gemColor, setGemColor} = useCustomization();
    //console.log("material", material)
  return (
    <div className="configurator">

        <div className="configurator__section">
            <div className="configurator__section__title">
                Gem Color
            </div>
            <div className="configurator__section__values">
                { gemColors.map((item, index) => (
                    <div key={index} className={`item ${item.color === gemColor.color ? "item-active" : ""}`} onClick={() => setGemColor(item)}>
                        <div className="item__dot" style={{backgroundColor: item.color}} /> 
                        <div className="item__label">{item.name}</div>
                    </div>
                ))}   
            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section__title">
                Material
            </div>
            <div className="configurator__section__values">
                <div className={`item ${material === "gold" ? "item-active" : ""}`} onClick={() => setMaterial("gold")}>
                    <div className="item__label">Gold</div>
                </div>
                <div className={`item ${material === "metal" ? "item-active" : ""}`} onClick={() => setMaterial("metal")}>
                    <div className="item__label">Metal</div>
                </div>
            </div>
        </div>

        <div className="configurator__section">
            <div className="configurator__section__title">
                Design
            </div>
            <div className="configurator__section__values">
                <div className={`item ${holder === 1 ? "item-active" : ""}`} onClick={() => setHolder(1)}>
                    <div className="item__label">Standard</div>
                </div>
                <div className={`item ${holder === 2 ? "item-active" : ""}`} onClick={() => setHolder(2)}>
                    <div className="item__label">Rook</div>
                </div>
            </div>
        </div>

    </div> 
        
  )
}

export default Configurator