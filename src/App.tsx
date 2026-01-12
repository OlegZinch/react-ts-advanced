import Input from './components/Input.tsx'
import Form from './components/Form.tsx'
import Button from './components/Button.tsx'

function App() {
  return (
    <main>
      <Form>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App
