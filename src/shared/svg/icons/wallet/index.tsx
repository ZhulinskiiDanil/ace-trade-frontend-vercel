import { SVGProps } from "react";

export const WalletIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  fill, ...props
}) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd"
      d="M9 15C7.34315 15 6 16.3431 6 18V36C6 37.6569 7.34315 39 9 39H39C40.6569 39 42 37.6569 42 36V18C42 16.3431 40.6569 15 39 15H9ZM3 18C3 14.6863 5.68629 12 9 12H39C42.3137 12 45 14.6863 45 18V36C45 39.3137 42.3137 42 39 42H9C5.68629 42 3 39.3137 3 36V18Z"
      fill={fill || "white"} />
    <path fillRule="evenodd" clipRule="evenodd"
      d="M32.7344 4.60804C33.624 4.44079 34.5397 4.47079 35.4166 4.69601C36.2985 4.9225 37.1196 5.34085 37.8212 5.9212C38.5229 6.50156 39.0878 7.22961 39.4756 8.05342C39.8635 8.87723 40.0647 9.77649 40.065 10.687V13.5H37.065V10.688C37.065 10.6878 37.065 10.6877 37.065 10.6875C37.0648 10.2186 36.9611 9.75553 36.7614 9.33129C36.5616 8.90691 36.2706 8.53185 35.9091 8.23288C35.5477 7.9339 35.1247 7.71839 34.6704 7.60171C34.2161 7.48503 33.7416 7.47007 33.2808 7.55788C33.2713 7.55968 33.2619 7.56139 33.2524 7.56301L8.57799 11.7744C7.854 11.9154 7.20118 12.3033 6.73099 12.8719C6.25802 13.4439 5.9995 14.163 6 14.9053L6 19.5H3V14.9067C3 14.9066 3 14.9064 3 14.9063C2.99926 13.4659 3.50108 12.0703 4.41898 10.9602C5.33709 9.84984 6.6139 9.09468 8.0292 8.82497C8.03866 8.82317 8.04814 8.82146 8.05763 8.81984L32.7344 4.60804Z"
      fill={fill || "white"} />
    <path
      d="M34.5 30C33.9067 30 33.3266 29.8241 32.8333 29.4944C32.3399 29.1648 31.9554 28.6962 31.7284 28.1481C31.5013 27.5999 31.4419 26.9967 31.5576 26.4147C31.6734 25.8328 31.9591 25.2982 32.3787 24.8787C32.7982 24.4591 33.3328 24.1734 33.9147 24.0576C34.4967 23.9419 35.0999 24.0013 35.6481 24.2284C36.1962 24.4554 36.6648 24.8399 36.9944 25.3333C37.3241 25.8266 37.5 26.4067 37.5 27C37.5 27.7957 37.1839 28.5587 36.6213 29.1213C36.0587 29.6839 35.2957 30 34.5 30Z"
      fill={fill || "white"} />
  </svg>
)