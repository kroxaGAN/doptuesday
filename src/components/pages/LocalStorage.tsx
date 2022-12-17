import {useState} from "react";

type taskType = {
    id: number, title: string
}
type taskDomainType = taskType & { isDone: boolean }

export const LocalStorage = () => {

    const task: taskDomainType[] = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "React", isDone: true},
    ]
    const [showTasks, setShowTasks] = useState<taskDomainType[]>([])
    const setStorageHandler=()=>{
        const tasksToString=JSON.stringify(task)
        localStorage.setItem('tasks',tasksToString)
    }
    const giveStorageHandler=()=>{
        const fromStorage=localStorage.getItem('tasks')
        if(fromStorage!==null) setShowTasks(JSON.parse(fromStorage))
    }
    const clearStorageHandler=()=>{
        localStorage.removeItem('tasks')
        setShowTasks([])
    }

    return (
        <div>
            <h1>Local storage</h1>
            {
                showTasks.length > 0
                    ? <div>
                        {
                            showTasks.map(el=>
                                <div>
                                    <input type={"checkbox"} checked={el.isDone}/>
                                    <span>{el.title}</span>
                                </div>
                            )
                        }
                    </div>

                    : <h2>Empty</h2>
            }

            <button onClick={setStorageHandler}>Set local storage</button>
            <button onClick={giveStorageHandler}>Give local storage</button>
            <button onClick={clearStorageHandler}>Clear local storage</button>


        </div>
    )
}
