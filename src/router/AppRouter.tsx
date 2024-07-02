import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
        <Routes>
            {/* ---- RUTA PUBLICA ---- SI estoy logueado no me deha acceder al /login */}
            <Route path="/login" element={
                <PublicRoute>
                    <LoginPage/>
                </PublicRoute>
            }/>

            {/* <Route path="login" element={<LoginPage />}/> */}



            {/* ---- RUTA PRIVADA ---- SI COLOCO EN EL BUSCADOR /MARVEL, NO ACCEDE */}
            <Route path="/*" element={
                <PrivateRoute>
                    <HeroesRoutes/>
                </PrivateRoute>
            }/>

            {/* no lo necesito, hice la misma ruta de heroes pero privada arriba */}
            {/* <Route path="/*" element={<HeroesRoutes/>}/> */}
        </Routes>
    </>
)
}

export { AppRouter }