export default function IconSun(props) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect fillRule="nonzero" x="0" y="0" width="24" height="24" />
      <g transform="translate(1,1)" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <circle strokeOpacity="0.4" cx="11" cy="11" r="5" />
        <path d="M11,0 L11,2" strokeOpacity="0.1" />
        <path d="M11,20 L11,22" strokeOpacity="0.1" />
        <path d="M3.22,3.22 L4.64,4.64" strokeOpacity="0.1" />
        <path d="M17.36,17.36 L18.78,18.78" strokeOpacity="0.1" />
        <path d="M0,11 L2,11" strokeOpacity="0.1" />
        <path d="M20,11 L22,11" strokeOpacity="0.1" />
        <path d="M3.22,18.78 L4.64,17.36" strokeOpacity="0.1" />
        <path d="M17.36,4.64 L18.78,3.22" strokeOpacity="0.1" />
      </g>
    </svg>
  );
} 