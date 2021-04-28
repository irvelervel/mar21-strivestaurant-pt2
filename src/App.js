import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'

const App = () => {
  return (
    <div>
      <MyNavBar title="Strivestaurant" />
      <ReservationForm />
      <Home />
    </div>
  )
}

export default App
