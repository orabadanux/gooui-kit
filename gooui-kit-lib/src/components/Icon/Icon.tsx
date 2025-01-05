/** @jsxImportSource @emotion/react */

// Import necessary libraries and tokens.
import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import { icons } from "../../tokens/icons";
import { colors } from "../../tokens/colors";
import { strokeSizes, strokeWidths } from "../../tokens/strokeSizes";
import { sizes } from "../../tokens/sizes";

// Define properties (props) for the Icon component.
export interface IconProps {
  name: keyof typeof icons; // Name of the icon to render (key from icons token).
  size?: keyof typeof strokeSizes; // Size of the icon (default: "size-300").
  fillColor?: keyof typeof colors; // Optional fill color for the icon.
  strokeColor?: keyof typeof colors; // Optional stroke color for the icon.
  customStyles?: SerializedStyles; // Optional custom styles for the icon.
}

// Define the Icon component.
export const Icon: React.FC<IconProps> = ({
  name,
  size = "size-300",
  fillColor,
  strokeColor,
  customStyles,
}) => {
  // Retrieve the icon data from the icons token.
  const icon = icons[name];


  if (!icon) {
    // If the icon is not found, log an error and return null.
    console.error(`Icon "${name}" not found in icons token.`);
    return null;
  }

  // Resolve the fill color for the icon.
  const resolvedFillColor =
    fillColor ||
    (icon.hasFill && icon.fillColor ? colors[icon.fillColor] : "none");

  // Resolve the stroke color for the icon.
  const resolvedStrokeColor =
    strokeColor ||
    (icon.hasStroke && icon.strokeColor ? colors[icon.strokeColor] : "none");

  // Map the size token to an actual size value.
  const strokeToken = strokeSizes[size];
  const resolvedStrokeWidth =
    strokeWidths[strokeToken] || strokeWidths["strokeSize-25"];

  const sizeValue = sizes[size] || sizes["size-300"];

  // Render the SVG element for the icon.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icon.viewBox}
      width={sizeValue}
      height={sizeValue}
      fill={icon.hasFill ? resolvedFillColor : "none"}
      stroke={icon.hasStroke ? resolvedStrokeColor : "none"}
      strokeWidth={icon.hasStroke ? resolvedStrokeWidth : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
      css={customStyles}
    >
      {/* The SVG path defines the shape of the icon. */}
      <path d={icon.path} />
    </svg>
  );
};
