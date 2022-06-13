import { FC } from "react"

type Props = {
  children?: React.ReactNode
}

export const DarkLayout: FC<Props> = ({children}) => {

  return (
    <div style={{
      background: 'gray'
    }}>
      {children}
    </div>
  )
}