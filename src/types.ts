export type PageConfigType = {
  title: string
  author: string
  email: string
  greeting: string
  description: string[]
  links: string[][]
  footers: string[]
}

export type TextPropsType = Readonly<{
  inlineBlock?: boolean
  className?: string
  children: React.ReactNode
}>
