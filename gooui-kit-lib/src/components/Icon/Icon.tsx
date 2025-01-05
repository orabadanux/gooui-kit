/** @jsxImportSource @emotion/react */
import React from "react";
import { css, SerializedStyles } from "@emotion/react";
import { icons } from "../../tokens/icons";
import { colors } from "../../tokens/colors";
import { strokeSizes, strokeWidths } from "../../tokens/strokeSizes";
import { sizes } from "../../tokens/sizes";

export interface IconProps {
  name: keyof typeof icons;         // Name of the icon in your icons object
  size?: keyof typeof strokeSizes;  // Controls stroke size token (default: 'size-300')
  fillColor?: keyof typeof colors;  // Override fill color
  strokeColor?: keyof typeof colors;// Override stroke color
  customStyles?: SerializedStyles;  // Emotion's CSS prop
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = "size-300", // Default size token
  fillColor,
  strokeColor,
  customStyles,
}) => {
  const icon = icons[name];

  // If icon not found, fail gracefully
  if (!icon) {
    console.error(`Icon "${name}" not found in icons token.`);
    return null;
  }

  // Decide final fill color. If the icon has a fill and we passed a fillColor, use it.
  // Otherwise fall back to the icon’s default fill color (if it exists), or "none".
  const resolvedFillColor =
    fillColor ||
    (icon.hasFill && icon.fillColor ? colors[icon.fillColor] : "none");

  // Decide final stroke color. If the icon has a stroke and we passed a strokeColor, use it.
  // Otherwise fall back to the icon’s default stroke color (if it exists), or "none".
  const resolvedStrokeColor =
    strokeColor ||
    (icon.hasStroke && icon.strokeColor ? colors[icon.strokeColor] : "none");

  // Convert our "size" prop (e.g., 'size-300') to a stroke size token
  const strokeToken = strokeSizes[size];
  const resolvedStrokeWidth =
    strokeWidths[strokeToken] || strokeWidths["strokeSize-25"];

  // For the <svg> width/height, we can also map 'size-300' to a numeric px value from your tokens
  const sizeValue = sizes[size] || sizes["size-300"];

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
      <path d={icon.path} />
    </svg>
  );
};
