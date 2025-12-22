'use client';
import { useState } from 'react';
import { OptimalLayout } from './OptimalLayout';
import { motion } from 'motion/react';
import { range } from 'lodash';
import './styles.css';

function OptimalSpaceExample({}) {
  const [numItems, setNumItems] = useState(75);
  const [spacing, setSpacing] = useState(5);
  const [width, setWidth] = useState(900);
  const [height, setHeight] = useState(300);
  function handleNumItems(event: React.ChangeEvent<HTMLInputElement>) {
    setNumItems(Number(event.target.value));
  }

  function handleSpacingInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSpacing(Number(event.target.value));
  }

  const updateWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(event.target.value));
  };

  const updateHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };
  return (
    <div className="bg-[#292D3E] w-fit p-6 rounded-lg">
      <h1 className="text-white">Calculate Optimal Size of Square Items </h1>
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
            step={10}
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
        width={width}
        height={height}
        horizontalSpacing={spacing}
        verticalSpacing={2}
      >
        {range(numItems).map((item: number, index: number) => {
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
