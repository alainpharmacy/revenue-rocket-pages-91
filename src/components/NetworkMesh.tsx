import { motion } from "framer-motion";

const NetworkMesh = () => {
  // Generate random dots and lines for the network mesh
  const dots = [
    { cx: 85, cy: 15, r: 2 },
    { cx: 92, cy: 25, r: 1.5 },
    { cx: 78, cy: 35, r: 2.5 },
    { cx: 95, cy: 45, r: 1.5 },
    { cx: 88, cy: 55, r: 2 },
    { cx: 75, cy: 20, r: 1.5 },
    { cx: 98, cy: 10, r: 2 },
    { cx: 82, cy: 50, r: 1.5 },
    { cx: 90, cy: 65, r: 2 },
    { cx: 70, cy: 45, r: 1.5 },
    { cx: 96, cy: 70, r: 2 },
    { cx: 80, cy: 75, r: 1.5 },
    { cx: 65, cy: 60, r: 2 },
    { cx: 72, cy: 80, r: 1.5 },
    { cx: 88, cy: 85, r: 2 },
    { cx: 60, cy: 30, r: 1.5 },
    { cx: 55, cy: 50, r: 1 },
    { cx: 50, cy: 70, r: 1 },
  ];

  const lines = [
    [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [6, 0],
    [7, 4], [8, 4], [9, 2], [10, 8], [11, 8], [12, 9],
    [13, 11], [14, 10], [5, 15], [15, 2], [16, 9], [16, 12],
    [17, 13], [17, 16], [1, 3], [6, 1], [7, 9], [11, 14],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute right-0 top-0 w-[60%] h-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMaxYMid slice"
      >
        {/* Glowing lines */}
        {lines.map(([from, to], i) => (
          <motion.line
            key={`line-${i}`}
            x1={dots[from].cx}
            y1={dots[from].cy}
            x2={dots[to].cx}
            y2={dots[to].cy}
            stroke="hsl(42 100% 50%)"
            strokeWidth="0.15"
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.05 }}
          />
        ))}
        {/* Dots */}
        {dots.map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill="hsl(42 100% 50%)"
            fillOpacity="0.6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.04 }}
          />
        ))}
      </svg>

      {/* Sweeping golden arc lines */}
      <svg
        className="absolute right-0 bottom-0 w-[70%] h-[60%] opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMaxYMax slice"
      >
        <motion.path
          d="M 100 100 Q 60 80 30 100"
          stroke="hsl(42 100% 50%)"
          strokeWidth="0.3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M 100 90 Q 65 65 40 95"
          stroke="hsl(42 100% 55%)"
          strokeWidth="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
        <motion.path
          d="M 100 80 Q 70 55 50 85"
          stroke="hsl(42 100% 60%)"
          strokeWidth="0.15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.1 }}
        />
      </svg>
    </div>
  );
};

export default NetworkMesh;
