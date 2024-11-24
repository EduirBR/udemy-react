import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="max-w-screen-md mx-auto pt-20 px-5">
                <AppRoutes />
            </div>
        </Router>
    );
}

export default App;
