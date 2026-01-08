import Input from './components/Input.tsx'

function App() {
  return (
    <main>
      <Input id='name' label='You name' type='text' />
      <Input id='age' label='You age' type='number' />
    </main>
  )
}

export default App
