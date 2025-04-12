import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import NavLink from "./NavLink";

function AppNav() {
  return (
    <nav className="bg-zinc-800 h-20 grid grid-cols-3 items-center px-8 shadow-md">
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
