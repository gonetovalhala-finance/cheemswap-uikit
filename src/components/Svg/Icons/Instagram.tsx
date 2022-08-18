/** @jsxImportSource theme-ui */
import React from "react";
import { SvgProps, rotation } from "./types";

const Instagram: React.FC<SvgProps> = ({ direction = "right", color = "white", width, getStyles }) => {
  const deg: rotation = {
    left: 180,
    up: 270,
    right: 0,
    down: 90,
  };
  const style = getStyles({
    degree: deg[direction as keyof rotation],
    color,
  });

  return (
    <svg width={width || "28"} viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg" sx={style}>
      <path
        d="M13.0076 3.3375C16.4831 3.3375 16.8947 3.35275 18.2615 3.41372C19.5318 3.46961 20.2177 3.68302 20.675 3.86086C21.2797 4.09459 21.7166 4.37913 22.1688 4.83135C22.6261 5.28865 22.9056 5.72054 23.1393 6.32519C23.3172 6.78249 23.5306 7.47352 23.5865 8.73872C23.6474 10.1106 23.6627 10.5222 23.6627 13.9926C23.6627 17.4681 23.6474 17.8796 23.5865 19.2464C23.5306 20.5167 23.3172 21.2027 23.1393 21.66C22.9056 22.2646 22.6211 22.7016 22.1688 23.1538C21.7115 23.6111 21.2797 23.8906 20.675 24.1243C20.2177 24.3021 19.5267 24.5155 18.2615 24.5714C16.8896 24.6324 16.478 24.6476 13.0076 24.6476C9.53215 24.6476 9.12058 24.6324 7.75376 24.5714C6.48349 24.5155 5.79754 24.3021 5.34024 24.1243C4.73559 23.8906 4.29861 23.606 3.84639 23.1538C3.3891 22.6965 3.10963 22.2646 2.8759 21.66C2.69807 21.2027 2.48466 20.5116 2.42877 19.2464C2.36779 17.8745 2.35255 17.463 2.35255 13.9926C2.35255 10.5171 2.36779 10.1055 2.42877 8.73872C2.48466 7.46844 2.69807 6.78249 2.8759 6.32519C3.10963 5.72054 3.39418 5.28357 3.84639 4.83135C4.30369 4.37405 4.73559 4.09459 5.34024 3.86086C5.79754 3.68302 6.48857 3.46961 7.75376 3.41372C9.12058 3.35275 9.53215 3.3375 13.0076 3.3375ZM13.0076 0.995117C9.47626 0.995117 9.0342 1.01036 7.64706 1.07133C6.265 1.13231 5.31483 1.35588 4.49169 1.67598C3.63299 2.01134 2.90639 2.45339 2.18487 3.17999C1.45828 3.90151 1.01622 4.62811 0.680868 5.48173C0.360758 6.30995 0.13719 7.25503 0.0762165 8.63709C0.0152433 10.0293 0 10.4714 0 14.0027C0 17.5341 0.0152433 17.9762 0.0762165 19.3633C0.13719 20.7454 0.360758 21.6955 0.680868 22.5187C1.01622 23.3774 1.45828 24.104 2.18487 24.8255C2.90639 25.547 3.63299 25.9941 4.48661 26.3244C5.31483 26.6445 6.25992 26.8681 7.64198 26.9291C9.02912 26.99 9.47117 27.0053 13.0025 27.0053C16.5339 27.0053 16.976 26.99 18.3631 26.9291C19.7452 26.8681 20.6953 26.6445 21.5185 26.3244C22.3721 25.9941 23.0987 25.547 23.8202 24.8255C24.5417 24.104 24.9889 23.3774 25.3191 22.5237C25.6392 21.6955 25.8628 20.7504 25.9238 19.3684C25.9848 17.9812 26 17.5392 26 14.0078C26 10.4765 25.9848 10.0344 25.9238 8.64726C25.8628 7.2652 25.6392 6.31503 25.3191 5.49189C24.999 4.6281 24.557 3.90151 23.8304 3.17999C23.1089 2.45847 22.3823 2.01134 21.5286 1.68107C20.7004 1.36096 19.7553 1.13739 18.3733 1.07641C16.981 1.01036 16.539 0.995117 13.0076 0.995117Z"
        fill="#4D4040"
      />
      <path
        d="M13.0078 7.32129C9.31894 7.32129 6.32617 10.3141 6.32617 14.0029C6.32617 17.6918 9.31894 20.6846 13.0078 20.6846C16.6967 20.6846 19.6895 17.6918 19.6895 14.0029C19.6895 10.3141 16.6967 7.32129 13.0078 7.32129ZM13.0078 18.3371C10.6146 18.3371 8.67364 16.3961 8.67364 14.0029C8.67364 11.6097 10.6146 9.66876 13.0078 9.66876C15.401 9.66876 17.342 11.6097 17.342 14.0029C17.342 16.3961 15.401 18.3371 13.0078 18.3371Z"
        fill="#4D4040"
      />
      <path
        d="M21.5134 7.05697C21.5134 7.92076 20.8122 8.61687 19.9535 8.61687C19.0897 8.61687 18.3936 7.91568 18.3936 7.05697C18.3936 6.19318 19.0947 5.49707 19.9535 5.49707C20.8122 5.49707 21.5134 6.19826 21.5134 7.05697Z"
        fill="#4D4040"
      />
    </svg>
  );
};

export default Instagram;
