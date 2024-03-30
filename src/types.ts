export type PageConfigType = {
  title: string
  author: string
  email: string
  greeting: string
  description: string
}

export type NavListType = {
  href: string
  label: string
}[]

export type TextPropsType = Readonly<{
  inlineBlock?: boolean
  className?: string
  children: React.ReactNode
}>
