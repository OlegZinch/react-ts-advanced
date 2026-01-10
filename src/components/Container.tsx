import type { ElementType } from 'react'

type ContainerProps = {
  as: ElementType
}

function Container({ as: Component }: ContainerProps) {
  // const Component = as
  return <Component />
}

export default Container
