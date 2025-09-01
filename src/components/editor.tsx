'use client'

import { useEffect, useRef } from 'react'

import { Crepe } from '@milkdown/crepe'
import '@milkdown/crepe/theme/common/style.css'
import '@milkdown/crepe/theme/frame.css'
import { Milkdown, useEditor } from '@milkdown/react'
import { replaceAll } from '@milkdown/utils'

interface EditorProps {
  value?: string // controlled
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Editor = ({
  value = '',
  onChange,
  readonly = false,
}: EditorProps) => {
  const crepeRef = useRef<Crepe | null>(null)
  const lastEmittedRef = useRef<string>(value)
  const initialRef = useRef<string>(value)

  useEditor((root) => {
    const crepe = new Crepe({ root, defaultValue: initialRef.current ?? '' })
    crepeRef.current = crepe

    crepe.on((listener) => {
      listener.markdownUpdated((_ctx, md, prev) => {
        if (md === prev) return
        lastEmittedRef.current = md
        onChange?.(md)
      })
    })

    crepe.setReadonly(readonly)

    return crepe
  }, [])

  // debouce
  useEffect(() => {
    const crepe = crepeRef.current
    if (!crepe) return

    if (value === lastEmittedRef.current) return

    const current = crepe.getMarkdown?.() ?? ''
    if (value === current) return

    crepe.editor.action(replaceAll(value))
  }, [value])

  return <Milkdown />
}
