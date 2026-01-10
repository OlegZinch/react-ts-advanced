import type { ComponentPropsWithoutRef } from 'react'

type ByttonProps = ComponentPropsWithoutRef<'button'> & { href?: never }

type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string }

function isAnchorProps(props: ByttonProps | AnchorProps): props is AnchorProps {
  return 'href' in props
}

function Button(props: ByttonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className='button' {...props}></a>
  }

  return <button className='button' {...props}></button>
}

export default Button
