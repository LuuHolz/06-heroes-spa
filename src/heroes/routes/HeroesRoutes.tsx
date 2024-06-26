import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarHeroes } from "../../ui";
import { DcPage, Hero, MarvelPage, Search } from "../../heroes";

const HeroesRoutes = () => {
  return (
    <>
      <NavbarHeroes />

      <div className="container">
        <Routes>

          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<Search />} />
          <Route path="hero" element={<Hero />} />

          <Route path="/" element={<Navigate to="/marvel" />} />

          <Route />
        </Routes>
      </div>
    </>
  );
};

export { HeroesRoutes };
