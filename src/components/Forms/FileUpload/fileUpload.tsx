import React, { FC } from "react";

export type FileUploadProps = {
  type: "text" | "password" | "email";
  label: string;
  id: string;
  placeholder: string;
};

export const FileUpload: FC<FileUploadProps> = ({
  label,
  type,
  id,
  placeholder,
}) => {
  return (
    <div className="">
      <label className="block text-slate-700 font-bold " htmlFor={id}>
        {label}
      </label>
      <input
        className="bg-slate-50 p-2 text-[20px] text-slate-700 font placeholder:text-slate-500 rounded border border-slate-200 hover:border-slate-300 hover:border-2 focus:border-2 focus:outline-none focus:border-violet-600"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
