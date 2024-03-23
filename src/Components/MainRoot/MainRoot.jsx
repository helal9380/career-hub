import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const MainRoot = () => {
    return (
        <div className="">
            <div className="max-w-screen-lg mx-auto px-2">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer>
            </Footer>
        </div>
    );
};

export default MainRoot;