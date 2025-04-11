import { Link } from "react-router-dom";

function NavLink({ path, name }) {
  return (
    <Link to={`/${path}`} className="text-white hover:text-blue-400 transition">
      {name}
    </Link>
  );
}
export default NavLink;
