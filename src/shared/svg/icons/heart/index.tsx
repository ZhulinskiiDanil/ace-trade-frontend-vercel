import styles from './styles/main.module.scss'
import clsx from "clsx";

// Types
import { SVGProps } from "react";

interface IHeartIcon extends SVGProps<SVGSVGElement> {
  active?: boolean
}

export const HeartIcon: React.FC<IHeartIcon> = ({
  active,
  className,
  fill = 'transparent',
  stroke = 'white',
  strokeWidth = 2,
  ...props
}) => {
  const classNames = clsx(className, styles.heart, {
    [styles.active]: active
  })
  
  return <div className={classNames}>
    <svg width="31" height="31" viewBox="0 0 31 31" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_2274_42)">
        <path
          d="M25.192 17.8953L15.817 27.1803L6.44203 17.8953M6.44203 17.8953C5.82366 17.2935 5.33658 16.5703 5.01146 15.7711C4.68634 14.9718 4.53023 14.114 4.55295 13.2514C4.57567 12.3889 4.77673 11.5404 5.14347 10.7594C5.51022 9.97845 6.0347 9.28184 6.68388 8.7135C7.33307 8.14516 8.09291 7.71739 8.91554 7.45713C9.73817 7.19687 10.6058 7.10975 11.4637 7.20128C12.3217 7.2928 13.1514 7.56097 13.9006 7.98891C14.6498 8.41684 15.3023 8.99528 15.817 9.68777C16.3339 9.0003 16.9872 8.42693 17.7359 8.00353C18.4846 7.58014 19.3126 7.31584 20.1682 7.22717C21.0237 7.13851 21.8884 7.2274 22.708 7.48826C23.5276 7.74913 24.2846 8.17637 24.9315 8.74323C25.5784 9.31009 26.1013 10.0044 26.4676 10.7826C26.8338 11.5609 27.0355 12.4064 27.0599 13.2662C27.0844 14.1259 26.9311 14.9815 26.6097 15.7793C26.2883 16.5772 25.8057 17.3001 25.192 17.9028"
          stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  </div>
}