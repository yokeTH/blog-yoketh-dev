import { Editor } from '@/components/editor'
import { EditorProvider } from '@/components/editor-provider'

const content = `# Yoke’s Block — built with Milkdown
- [Editable (editor)](/editable)
- [Readonly](/readonly)
`

export default function Home() {
  return (
    <EditorProvider>
      <Editor
        value={content}
        readonly
      />
    </EditorProvider>
  )
}
