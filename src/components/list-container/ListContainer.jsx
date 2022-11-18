import { LIST_TYPE } from '../../config';
import List from '../list/List';

const ListContainer = (props) => {
    const { tasks, handleAddTask, handleMoveTask } = props

    return (
        <>
            <List type={LIST_TYPE.BACKLOG} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <List type={LIST_TYPE.READY} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <List type={LIST_TYPE.IN_PROGRESS} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <List type={LIST_TYPE.FINISHED} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask}/>
        </>
    )
}

export default ListContainer;