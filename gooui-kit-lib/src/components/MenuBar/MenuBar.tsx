/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { colors } from "../../tokens/colors";
import { sizes } from "../../tokens/sizes";
import { fontStyles } from "../../tokens/typography";
import { borderRadius } from "../../tokens/border";

interface TabItem {
  label: string;
  icon?: React.ReactNode;
}

interface MenuBarProps {
  tabs: TabItem[];
  onSelectionChange?: (label: string) => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ tabs, onSelectionChange }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onSelectionChange?.(tabs[index].label);
  };

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 12px;
        position: relative;
        filter: url(#gooey-tabs);
      `}
    >
      <UnifiedBlock
        tabs={tabs.slice(0, selectedIndex ?? tabs.length)}
        onSelect={handleSelect}
        isLeft={true}
      />

      {selectedIndex !== null && (
        <SelectedTab
          tab={tabs[selectedIndex]}
          onSelect={() => handleSelect(selectedIndex)}
        />
      )}

      <UnifiedBlock
        tabs={tabs.slice((selectedIndex ?? tabs.length) + 1)}
        onSelect={(index) =>
          handleSelect((selectedIndex ?? 0) + 1 + index)
        }
        isLeft={false}
      />
    </div>
  );
};

const UnifiedBlock: React.FC<{
  tabs: TabItem[];
  isLeft: boolean;
  onSelect: (index: number) => void;
}> = ({ tabs, isLeft, onSelect }) => {
  if (tabs.length === 0) return null;

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        background-color: ${colors["color-background-primary-01-default"]};
        border-radius: ${borderRadius["borderRadius-circle"]}px;
        gap: 8px;
        filter: url(#gooey-tabs);
      `}
    >
      {tabs.map((tab, index) => (
        <SingleTab
          key={index}
          label={tab.label}
          icon={tab.icon}
          isSelected={false}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

const SelectedTab: React.FC<{
  tab: TabItem;
  onSelect: () => void;
}> = ({ tab, onSelect }) => (
  <div
    css={css`
      margin: 0 8px;
    `}
  >
    <SingleTab
      label={tab.label}
      icon={tab.icon}
      isSelected={true}
      onClick={onSelect}
    />
  </div>
);

const SingleTab: React.FC<{
  label: string;
  icon?: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}> = ({ label, icon, isSelected, onClick }) => (
  <motion.button
    type="button"
    css={css`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px;
      background-color: ${isSelected
        ? colors["color-background-primary-02-default"]
        : colors["color-background-primary-01-default"]};
      color: ${isSelected
        ? colors["color-fill-text-primary-01-default"]
        : colors["color-fill-text-primary-01-default"]};
      font-family: ${fontStyles["body-md-medium"].fontFamily};
      font-weight: ${fontStyles["body-md-medium"].fontWeight};
      font-size: ${fontStyles["body-md-medium"].fontSize}px;
      border-radius: ${borderRadius["borderRadius-circle"]}px;
      border: none;
      cursor: pointer;
      transition: transform 0.3s, background-color 0.3s;
      filter: url(#gooey-tabs);
      gap: 8px;

      &:hover {
        ${isSelected ? `background-color: ${colors["color-background-primary-02-hover"]};` : ''}
        transform: scale(1.05);
      }
    `}
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    <span>{label}</span>
  </motion.button>
);
