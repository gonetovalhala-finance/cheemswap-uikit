import React from "react";
import LegacySvg from "../LegacySvg";
import { LegacySvgProps } from "../types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 12 14">
      <path d="M.443 5.68c.068-.067.324-.356.562-.595C2.404 3.59 6.051 1.14 7.96.391 8.25.27 8.983.016 9.374 0c.376 0 .733.084 1.075.254.425.238.767.613.954 1.055.12.307.307 1.225.307 1.241.187 1.005.29 2.637.29 4.44 0 1.72-.103 3.285-.256 4.304-.018.017-.205 1.158-.41 1.549A2.148 2.148 0 019.443 14h-.068c-.51-.018-1.585-.46-1.585-.477-1.806-.75-5.37-3.079-6.801-4.627 0 0-.403-.398-.579-.647C.136 7.892 0 7.45 0 7.01c0-.494.153-.954.443-1.329z" />
    </LegacySvg>
  );
};

export default Icon;
