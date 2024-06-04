import React from "react";

export default function Input({
  label = "label",
  register = () => {},
  type = "text",
  error,
}) {
  return (
    <div className="space-y-2">
      <label className=" text-gray-700 capitalize">{label}</label>
      {type === "textarea" ? (
        <textarea
          {...register(label)}
          className="w-full p-2 border rounded border-gray-300 text-gray-800 focus:border-gray-800 focus:outline-none bg-gray-50 resize-none "
        />
      ) : (
        <input
          {...register(label)}
          className="w-full p-2 border rounded border-gray-300 text-gray-800 focus:border-gray-800 focus:outline-none bg-gray-50"
          type
        />
      )}
      {error && <span className="text-red-500">{error?.message}</span>}
    </div>
  );
}
