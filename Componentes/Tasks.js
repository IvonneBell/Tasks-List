import { View, Text } from "react-native"
import TaskItem from "./TaskItem"

const Tasks = ({tasks, toogleTask})=>{

    return(
        <View>
            {tasks.map((task,index)=>(
                <TaskItem
                    key={index}
                    task={task}
                    toogleTask={()=>toogleTask(index)}
                />
            ))}
        </View>
    )
}

export default Tasks