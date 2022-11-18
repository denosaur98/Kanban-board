import { Outlet } from 'react-router-dom';
import ListContainer from '../list-container/ListContainer';
import css from './Main.module.css';

const Main = (props) => {
    const { tasks, handleAddTask, handleMoveTask } = props

    return (
        <main className={css.main}>
            <div className={css.taskList}>
                <ListContainer tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            </div>
            <div className={css.taskContent}>
                <Outlet />
            </div>
        </main>
    )
}

export default Main;
