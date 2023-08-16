'use client';

export function env(name: string) {
  return process.env[`NEXT_PUBLIC_${name}`]
}