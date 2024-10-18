"use client";
import React from "react";

import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { FileUpload } from "./ui/file-upload";
import { Button } from "./ui/button";

const AddImages = ({ text }) => {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };
  return (
    <>
      <Modal>
        <ModalTrigger>
          <div
            className={`fixed flex items-center rounded-full h-[50px] z-50 bottom-7 right-11 bg-transparent backdrop-blur-3xl text-white border border-neutral-700 hover:bg-neutral-900 gap-3 px-2`}
          >
            <PlusCircle />
            <h1>{text}</h1>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
              <FileUpload onChange={handleFileUpload} />
            </div>
          </ModalContent>
          <ModalFooter>
            <Button onClick={handleFileUpload}>Upload</Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddImages;

