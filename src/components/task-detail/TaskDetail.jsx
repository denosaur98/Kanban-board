import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import notFoundIcon from '../../assets/not-found.svg';
import css from './TaskDetail.module.css';

const TaskDetail = () => {
    const params = useParams()
    
    const tasksList = JSON.parse(localStorage.getItem("tasksList"))
    const task = tasksList.find((task) => task.id === params.taskId)

    const [description, setDescription] = useState(task && task.description.length > 0 ? task.description : '')

    const handleFocus = () => {
        if (description === '') {
            setDescription('')
        }
    }

    const handleClick = () => {
        const newTasksList = tasksList.map(t => {
            if (t.id === task.id) {
                t.description = description === '' ? '' : description
            }
            return t
        })
        localStorage.setItem('tasksList', JSON.stringify(newTasksList))
    }

    const formatDate = () => {
        const date = new Date()
        return date.toLocaleString('ru-RU')
    }

    if (!task) {
        return (
            <div className={css.content}>
                <Link to='/'>
                    <div className={css.exit}>
                        <div className={css.exitLine1}></div>
                        <div className={css.exitLine2}></div>
                    </div>
                </Link>
                <div className={css.nameNF}>There's nothing never!</div>
                <img className={css.emptyStateIcon} src={notFoundIcon} alt='' />
            </div>
        )
    }

    return (
        <div className={css.content}>
            <Link to='/' onClick={handleClick}>
                <div className={css.exit}>
                    <div className={css.exitLine1}></div>
                    <div className={css.exitLine2}></div>
                </div>
            </Link>
            <div className={css.name}>{task.name}</div>
            <p className={css.createdAt}>{formatDate(task.created)}</p>
            <textarea className={css.description} value={description} placeholder={'This task has no description'} onChange={(e) => setDescription(e.target.value)} onFocus={() => handleFocus()} />
        </div>
    )
}

export default TaskDetail;