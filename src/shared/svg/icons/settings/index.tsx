import { SVGProps } from "react";

export const SettingsIcon: React.FC<SVGProps<SVGSVGElement>> = ({
  fill, ...props
}) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M24.1331 14.6667C18.9331 14.6667 14.7998 18.8 14.7998 24C14.7998 29.2 18.9331 33.3334 24.1331 33.3334C29.3331 33.3334 33.4665 29.2 33.4665 24C33.4665 18.8 29.3331 14.6667 24.1331 14.6667ZM24.1331 30.6667C20.3998 30.6667 17.4665 27.7334 17.4665 24C17.4665 20.2667 20.3998 17.3334 24.1331 17.3334C27.8665 17.3334 30.7998 20.2667 30.7998 24C30.7998 27.7334 27.8665 30.6667 24.1331 30.6667Z"
      fill={fill || "white"} />
    <path
      d="M43.7332 19.6L39.9998 18.4L39.1998 16.4L41.0665 12.9334C41.4665 12.1334 41.3332 11.0667 40.6665 10.4L37.4665 7.20002C36.7998 6.53335 35.7332 6.40002 34.9332 6.80002L31.4665 8.66669L29.4665 7.86669L28.2665 4.13335C27.9998 3.33335 27.1998 2.66669 26.2665 2.66669H21.7332C20.7998 2.66669 19.9998 3.33335 19.8665 4.26669L18.6665 8.00002C17.8665 8.13335 17.1998 8.40002 16.5332 8.80002L13.0665 6.93335C12.2665 6.53335 11.1998 6.66669 10.5332 7.33335L7.33317 10.5334C6.6665 11.2 6.53317 12.2667 6.93317 13.0667L8.6665 16.4C8.39984 17.0667 8.13317 17.8667 7.8665 18.5334L4.13317 19.7334C3.33317 20 2.6665 20.8 2.6665 21.7334V26.2667C2.6665 27.2 3.33317 28 4.2665 28.2667L7.99984 29.4667L8.79984 31.4667L6.93317 34.9334C6.53317 35.7334 6.6665 36.8 7.33317 37.4667L10.5332 40.6667C11.1998 41.3334 12.2665 41.4667 13.0665 41.0667L16.5332 39.2L18.5332 40L19.7332 43.8667C19.9998 44.6667 20.7998 45.3334 21.7332 45.3334H26.2665C27.1998 45.3334 27.9998 44.6667 28.2665 43.8667L29.4665 40L31.4665 39.2L34.9332 41.0667C35.7332 41.4667 36.7998 41.3334 37.4665 40.6667L40.6665 37.4667C41.3332 36.8 41.4665 35.7334 41.0665 34.9334L39.1998 31.4667L39.9998 29.4667L43.8665 28.2667C44.6665 28 45.3332 27.2 45.3332 26.2667V21.7334C45.3332 20.8 44.6665 19.8667 43.7332 19.6ZM42.6665 25.8667L37.8665 27.3334L37.7332 28L36.5332 30.8L36.1332 31.4667L38.5332 35.8667L35.8665 38.5334L31.4665 36.1334L30.7998 36.5334C29.8665 37.0667 28.9332 37.4667 27.9998 37.7334L27.3332 37.8667L25.8665 42.6667H22.1332L20.6665 37.8667L19.9998 37.7334L17.1998 36.5334L16.5332 36.1334L12.1332 38.5334L9.4665 35.8667L11.8665 31.4667L11.4665 30.8C10.9332 29.8667 10.5332 28.9334 10.2665 28L10.1332 27.3334L5.33317 25.8667V22.1334L9.8665 20.8L10.1332 20.1334C10.3998 19.0667 10.7998 18.1334 11.3332 17.2L11.7332 16.5334L9.4665 12.1334L12.1332 9.46669L16.3998 11.8667L17.0665 11.4667C17.9998 10.9334 18.9332 10.5334 19.9998 10.2667L20.6665 10L22.1332 5.33335H25.8665L27.3332 10L27.9998 10.2667C28.9332 10.5334 29.8665 10.9334 30.7998 11.4667L31.4665 11.8667L35.8665 9.46669L38.5332 12.1334L36.1332 16.5334L36.5332 17.2C37.0665 18.1334 37.4665 19.0667 37.7332 20L37.8665 20.6667L42.6665 22.1334V25.8667Z"
      fill={fill || "white"} />
  </svg>
)