import React, { FC } from "react";
import { Icon, IconType } from "../../Icon/Icon";

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
    <div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="drop"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded"
        >
          <Icon type={IconType.upload} color="#64748B" />
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <input
        className="bg-slate-50 p-2 text-[20px] text-slate-700 font placeholder:text-slate-500 rounded border border-slate-200 hover:border-slate-300 hover:border-2 focus:border-2 focus:outline-none focus:border-violet-600"
        type="file"
        placeholder="...oder Datei auswählen"
      />
    </div>
  );
};
