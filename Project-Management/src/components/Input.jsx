import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes = `
    w-full 
    p-2 md:p-3 
    rounded-md 
    border-2 border-stone-300 
    bg-stone-200 
    text-stone-600 
    text-sm md:text-base
    focus:outline-none focus:border-stone-600
    transition-all duration-300
    ${textarea ? 'min-h-[8rem] md:min-h-[12rem] resize-none' : 'h-10 md:h-12'}
  `;

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm md:text-base font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
