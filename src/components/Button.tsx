import type { ComponentPropsWithoutRef } from 'react'

type ByttonProps = {
  el: 'button'
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
  el: 'anchor'
} & ComponentPropsWithoutRef<'a'>

function Button(props: ByttonProps | AnchorProps) {
  if (props.el === 'anchor') {
    return <a className='button' {...props}></a>
  }

  return <button className='button' {...props}></button>
}

export default Button
