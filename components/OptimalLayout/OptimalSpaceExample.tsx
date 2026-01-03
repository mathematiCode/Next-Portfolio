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
  const [numItemsError, setNumItemsError] = useState<string>('');
  const [spacingError, setSpacingError] = useState<string>('');
  const [widthError, setWidthError] = useState<string>('');
  const [heightError, setHeightError] = useState<string>('');

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
    const value = event.target.value;
    const numValue = Number(value);

    if (value === '') {
      setNumItems(value);
      setNumItemsError('');
    } else if (!isNaN(numValue)) {
      if (numValue < 0) {
        setNumItems(0);
        setNumItemsError('Number of items cannot be negative');
        setTimeout(() => setNumItemsError(''), 3000);
      } else {
        setNumItems(value);
        setNumItemsError('');
      }
    }
  }

  function handleSpacingInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const numValue = Number(value);

    if (value === '') {
      setSpacing(value);
      setSpacingError('');
    } else if (!isNaN(numValue)) {
      if (numValue < 0) {
        setSpacing(0);
        setSpacingError('Spacing cannot be negative');
        setTimeout(() => setSpacingError(''), 3000);
      } else {
        setSpacing(value);
        setSpacingError('');
      }
    }
  }

  const updateWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numValue = Number(value);

    if (value === '') {
      setWidth(value);
      setWidthError('');
    } else if (!isNaN(numValue)) {
      if (numValue < 0) {
        setWidth(0);
        setWidthError('Width cannot be negative');
        setTimeout(() => setWidthError(''), 3000);
      } else if (numValue > 1280) {
        setWidth(1280);
        setWidthError('Maximum width is 1280px');
        setTimeout(() => setWidthError(''), 3000);
      } else {
        setWidth(value);
        setWidthError('');
      }
    }
  };

  const updateHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numValue = Number(value);

    if (value === '') {
      setHeight(value);
      setHeightError('');
    } else if (!isNaN(numValue)) {
      if (numValue < 0) {
        setHeight(0);
        setHeightError('Height cannot be negative');
        setTimeout(() => setHeightError(''), 3000);
      } else {
        setHeight(value);
        setHeightError('');
      }
    }
  };
  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-[##292D3E] text-2xl mb-3">
        Try toggling the values below to see the algorithm in action
      </h2>
      <div className="inputs">
        <label htmlFor="num-items-input">
          Number of Items
          <input
            id="num-items-input"
            className="num-items-input"
            type="number"
            min={0}
            placeholder="number of items"
            value={numItems}
            onChange={event => handleNumItems(event)}
          />
          {numItemsError && (
            <span className="text-red-600 text-sm block mt-1">
              {numItemsError}
            </span>
          )}
        </label>
        <label htmlFor="spacing-input">
          Minimum Spacing
          <input
            id="spacing-input"
            className="spacing-input"
            type="number"
            step={1}
            min={0}
            placeholder="Spacing"
            value={spacing}
            onChange={event => handleSpacingInput(event)}
          />
          {spacingError && (
            <span className="text-red-600 text-sm block mt-1">
              {spacingError}
            </span>
          )}
        </label>
        <label htmlFor="width-input">
          Container Width
          <input
            id="width-input"
            step={10}
            min={0}
            max={1280}
            className="width-input"
            type="number"
            placeholder="width"
            value={width}
            onChange={event => updateWidth(event)}
          ></input>
          {widthError && (
            <span className="text-red-600 text-sm block mt-1">
              {widthError}
            </span>
          )}
        </label>
        <label htmlFor="height-input">
          Container Height
          <input
            id="height-input"
            className="height-input"
            type="number"
            step={10}
            min={0}
            placeholder="height"
            value={height}
            onChange={event => updateHeight(event)}
          />
          {heightError && (
            <span className="text-red-600 text-sm block mt-1">
              {heightError}
            </span>
          )}
        </label>
      </div>
      <OptimalLayout
        width={Number(width) || 0}
        height={Number(height) || 0}
        horizontalSpacing={Number(spacing) || 0}
        verticalSpacing={2}
        borderColor="#292D3E"
      >
        {range(Number(numItems) || 0).map((item: number, index: number) => {
          return (
            <motion.div layout className="item" key={index}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3.68546 5.43796C8.61936 1.29159 11.8685 7.4309 12.0406 7.4309C12.2126 7.43091 15.4617 1.29159 20.3956 5.43796C26.8941 10.8991 13.5 21.8215 12.0406 21.8215C10.5811 21.8215 -2.81297 10.8991 3.68546 5.43796Z"
                  stroke="crimson"
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
