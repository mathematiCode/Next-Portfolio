'use client';
import { useState, useLayoutEffect } from 'react';
import { OptimalLayout } from './OptimalLayout';
import { motion } from 'motion/react';
import { range } from 'lodash';
import './styles.css';

function OptimalSpaceExample({}) {
  const [numItems, setNumItems] = useState<number | string>(75);
  const [spacing, setSpacing] = useState<number | string>(5);
  const [width, setWidth] = useState<number | string>(800);
  const [height, setHeight] = useState<number | string>(300);

  useLayoutEffect(() => {
    // Update width based on window size before paint to avoid visual flash
    // Runs synchronously after DOM mutations but before browser paint
    // This is a valid use case for useLayoutEffect: measuring browser APIs and updating state before paint
    if (window.innerWidth < 800) {
      setWidth(300);
    }
    // Note: The linter warns about setState in effects, but this is intentional:
    // useLayoutEffect is specifically designed for synchronous DOM measurements and immediate visual updates
  }, []);
  function handleNumItems(event: React.ChangeEvent<HTMLInputElement>) {
    setNumItems(event.target.value);
  }

  function handleSpacingInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    // Check if the string represents a valid non-negative number
    if (value === '' || (!isNaN(Number(value)) && Number(value) >= 0)) {
      setSpacing(value);
    } else {
      setSpacing(0);
    }
  }

  const updateWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(event.target.value);
  };

  const updateHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
  };
  return (
    <div className="bg-[#292D3E] p-6 rounded-lg">
      <h2 className="text-white text-2xl mb-3">
        Try toggling the values below to see the algorithm in action
      </h2>
      <div className="inputs">
        <label htmlFor="num-items-input">
          Number of Items
          <input
            id="num-items-input"
            className="num-items-input"
            type="number"
            placeholder="number of items"
            value={numItems}
            onChange={event => handleNumItems(event)}
          />
        </label>
        <label htmlFor="spacing-input">
          Minimum Spacing
          <input
            id="spacing-input"
            className="spacing-input"
            type="number"
            step={1}
            placeholder="Spacing"
            value={spacing}
            onChange={event => handleSpacingInput(event)}
          />
        </label>
        <label htmlFor="width-input">
          Container Width
          <input
            id="width-input"
            step={10}
            className="width-input"
            type="number"
            placeholder="width"
            value={width}
            onChange={event => updateWidth(event)}
          ></input>
        </label>
        <label htmlFor="height-input">
          Container Height
          <input
            id="height-input"
            className="height-input"
            type="number"
            placeholder="height"
            value={height}
            onChange={event => updateHeight(event)}
          />
        </label>
      </div>
      <OptimalLayout
        width={Number(width) || 0}
        height={Number(height) || 0}
        horizontalSpacing={Number(spacing) || 0}
        verticalSpacing={2}
        backgroundColor="#292D3E"
      >
        {range(Number(numItems) || 0).map((item: number, index: number) => {
          return (
            <motion.div layout className="item" key={index}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3.68546 5.43796C8.61936 1.29159 11.8685 7.4309 12.0406 7.4309C12.2126 7.43091 15.4617 1.29159 20.3956 5.43796C26.8941 10.8991 13.5 21.8215 12.0406 21.8215C10.5811 21.8215 -2.81297 10.8991 3.68546 5.43796Z"
                  stroke="pink"
                  fill="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          );
        })}
      </OptimalLayout>
    </div>
  );
}

export default OptimalSpaceExample;
