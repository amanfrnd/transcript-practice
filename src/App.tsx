import './App.css'
import ClsComponent from './component/ClsComponent'
import Counter from './component/Counter'
import FnComponent from './component/FnComponent'
import FnParameter from './component/FnParameter'
import FormComponent from './component/FormComponent'

function App() {
  return (
    <>
      <FnComponent name="aman" email="amandeep.rd@gmail.com" age={28}/>
      <FnComponent name="akash" email="akanika94@gmail.com" />
      <hr />
      <ClsComponent userId={5} username="Kakku"/>
      <hr />
      <Counter />
      <hr />
      <FnParameter />
      <hr />
      <FormComponent />
    </>
  )
}

export default App
