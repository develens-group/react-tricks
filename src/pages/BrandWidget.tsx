import { useState } from "react";

const BrandWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full
          bg-indigo-600 text-white
          shadow-lg hover:scale-110 transition
          flex items-center justify-center text-xl
        "
      >
        <img
            src="/favicon.png"
            alt="Brand"
            className="w-20 h-20 object-contain"
          />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Bottom Sheet */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-50
          bg-gray-100 rounded-t-2xl shadow-xl p-6
          transition-transform duration-300
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col items-center gap-4">
          <img
            src="/brand.png"
            alt="Brand"
            className="w-[50%] h-40 object-contain"
          />

          {/* <h2 className="text-lg text-black font-bold">dLander</h2> */}
          <p className="text-gray-500 text-sm">
            Welcome to our platform
          </p>
        </div>
      </div>
    </>
  );
};

export default BrandWidget;