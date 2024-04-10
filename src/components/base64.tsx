'use client'

import { useState, useCallback } from 'react'

const toEncoder = (str: string) => btoa(encodeURIComponent(str))

const toDecoder = (str: string) => atob(decodeURIComponent(str))

type Base64State = {
  isBase64: boolean
  children: string
}

const Base64 = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const _children = children as string

  const [base64State, setBase64State] = useState<Base64State>({
    isBase64: true,
    children: toEncoder(_children),
  })

  const onClick = useCallback(() => {
    setBase64State(({ children, isBase64 }) => ({
      isBase64: !isBase64,
      children: !isBase64 ? toEncoder(_children) : toDecoder(children),
    }))
  }, [_children])

  return (
    <span onClick={onClick} className="cursor-pointer">
      {base64State.children}
    </span>
  )
}

export default Base64
