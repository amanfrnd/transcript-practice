import './App.css'
import ClsComponent from './component/ClsComponent'
import FnComponent from './component/FnComponent'

function App() {
  return (
    <>
      <FnComponent name="aman" email="amandeep.rd@gmail.com" age={28}/>
      <FnComponent name="akash" email="akanika94@gmail.com" />
      <hr />
      <ClsComponent userId={5} username="Kakku"/>
    </>
  )
}

export default App
