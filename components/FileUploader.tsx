"use client";
import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={200}
          height={200}
          alt="uploaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={100}
            height={100}
            alt="upload"
            className='max-h-[300px] w-[300px'
          />
          <div className="file-upload_label flex items-center space-x-2">
            <Image
              src="/assets/icons/camera.svg"
              width={20}
              height={20}
              alt="upload"
            />
            <p className="text-base text-[#4169E1] font-semibold">Upload Image</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
