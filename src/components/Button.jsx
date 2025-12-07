import classNames from "classnames";

function Button({ children, variant }) {
  console.log(children);
  return (
    <button
      className={classNames({
        "p-4 h-10 flex items-center rounded": true,
        "bg-gray-200 hover:bg-gray-300 text-gray-800": variant === "default",
        "bg-green-600 text-white hover:bg-green-700": variant === "success",
        "bg-red-600 text-white hover:bg-red-700": variant === "danger",
        "bg-yellow-300 text-white hover:bg-yellow-400": variant === "warning",
      })}
    >
      {children}
    </button>
  );
}

export default Button;
