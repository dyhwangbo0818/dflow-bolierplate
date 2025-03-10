import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MarkupList from "../example/markupList";
import Home from "@/page/home";


const MenuRouter = () => {
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/example/markupList" />}></Route>
                <Route path="/example/markupList" element={<MarkupList />}></Route>
                <Route path="/home" element={<Home />}></Route>

                {/*<Route path="/" element={<LayoutMarkupList />}>*/}
                {/*</Route>*/}

                {/*<Route path="/" element={<LayoutComm01 />}>*/}
                {/*</Route>*/}

                {/*<Route path="/" element={<LayoutLogin />}>*/}
                {/*</Route>*/}


            </Routes>
        </BrowserRouter>
    </>
    );
}

export default MenuRouter;