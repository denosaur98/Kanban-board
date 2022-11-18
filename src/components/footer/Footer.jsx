import css from './Footer.module.css';

const Footer = (props) => {
    const { activeTasks, finishedTasks } = props

    return (
        <footer className={css.footer}>
            <div className={css.statistics}>
                <div>Active : {activeTasks}</div>
                <div className={css.finished}>Finished : {finishedTasks}</div>
            </div>
            <div>
                Kanban board by <a className={css.a} href='https://github.com/denosaur98' target='_blank' rel='noreferrer'>denosaur98</a><strong>,</strong> 2022
            </div>
        </footer>
    )
}

export default Footer;