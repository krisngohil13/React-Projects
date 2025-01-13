import { forwardRef } from "react";

const Input = forwardRef(({ label, isTextarea, ...props }, ref) => {
    return (
        <div className="mb-4 flex flex-col gap-1 my-4 ">
            <label className="block text-gray-700 text-stone-500 text-sm font-bold uppercase mb-2">{label}</label>
            {isTextarea ? (
                <textarea
                    ref={ref}
                    className="shadow appearance-none border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-stone-600 resize-none h-32 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 font-sans tracking-wide"
                    {...props}
                ></textarea>
            ) : (
                <input
                    ref={ref}
                    className="shadow appearance-none border-stone-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  focus:border-stone-600 h-10 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 font-sans tracking-wide"
                    {...props}
                />
            )}
        </div>
    );
});

export default Input;
