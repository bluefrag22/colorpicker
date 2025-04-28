"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [selectedcolor, setSelectedColor] = useState("#000000");
  const [selectedcolor2, setSelectedColor2] = useState("#000000");

  const handlechnages = () => {};

  return (
    <div style={{ backgroundColor: selectedcolor }} className="h-screen">
      <h1>pick your color </h1>
      <input
        type="color"
        value={selectedcolor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />

      <audio controls>
        <source src="audio-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div style={{ backgroundColor: selectedcolor2 }} className="h-30 rounded-2xl p-4">
        <h1>pick your color 2</h1>
        <input
          type="color"
          value={selectedcolor2}
          onChange={(e) => setSelectedColor2(e.target.value)}
        />
      </div>

      <button onClick={handlechnages}> change color </button>
    </div>
  );
}
