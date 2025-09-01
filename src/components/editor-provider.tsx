'use client'

import { MilkdownProvider } from '@milkdown/react'

export function EditorProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MilkdownProvider>{children}</MilkdownProvider>
}
