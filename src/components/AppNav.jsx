import Logo from "./nav/Logo";
import LanguageSelector from "./nav/LanguageSelector";
import NavLink from "./nav/NavLink";

function AppNav() {
  return (
    <nav className="bg-gray-800 h-20 grid grid-cols-3 items-center px-8 shadow-md">
      <Logo />

      <div className="flex justify-center gap-4">
        <NavLink path={""} name={"Start"} />
        <NavLink path={"convert"} name={"Convert"} />
        <NavLink path={"about"} name={"About"} />
      </div>

      <LanguageSelector />
    </nav>
  );
}

export default AppNav;
