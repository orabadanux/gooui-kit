"use client";
import React, { useState } from "react";
import { Button, Icon } from "gooui-kit";
import { IconDownload } from "@tabler/icons-react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("All");

  const tabs = [
    { label: "All" },
    { label: "Case studies" },
    { label: "Design" },
    { label: "Code" },
    { label: "3D" },
    { label: "Motion"},
  ];
  return (
    <div style={{ display: "flex", flexDirection:"column", gap:"128px", justifyContent:"center", alignItems:"center",padding: 32, backgroundColor: "#f5f5f5" }}>
      

     <Icon name="analytics" size={"size-900"} />
      <Button
            label="Click me"
            rightIcon={<IconDownload size={24} />}
            onClick={() => console.log("Clicked!")}
          />
    </div>
  );
}
