import { useState, useRef } from 'react';
import { random } from 'lodash';
import { lightenColor } from '../utils/colorUtils';
import './likeButton.css';

export const LikeButton = ({
  onLike = () => {},
  onUnlike = () => {},
  isLiked = false,
  size = 5,
  fillContainer = true,
  numParticles = 30,
  fadeDuration = 2000,
  disperseDuration = 1000,
  heartColor = '#ff6b6b',
  hueMin = 0,
  hueMax = 360,
  saturation = 80,
  luminence = 80,
  ...props
}) => {
  const [liked, setLiked] = useState(isLiked);
  const buttonRef = useRef(null);

  const handleClick = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);

    if (newLikedState) {
      onLike();
      explodeParticles(numParticles);
    } else {
      onUnlike();
    }
  };

  const explodeParticles = numParticles => {
    if (!buttonRef.current) return;

    for (let i = 0; i < numParticles; i++) {
      createParticle();
    }

    setTimeout(() => {
      for (let i = 0; i < numParticles; i++) {
        createParticle();
      }
    }, 200);
  };

  const createParticle = () => {
    if (!buttonRef.current) return;

    const particle = document.createElement('span');
    particle.classList.add('particle');

    // Random position
    const top = Math.random() * 94;
    const left = Math.random() * 94;
    particle.style.top = `${top}%`;
    particle.style.left = `${left}%`;
    particle.style.setProperty('--fade-duration', fadeDuration + 'ms');
    particle.style.setProperty('--disperse-duration', disperseDuration + 'ms');

    // Random color
    const hue = random(hueMin, hueMax);
    particle.style.background = `hsl(${hue}, ${saturation}%, ${luminence}%)`;

    buttonRef.current.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, fadeDuration);
  };

  return (
    <button
      ref={buttonRef}
      className={`like-button ${liked ? 'liked' : ''}`}
      onClick={handleClick}
      style={{
        '--heart-color': heartColor,
        '--heart-color-light': lightenColor(heartColor, 0.3),
      }}
      {...props}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3.68546 5.43796C8.61936 1.29159 11.8685 7.4309 12.0406 7.4309C12.2126 7.43091 15.4617 1.29159 20.3956 5.43796C26.8941 10.8991 13.5 21.8215 12.0406 21.8215C10.5811 21.8215 -2.81297 10.8991 3.68546 5.43796Z"
          stroke={heartColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};
