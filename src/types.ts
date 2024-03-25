export type PageConfigType = {
  title: string
  author: string
  email: string
  greeting: string
  description: string[]
  links: string[][]
}

export type TextPropsType = Readonly<{
  inlineBlock?: boolean
  children: React.ReactNode
}>
