/** @jsxImportSource @emotion/react */

// Import necessary libraries and tokens.
import React, { useState } from "react";
import { css } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../Icon/Icon";
import { colors } from "../../tokens/colors";
import { sizes } from "../../tokens/sizes";
import { fontStyles } from "../../tokens/typography";
import { IconProps } from "../Icon/Icon";
import { borderRadius } from "../../tokens/border";
import * as TablerIcons from "@tabler/icons-react";

// Define the properties (props) for the Button component.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string; // The text label displayed on the button.
  leftIcon?: string | React.ReactNode; // Icon displayed on the left of the label.
  rightIcon?: string | React.ReactNode; // Icon displayed on the right of the label.
  state?: "default" | "hover" | "pressed" | "disabled"; // Current state of the button.
  onClick?: () => void; // Function called when the button is clicked.
}

// Define the Button component.
export const Button: React.FC<ButtonProps> = ({
  label,
  leftIcon,
  rightIcon,
  state = "default",
  onClick,
  ...rest
}) => {
  // Local state for hover, pressed, and mouse position (used for effects).
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Clean up unwanted event handlers from props.
  const {
    onAnimationStart: _omitAnim,
    onDrag: _omitDrag,
    onDragStart: _omitDragStart,
    onDragEnd: _omitDragEnd,
    ...cleanedProps
  } = rest;

  // Calculate the mouse position relative to the button for dynamic effects.
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };
  
  // Determine the current button state based on props and interactions.
  const currentState =
    state === "disabled"
      ? "disabled"
      : state || (isPressed ? "pressed" : isHovered ? "hover" : "default");
  
  // Define styles for each state of the button.
  const states = {
    default: {
      backgroundColor: colors["color-background-primary-01-default"],
      fontColor: colors["color-fill-text-primary-01-default"],
      iconColor: colors["color-fill-icon-primary-01-default"],
      paddingHorizontal: sizes["size-100"],
      paddingVertical: sizes["size-50"],
      gap: sizes["size-50"],
    },
    hover: {
      backgroundColor: colors["color-background-primary-01-hover"],
      fontColor: colors["color-fill-text-primary-01-hover"],
      iconColor: colors["color-fill-icon-primary-01-hover"],
      paddingHorizontal: sizes["size-100"],
      paddingVertical: sizes["size-50"],
      gap: sizes["size-50"],
    },
    pressed: {
      backgroundColor: colors["color-background-primary-01-pressed"],
      fontColor: colors["color-fill-text-primary-01-pressed"],
      iconColor: colors["color-fill-icon-primary-01-pressed"],
      paddingHorizontal: sizes["size-100"],
      paddingVertical: sizes["size-50"],
      gap: sizes["size-50"],
    },
    disabled: {
      backgroundColor: colors["color-background-primary-01-disabled"],
      fontColor: colors["color-fill-text-primary-01-disabled"],
      iconColor: colors["color-fill-icon-primary-01-disabled"],
      paddingHorizontal: sizes["size-100"],
      paddingVertical: sizes["size-50"],
      gap: sizes["size-50"],
    },
  };

  const currentStyle = states[currentState];
  const blobSize = 50; // Size of the blob hover effect.

  // CSS styles for the button.
  const buttonStyles = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${currentStyle.fontColor};
    font-family: ${fontStyles["body-md-medium"].fontFamily};
    font-weight: ${fontStyles["body-md-medium"].fontWeight};
    font-size: ${fontStyles["body-md-medium"].fontSize}px;
    line-height: ${fontStyles["body-md-medium"].lineHeight};
    gap: ${currentStyle.gap}px;
    cursor: ${state === "disabled" ? "not-allowed" : "pointer"};
    opacity: ${state === "disabled" ? 0.6 : 1};
    border: none;
    outline: none;
    overflow: visible;
    filter: url(#gooey);
    transition: color 0.3s ease;
    padding: ${currentStyle.paddingVertical}px
      ${currentStyle.paddingHorizontal}px;
    background-color: ${currentStyle.backgroundColor};
    border-radius: ${borderRadius["borderRadius-circle"]};
  `;

  // Styles for hover effects (blob).
  const blobStyles = css`
    position: absolute;
    width: ${blobSize}px;
    height: ${blobSize}px;
    background: ${isPressed
      ? colors["color-background-primary-01-pressed"]
      : colors["color-background-primary-01-hover"]};
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    transform: translate(-50%, -50%);
    filter: ${isPressed ? "blur(5px)" : "none"};
    box-shadow: none;
    transition: background 0.3s ease;
  `;

  // Styles for the content (label and icons) inside the button.
  const contentStyles = css`
    position: relative;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: ${sizes["size-50"]}px;
    color: ${isPressed ? states["pressed"].fontColor : currentStyle.fontColor};
  `;

  interface TablerIconProps {
    size?: number;
    stroke?: string;
    strokeWidth?: number;
  }
  
  // Helper function to render left or right icons.
  const renderIcon = (icon: string | React.ReactNode, isPressed: boolean) => {
    if (React.isValidElement(icon)) {
      return React.cloneElement(icon as React.ReactElement<any>, {
        style: {
          color: isPressed
            ? states.pressed.iconColor
            : currentStyle.iconColor,
          width: "24px",
          height: "24px",
          ...(icon.props?.style || {}),
        },
      });
    }
  
    if (typeof icon === "string") {
      const TablerIcon = (TablerIcons as any)[icon];
      if (TablerIcon) {
        return (
          <TablerIcon
            size={24}
            color={isPressed ? states.pressed.iconColor : currentStyle.iconColor}
          />
        );
      }
  
      return (
        <Icon
          name={icon}
          size="size-300"
          fillColor={
            isPressed
              ? "color-fill-icon-primary-01-pressed" as keyof typeof colors
              : currentStyle.iconColor as keyof typeof colors
          }
          strokeColor={
            isPressed
              ? "color-fill-icon-primary-01-pressed" as keyof typeof colors
              : currentStyle.iconColor as keyof typeof colors
          }
        />
      );
    }
  
    return null;
  };
  
  // Render the button component.
  return (
    <>
      {/* Invisible SVG blob for hover effects */}
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 30 -10
              "
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      <motion.button
        css={buttonStyles}
        onClick={state !== "disabled" ? onClick : undefined}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          padding: `${currentStyle.paddingVertical}px ${currentStyle.paddingHorizontal}px`,
          backgroundColor: currentStyle.backgroundColor,
          borderRadius: borderRadius["borderRadius-circle"],
        }}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        {...cleanedProps}
      >
        <AnimatePresence>
          {/* Blob effect on hover */}
          {isHovered && (
            <motion.div
              css={blobStyles}
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
              }}
              animate={{
                scale: 1,
                translateX: `-${blobSize / 2}px`,
                translateY: `-${blobSize / 2}px`,
              }}
              initial={{
                scale: 0,
              }}
              exit={{
                scale: 0,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 60,
              }}
            />
          )}
        </AnimatePresence>

        {/* Content of the button */}
        <div css={contentStyles}>
          {leftIcon && renderIcon(leftIcon, isPressed)}

          {label}

          {rightIcon && renderIcon(rightIcon, isPressed)}
        </div>
      </motion.button>
    </>
  );
};