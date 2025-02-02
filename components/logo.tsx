export function Logo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      {/* Background */}
      <rect
        width="44"
        height="44"
        rx="12"
        className="fill-primary/5"
      />
      
      {/* Letter S */}
      <path
        d="M15 16c0-1.1046.8954-2 2-2h4c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2h-4v2h4c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2h-4c-1.1046 0-2-.8954-2-2"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* House */}
      <path
        d="M25 14l8 7v11h-3v-5h-4v5h-3V21l2-1.75"
        className="fill-primary"
      />
    </svg>
  )
} 