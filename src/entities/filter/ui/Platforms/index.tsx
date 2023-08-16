import styles from './styles/main.module.scss'

// Types
import { IPlatform } from '@/entities/product/types'

// Components
import { Platform } from './platform'

// Decompose to ./types.ts
interface IPlatformsProps {
  platforms: IPlatform[]
  active: IPlatform | null
  change?: (platform: IPlatform) => void
}

export function Platforms({ platforms, active, change }: IPlatformsProps) {
  function platformChange(platform: IPlatform) {
    if (change instanceof Function) {
      change(platform)
    }
  }
  
  return <div className={styles.platforms}>
    {platforms.map((platform: IPlatform) => (
      <Platform
        key={platform.value}
        platform={platform}
        isActive={active?.value == platform.value}
        onClick={() => platformChange(platform)}
      />
    ))}
  </div>
}