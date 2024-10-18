"use client";
import React from "react";
import logo from "../components/IRC_Logo.png";
import Image from "next/image";
const IRCLogo = ({ height, width }) => {
  return <Image src={logo} width={width} height={height} />;
};

export default IRCLogo;
