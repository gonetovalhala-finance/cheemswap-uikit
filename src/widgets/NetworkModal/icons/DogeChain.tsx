import React from "react";
import LegacySvg from "../../../components/Svg/LegacySvg";
import { LegacySvgProps } from "../../../components/Svg/types";

const Icon: React.FC<LegacySvgProps> = (props) => {
  return (
    <LegacySvg viewBox="0 0 38.4 33.5" {...props}>
      <image id="image0_5_9" width="38.4" height="33.5" xlinkHref="data:image/png;base64,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"/>
    </LegacySvg>
  );
};

export default Icon;