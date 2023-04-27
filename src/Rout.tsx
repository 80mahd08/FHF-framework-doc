import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Docs from './pages/Docs';
import Intro from './pages/component/Intro';
import Insta from './pages/component/Insta';
import Usage from './pages/component/Usage';
import Header from './component/Header/Header';

export default function Root() {
    const [showNav, setShowNav] = useState(false);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Docs">
                    <Route index element={<></>} />
                    <Route
                        path="introduction"
                        element={<RoutesComp numberOfComp={1} />}
                    />
                    <Route
                        path="installation"
                        element={<RoutesComp numberOfComp={2} />}
                    />
                    <Route
                        path="usage"
                        element={<RoutesComp numberOfComp={3} />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}

export const RoutesComp = ({ numberOfComp }: { numberOfComp: number }) => {
    const  [showNav, setShowNav] = useState(0);
    let CorrespondingComp: JSX.Element = <></>;
    switch (numberOfComp) {
        case 1:
            CorrespondingComp = <Intro />;
            break;
        case 2:
            CorrespondingComp = <Insta />;
            break;
        case 3:
            CorrespondingComp = <Usage />;
            break;
    }
    return (
        <>
            <Header shown={true} showNav={showNav} setShowNav={setShowNav} />
            <Docs showNav={showNav} setShowNav={setShowNav} />
            {CorrespondingComp}
        </>
    );
};
