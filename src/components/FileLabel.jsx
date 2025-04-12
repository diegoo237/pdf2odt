function FileLabel({ label, option }) {
  return option === "box" ? (
    <span className="h-fit flex items-center bg-blue-100 px-2 rounded-lg text-blue-700 font-semibold text-sm shadow-sm">
      {label}
    </span>
  ) : (
    <span className="h-fit text-sm font-medium">{label}</span>
  );
}
export default FileLabel;
