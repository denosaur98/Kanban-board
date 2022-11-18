import Logo from '../../assets/logo.svg';
import UserMenu from '../user-menu/UserMenu';
import css from './Header.module.css';

function Header() {
	return (
		<header className={css.header}>
			<a href="/" className={css.title} title="Home">
				<img className={css.logo} src={Logo} alt='' />
				<h1 className={css.title}>Awesome Kanban Board</h1>
			</a>
			<UserMenu/>
		</header>
	)
}

export default Header;