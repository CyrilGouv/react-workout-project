import { useEffect, useState } from 'react'
import { data } from './data'
import Workout from './components/Workout'

import './App.css'


function App() {

    const [workout, setWorkout] = useState([])

    useEffect(() => {
      setWorkout(data)
    }, [])

    const deleteExo = (id) => {
      const newWorkout = workout.filter(exo => exo.id !== id)
      setWorkout(newWorkout)
    }

    const refreshData = () => {
      setWorkout(data)
    }

    if (workout.length === 0) {
      return (
        <div className="App App--alt">
          <h1>Mon programme de musculation</h1>
          <h2>Il n'y a plus d'exercice à effectuer</h2>
          <button onClick={ () => refreshData() } className='app__refresh'>Rafraichir</button>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Mon programme de musculation</h1>
        <Workout workout={ workout } deleteExo={ deleteExo } />
      </div>
    )
}

export default App;
