import { useState } from "react"
import { cn } from "@/lib/utils"

// Array of vibrant colors for random selection
const colors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
  "text-orange-500",
  "text-teal-500",
  "text-cyan-500",
]

export function CustomTooltip({ title, children, className }) {
  const [showTooltip, setShowTooltip] = useState(false)

  // Select a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div
          className={cn(
            "fixed z-[9999] px-3 py-2 text-sm rounded-md shadow-lg pointer-events-none",
            "bg-white border border-gray-200 dark:bg-black dark:border-gray-700",
          )}
          style={{
            left: "50%",
            bottom: "100%",
            transform: "translateX(-50%) translateY(-8px)",
            position: "absolute",
            zIndex: 9999,
          }}
        >
          <span className={cn("font-medium whitespace-nowrap", randomColor)}>{title}</span>
          <div className="absolute w-2 h-2 rotate-45 -translate-x-1/2 left-1/2 top-full -mt-1 bg-inherit border-r border-b dark:border-gray-700 border-gray-200"></div>
        </div>
      )}
    </div>
  )
}
