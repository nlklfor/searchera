import './Header.scss'
const Header = () => {
    return(
        <header className={'header'}>
            <p className={'header-logo'}>Searchera</p>
            <div className={'header-nav'}>
                <ul className={'header-nav_list'}>
                    <a href={'main'}><li className={'header-nav_item'}>Головна</li></a>
                    <a href={'about'}><li className={'header-nav_item'}>Про Компанію</li></a>
                    <a href={'reviews'}><li className={'header-nav_item'}>Відгуки</li></a>
                    <a href={'faq'}><li className={'header-nav_item'}>FAQ</li></a>
                    <a href={'contacts'}><li className={'header-nav_item'}>Контакти</li></a>
                </ul>
                <div className={'blur'}></div>
            </div>
            <div className={'header-buttons'}>
                <button className={'button-log'}>Увійти</button>
                <button className={'button-create'}>Створити Акаунт</button>
            </div>
        </header>
    )
}

export default Header;