// Router component handles navigation between pages using React Router
import { HashRouter, Routes, Route } from "react-router";
import Deportes from "../../pages/Deportes/Deportes";
import Home from "../../pages/Home/Home";
import Cine from "../../pages/Cine/Cine";
import InPersonEvent from "../../pages/Charlas/InPersonEvent";
import OnlineEvents from "../../pages/OnlineEvents/OnlineEvents";
import CursosSapiencia from "../../pages/CursosSapiencia/CursosSapiencia";
import HacktoberFest from "../../pages/HacktoberFest/HacktoberFest";
import FrasesMotivacionales from "../../pages/FrasesMotivacionales/FrasesMotivacionales";
import App from "../../../App";
import { ViewTransitionWrapper } from "../PageTransition/ViewTransition";
import Eventos from "../../pages/Eventos/Eventos";

// Main Router function for page navigation
function Router() {
    return (<>
        <HashRouter>
            <ViewTransitionWrapper>
                <Routes>
                    {/* Define routes for each page */}
                    <Route path="/" element={<App />} />
                    <Route path="eventos" element={<Eventos />} />
                    <Route path="cine" element={<Cine />} />
                    <Route path="charlas" element={<InPersonEvent />} />
                    <Route path="deportes" element={<Deportes />} />
                    <Route path="online-events" element={<OnlineEvents />} />
                    <Route path="cursos-sapiencia" element={<CursosSapiencia />} />
                    <Route path="frases-motivacionales" element={<FrasesMotivacionales />} />
                    <Route path="hacktoberfest" element={<HacktoberFest />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </ViewTransitionWrapper>
        </HashRouter>
    </>);
}

export default Router;