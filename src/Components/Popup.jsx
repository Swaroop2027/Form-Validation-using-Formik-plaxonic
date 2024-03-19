import { createPortal } from "react-dom";

const Popup = ({ open, onClose, err }) => {
  if (!open) return null;

  //   console.log(err, "error");

  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,_0,_0,_0.7)] z-[1000]">
      <div className="fixed top-[50%] left-[50%] bg-white p-[50px] z-[1000] -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] flex flex-col items-center justify-evenly rounded-md">
        <p className="text-4xl font-semibold">
          {err.name && err.email && err.password && err.phone && err.address ? (
            <p>All fields are required</p>
          ) : err.name ? (
            err.name
          ) : err.email ? (
            err.email
          ) : err.password ? (
            err.password
          ) : err.phone ? (
            err.phone
          ) : err.address ? (
            err.address
          ) : null}
        </p>
        <button
          onClick={onClose}
          className="bg-gradient-to-tr from-pink-400 to-blue-400 rounded-md p-3 text-white w-[20%] hover:bg-gradient-to-tr hover:from-pink-600 hover:to-blue-600 hover:text-xl"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
