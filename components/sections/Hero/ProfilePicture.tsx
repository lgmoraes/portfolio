export const ProfilePicture = ({
  url,
  width,
  height,
}: {
  url: string;
  width: string;
  height: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 652 717`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="outer-hex"
        d="M269.14,15.115c34.908,-20.153 77.915,-20.153 112.823,0l212.728,122.819c34.908,20.154 56.412,57.4 56.412,97.708v245.638c0,40.307 -21.504,77.553 -56.412,97.707l-212.728,122.819c-34.908,20.154 -77.915,20.154 -112.823,0l-212.729,-122.819c-34.907,-20.154 -56.411,-57.4 -56.411,-97.707V235.642c0,-40.308 21.504,-77.554 56.411,-97.708l212.729,-122.819Z"
      />
      <g clipPath="url(#clip-outer-hex)">
        <rect
          id="back-fill"
          x="-37.78"
          y="-4.87"
          width="726.662"
          height="726.662"
          style={{ fill: 'url(#_Radial)' }}
        />
      </g>
      <path
        id="inner-hex"
        d="M276.365,59.089c30.437,-17.572 67.936,-17.572 98.373,0l185.483,107.089c30.437,17.573 49.187,50.048 49.187,85.194v214.178c0,35.145 -18.75,67.62 -49.187,85.193l-185.483,107.089c-30.437,17.573 -67.936,17.573 -98.373,0l-185.484,-107.089c-30.436,-17.573 -49.186,-50.048 -49.186,-85.193V251.372c0,-35.146 18.75,-67.621 49.186,-85.194l185.484,-107.089Z"
      />
      <image
        href={url}
        width="652"
        height="717"
        clipPath="url(#clip-inner-hex)"
        preserveAspectRatio="xMidYMid slice"
      />
      <defs>
        <clipPath id="clip-inner-hex">
          <use href="#inner-hex" />
        </clipPath>
        <clipPath id="clip-outer-hex">
          <use href="#outer-hex" />
        </clipPath>
        <radialGradient
          id="_Radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(463.603,463.603,-463.603,463.603,187.5,134.375)"
        >
          <stop offset="0" style={{ stopColor: '#00e049', stopOpacity: 1 }} />
          <stop offset="1" style={{ stopColor: '#003d72', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
    </svg>
  );
};
