import { useState } from 'react';
import Star from './Star';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
};

const starContainerStyle = {
  display: 'flex',
  // gap: '4px',
};

export default function StarRating({
  maxRating = 5,
  color = '#fcc419',
  size = 48,
  message = [],
}: {
  maxRating?: number;
  color?: string;
  size?: number;
  message?: string[];
}) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: number) {
    setRating(rating);
  }

  const textStyle = {
    lineHeight: '1',
    marging: '0',
    color,
    fontSize: `${size / 1.5}px`,
  };

  const starStyle = {
    height: `${size}px`,
    width: `${size}px`,
    display: 'block',
    cursor: 'pointer',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <span
              role="button"
              style={starStyle}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => setTempRating(i + 1)}
              onMouseLeave={() => setTempRating(0)}
            >
              <Star
                key={i}
                full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                color={color}
              />
            </span>
          ))}
        </div>
        <p style={textStyle}>
          {message.length === maxRating
            ? message[tempRating ? tempRating - 1 : -1]
            : tempRating || rating || ''}
        </p>
      </div>
    </>
  );
}
