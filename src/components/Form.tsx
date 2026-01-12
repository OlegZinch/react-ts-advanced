import type { ComponentPropsWithRef } from 'react'

type FormProps = ComponentPropsWithRef<'form'>

function Form(props: FormProps) {
  return <form {...props}>{props.children}</form>
}

export default Form
