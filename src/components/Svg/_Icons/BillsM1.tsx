import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const BillsM1: React.FC<LegacySvgProps> = ({ color, bgColor, ...props }) => {
  return (
    <LegacySvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 53" {...props}>
      <rect width="45.294" height="45.294" x="1" y="6" fill={bgColor} stroke={color} strokeWidth="2" rx="22.647" />
      <circle cx="18" cy="29" r="10" fill={color} />
      <circle cx="31" cy="29" r="11" fill={color} stroke={bgColor} strokeWidth="2" />
      <path
        fill={bgColor}
        d="M20.638 30.789c0 .381-.099.74-.297 1.078-.19.33-.476.605-.858.825-.374.213-.817.337-1.33.374v.891h-.705v-.902c-.733-.066-1.323-.286-1.77-.66-.448-.381-.679-.895-.694-1.54h1.65c.044.528.316.847.814.957v-2.101a9.666 9.666 0 01-1.276-.396 2.062 2.062 0 01-.836-.638c-.234-.293-.352-.693-.352-1.199 0-.638.228-1.159.682-1.562.462-.403 1.056-.634 1.782-.693v-.891h.704v.891c.704.059 1.265.271 1.683.638.426.367.664.873.715 1.518h-1.66a.979.979 0 00-.232-.55.992.992 0 00-.506-.341v2.079c.55.14.983.275 1.298.407.323.125.602.334.836.627.235.286.352.682.352 1.188zm-4.048-3.388c0 .242.074.44.22.594.147.147.36.268.638.363v-1.903c-.264.037-.473.136-.627.297-.154.161-.23.378-.23.649zm1.562 4.433c.279-.051.495-.165.65-.341a.91.91 0 00.241-.638.768.768 0 00-.23-.583c-.155-.147-.375-.268-.66-.363v1.925zM33.638 30.789c0 .381-.099.74-.297 1.078-.19.33-.476.605-.858.825-.374.213-.817.337-1.33.374v.891h-.705v-.902c-.733-.066-1.323-.286-1.77-.66-.448-.381-.679-.895-.694-1.54h1.65c.044.528.316.847.814.957v-2.101a9.666 9.666 0 01-1.276-.396 2.062 2.062 0 01-.836-.638c-.234-.293-.352-.693-.352-1.199 0-.638.228-1.159.682-1.562.462-.403 1.056-.634 1.782-.693v-.891h.704v.891c.704.059 1.265.271 1.683.638.426.367.664.873.715 1.518h-1.66a.979.979 0 00-.232-.55.992.992 0 00-.506-.341v2.079c.55.14.983.275 1.298.407.323.125.602.334.836.627.235.286.352.682.352 1.188zm-4.048-3.388c0 .242.074.44.22.594.147.147.36.268.638.363v-1.903c-.264.037-.473.136-.627.297-.154.161-.23.378-.23.649zm1.562 4.433c.279-.051.495-.165.65-.341a.91.91 0 00.241-.638.768.768 0 00-.23-.583c-.155-.147-.375-.268-.66-.363v1.925z"
      />
      <rect width="17.765" height="17.765" x="30" y="1" fill={bgColor} stroke={color} strokeWidth="2" rx="8.882" />
      <path fill={color} d="M37.142 6.989V4.922h3.601v9.49H38.43V6.989h-1.287z" />
    </LegacySvg>
  );
};

export default BillsM1;
