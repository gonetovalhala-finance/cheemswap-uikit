import React from "react";
import styled from "styled-components";
import { LegacySvgProps } from "../../../components/Svg/types";

interface LogoProps extends LegacySvgProps {
  isDark: boolean;
}
const StyledLogo = styled.h1`
  font-family: "Quicksand", san-serif;
  color: #af6e5a;
  font-weight: 400;
  font-size: 20px;
  margin-left: 8px;
`;

const Logo: React.FC<LogoProps> = () => {
  return <StyledLogo>Cheems Finance</StyledLogo>;
};

export default Logo;
