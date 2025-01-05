"use client";
import React, { useState } from "react";
import { Button, Icon, DynamicIsland, MenuBar } from "gooui-kit";
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
      <DynamicIsland
        collapsedContent={
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <img
              src="https://via.placeholder.com/20"
              alt=""
              style={{ borderRadius: "50%" }}
            />
            <span>Hi, I’m Oscar 👋🏻</span>
          </div>
        }
        expandedContent={
          <div>
            <h3>Hi, I’m Oscar 👋🏻</h3>
            <p>
              I’m a product designer from Barcelona. I create user-first
              experiences that are impactful, trusted by developers, and
              balanced with business goals.
            </p>
            <a href="#" style={{ color: "#4caf50", textDecoration: "none" }}>
              Let’s connect on LinkedIn →
            </a>
          </div>
        }
      />
      <MenuBar
        tabs={tabs}
        onSelectionChange={(label) => setSelectedTab(label)}
      />

      <button
        style={{
          marginTop: 20,
          padding: 10,
          fontSize: 16,
        }}
      >
        Selected Tab: {selectedTab}
      </button>
      <Button
            label="Download Resume"
            rightIcon={<IconDownload size={24} />}
            onClick={() => console.log("Download clicked!")}
          />
    </div>
  );
}
