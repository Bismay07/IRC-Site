"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { PlaceholdersAndVanishInput } from "@/components/ui/PlaceholdersAndVanishInput";
import React from "react";

const TopNav = () => {
  const placeholders = ["Transaction", "Events", "Images", "Members"];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex justify-between">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="flex justify-center items-center hover:cursor-pointer">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TopNav;
