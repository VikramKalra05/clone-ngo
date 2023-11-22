import Navbar from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";
import Footer from "./Components/Footer";
import styles from "./index.module.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={styles.main}>
        <AllRoutes/>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
