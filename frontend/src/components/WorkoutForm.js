import {useState} from "react"

const WorkoutForm = () => {
   //create states
   const [title,setTitle] = useState('')
   const [load,setLoad] = useState('')
   const [reps,setReps] = useState('')
   //error state is set to null by default, as errors don't exist by defualt
   const [error,setError] = useState(null)
   
   //handles submission of form
   const handleSubmit = async (e) =>{
   //prevents defualt async run: refresh page in this case
    e.preventDefault()

    //create object to send as request
    const workout = {title, load, reps}

    //use fetch api to send post request
    const response = await fetch('/api/workouts',{
    method: 'POST',
    //send workout object to the body of the html as JSOn
    body: JSON.stringify(workout),
    headers:{ //
        'Content-Type': 'application/json'    }
    })
    const json = await response.json()
    // if an error occurs run setError state which sends json.error
    if(!response.ok) {
        setError(json.error)
        
    }
    if(response.ok) {
        //reset form once request has been sent succesfully
        setTitle('')
        setLoad('')
        setReps('')
        setError(null)
        console.log('new workout added')
    }
   }

   return (
    <form className = "create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label> Exercise Title:</label>
        <input
            type="text"
            /* e=event: (e.target) is the input field.*/
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />

        <label> Load (in kg):</label>
        <input
            type="number"
            /* e=event: (e.target) is the input field.*/
            onChange={(e) => setLoad(e.target.value)}
            value={load}
        />

        <label> Reps:</label>
        <input
            type="number"
            /* e=event: (e.target) is the input field.*/
            onChange={(e) => setReps(e.target.value)}
            value={reps}
        />

        <button>Add Workout</button>
        {error && <div className = "error">{error}</div>}
        
    </form>

    )
}

//exports component out of file
export default WorkoutForm