/** @jsxImportSource @emotion/react */
import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/react";
import { motion, AnimatePresence } from "framer-motion";

interface DynamicIslandProps {
  collapsedContent: React.ReactNode;
  expandedContent: React.ReactNode;
  className?: string;
}

export const DynamicIsland: React.FC<DynamicIslandProps> = ({
  collapsedContent,
  expandedContent,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  const animationFrame = useRef(0);
  const BLOB_SIZE = 50;

  const collapsedCenter = { x: 100, y: 25 };

  const handleMouseEnter = () => {
    setIsContentVisible(false); // Hide collapsed content during expansion
    setTimeout(() => setIsExpanded(true), 200);
    setTimeout(() => setIsContentVisible(true), 400); // Show expanded content
  };

  const handleMouseLeave = () => {
    setIsContentVisible(false); // Hide expanded content during collapse
    setBlobPosition(collapsedCenter); // Snap blob to center
    setIsExpanded(false);

    setTimeout(() => setIsContentVisible(true), 100); // Show collapsed content
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mousePosition.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    if (!animationFrame.current) {
      animationFrame.current = requestAnimationFrame(() => {
        setBlobPosition({ ...mousePosition.current });
        animationFrame.current = 0;
      });
    }
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationFrame.current); // Cleanup
  }, []);

  const containerStyles = css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: visible;
    border-radius: 20px;
    background-color: #0e1117;
    color: #fff;
    transform-origin: top center;
    transition: all 0.4s ease;
    width: ${isExpanded ? "512px" : "200px"};
    height: ${isExpanded ? "150px" : "50px"};
    filter: url(#gooey);
  `;

  const blobStyles = css`
    position: absolute;
    width: ${BLOB_SIZE}px;
    height: ${BLOB_SIZE}px;
    background: #0e1117;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    left: 0;
    top: 0;
  `;

  const contentWrapper = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    box-sizing: border-box;
    opacity: ${isContentVisible ? 1 : 0};
    transition: opacity 0.2s ease;
    position: relative;
    z-index: 1;
  `;

  const outerWrapperStyles = css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  `;

  return (
    <>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
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

      <div css={outerWrapperStyles}>
        <motion.div
          className={className}
          css={containerStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                css={blobStyles}
                initial={{
                  scale: 0,
                  x: blobPosition.x - BLOB_SIZE / 2,
                  y: blobPosition.y - BLOB_SIZE / 2,
                }}
                animate={{
                  scale: 1.5,
                  x: blobPosition.x - BLOB_SIZE / 2,
                  y: blobPosition.y - BLOB_SIZE / 2,
                  transition: {
                    scale: {
                      type: "spring",
                      stiffness: 400,
                      damping: 60,
                    },
                    x: {
                      type: "spring",
                      stiffness: 400,
                      damping: 60,
                    },
                    y: {
                      type: "spring",
                      stiffness: 400,
                      damping: 60,
                    },
                  },
                }}
                exit={{
                  scale: 0,
                  x: collapsedCenter.x - BLOB_SIZE / 2,
                  y: collapsedCenter.y - BLOB_SIZE / 2,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
              />
            )}
          </AnimatePresence>

          <div css={contentWrapper}>
            {isExpanded ? expandedContent : collapsedContent}
          </div>
        </motion.div>
      </div>
    </>
  );
};
