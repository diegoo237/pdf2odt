import logo from "../../assets/logo.gif";

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <img
        src={logo}
        alt="Logo"
        className="h-9 rounded-md shadow-lg bg-white"
      />
      <h1 className="text-white text-2xl font-semibold tracking-wide">
        Pdf2odt
      </h1>
    </div>
  );
}

export default Logo;
