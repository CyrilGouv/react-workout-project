import Exo from './Exo'

import './Workout.css'


const Workout = ({ workout, deleteExo }) => {

    return (
        <section className='workout'>
            {
                workout.map(exo => <Exo key={ exo.id } { ...exo } deleteExo={ deleteExo } />)
            }
        </section>
    )
}

export default Workout