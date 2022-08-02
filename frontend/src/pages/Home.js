import {useEffect , useState} from 'react'

//components
import WorkoutDetails from '../components/WorkoutDetails'


const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        /* one aspect of function is async, nest async function */
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            /* only fire if response has no error */
            if (response.ok) {
                /* fetch the json data from the setWorkouts object/arr */
                setWorkouts(json)
            }
        }
        fetchWorkouts( )
    }, []) /* the empty array argument is on this line is a 'dependacy array'. It fires the function once and then never again. */
    // jsx below
    return (
        <div className = "home">
            <div className = "workouts">
                {/* only map workouts if workouts has a value */}
                {workouts && workouts.map((workout) =>(
                    <p key = {workout._id}>{workout.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home