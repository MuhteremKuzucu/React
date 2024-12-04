import React from "react";
import OgrenciItem from "./OgrenciItem";

const OgrenciList = () => {
  return (
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2024/05/31/14/46/ai-generated-8800717_1280.jpg"
        alt=""
        width="700px"
      />
      <h2 style={{ textAlign: "center", background: "pink" }}>
        ÖĞRENCİ LİSTESİ
      </h2>

      <OgrenciItem />
    </div>
  );
};

export default OgrenciList;
