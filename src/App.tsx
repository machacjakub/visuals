import {BrowserRouter, Route, Routes} from "react-router-dom";
import First from "./first/First";
import {Home} from "./Home";
import FirstLoading from "./first-loading/FirstLoading";
import FirstColors from "./first-colors/FirstColors";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" >
                        <Route index element={<Home />} />
                        <Route path='/first' element={<First />} />
                        <Route path='/first-loading' element={<FirstLoading />} />
                        <Route path='/first-colors' element={<FirstColors />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
