import { Editor } from '@/components/editor'
import { EditorProvider } from '@/components/editor-provider'

const content = `# Yoke’s Block — built with Milkdown

👋 Hey! This is your clean, fast editor space — tuned for an engineering brain and future founder energy.

💭 What is Milkdown?
Milkdown is a WYSIWYG markdown editor framework that lets **you** shape the editing experience. Think ProseMirror power with a pleasant Markdown-first workflow — perfect for docs, specs, product notes, and design journals.

> ⚙️ **How to use this panel**
>
> Type on the left. See results on the right.

![0.5](/avatar.png "Exploring ideas at orbital speed")

You’re using **🥞 Crepe**, a ready-to-use editor built on top of Milkdown — great for shipping quickly and customizing later.

If you want this editor in your own app:

\`\`\`go
import (
  _ "YOUR_MODULE/docs"

  "github.com/gofiber/fiber/v2"
  "github.com/yokeTH/gofiber-scalar/scalar/v2"
)
\`\`\`

---

## Architecture at a glance

> Milkdown is a framework for **building your own Markdown editor**.

A typical setup has three layers:

- [x] 🥛 **Core** — the editor runtime + plugin system.
- [x] 🧇 **Plugins** — features you turn on/off (search, collab, etc.).
- [x] 🍮 **Components** — headless building blocks (slash menu, toolbar).

Learning all three isn’t required to start. **\`@milkdown/crepe\`** gives you a fast on-ramp.

---

## Extend it your way

| Feature      | What it does                                      | Examples                          |
| ------------ | -------------------------------------------------- | --------------------------------- |
| 🎨 Theme     | Style via CSS                                      | Nord, Dracula, or your brand      |
| 🧩 Plugin    | Add capability                                     | Search, Collab, Code blocks       |
| 📦 Component | Assemble UI affordances                            | Slash Menu, Toolbar, Floating bar |
| 📚 Syntax    | Teach the parser new tricks                        | Image captions, LaTeX/KaTeX       |

Ship with defaults, then iterate as your product grows.

---

## Open Source

- MIT-licensed — use in personal or commercial projects.
- Contributions welcome — issues, PRs, ideas.
- If this accelerates your work, consider supporting the maintainers.

## Credits

Built by [Mirone][mirone] and designed by [Meo][meo]. Project home: [Milkdown repo][repo].

---

## Yoke’s quickstart checklist

- [ ] Create a lightweight theme with your product typography.
- [ ] Enable code blocks + LaTeX for technical docs.
- [ ] Add a slash menu for fast command palettes.
- [ ] Wire in autosave + export to \`.md\` and \`.pdf\`.

---

## Scratchpad

> Use this section for today’s notes, standups, or product thoughts.

- Goals: semiconductor / software / aerospace venture ideas
- Running hypotheses:
  - Editor as a component in internal tools
  - Collaborative spec writing with structured export
- Next experiments:
  - Insert custom node for “Design Decision” with metadata
  - Add keyboard-driven slash menu for power users

[repo]: https://github.com/Milkdown/milkdown
[mirone]: https://github.com/Saul-Mirone
[meo]: https://meo.cool
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
