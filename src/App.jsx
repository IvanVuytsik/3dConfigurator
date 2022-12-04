import { Canvas } from "@react-three/fiber";
import "./App.css";
import Configurator from "./components/Configurator";
import Experience from "./components/Experience";
import { CustomizationProvider } from "./utils/Customization";

function App() {
  return (
    <CustomizationProvider>
      <div className="app">
        <Canvas dpr={[1, 2]} camera={{ fov: 35, zoom: 0.5, near: 1, far: 1000, position: [0, 0, 10]}}>
          <color attach="background" args={["#101010"]} />
          <fog attach="fog" args={['#101010', 50, 100]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App; 
