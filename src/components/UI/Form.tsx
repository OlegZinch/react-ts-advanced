import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithRef,
  type FormEvent,
} from 'react'

export type FormHandle = {
  clear: () => void
}

type FormProps = ComponentPropsWithRef<'form'> & {
  onSave: (value: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(
  ({ onSave, children, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
      return {
        clear() {
          console.log('CLEARING')
          formRef.current?.reset()
        },
      }
    })

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault()

      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData)
      onSave(data)
    }

    return (
      <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
        {children}
      </form>
    )
  }
)

export default Form
