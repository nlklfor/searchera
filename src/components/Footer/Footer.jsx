import './Footer.scss'


const Footer = () => {
    return (
        <article className={'footer'}>

            <section className={'section-footer'}>
                <section className={'section-footer-left'}>
                    <p className={'footer-logo'}>Searchera</p>
                    <p className={'section-footer-desc'}>Наша платформа використовує<br/> потужність штучного інтелекту,
                        щоб<br/>
                        спростити ваш шлях підбору персоналу.</p>
                </section>
                <section className={'section-footer-right'}>
                    <ul className={'footer-help'}>
                        <li className={'footer-help-item'}>
                            <a href={'/'} >Підписка та ціни</a>
                        </li>
                        <li className={'footer-help-item'}>
                            <a href={'/'}>Персональний менеджер</a>
                        </li>
                        <li className={'footer-help-item'}>
                            <a href={'/'}>Політика конфіденційності</a>
                        </li>

                    </ul>
                    <ul className={'footer-news'}>
                        <li className={'footer-news-item'}>
                            <a href={'/'}>Блог</a>
                        </li>
                        <li className={'footer-news-item'}>
                            <a href={'/'}>Новини</a>
                        </li>
                        <li className={'footer-news-item'}>
                            <a href={'/'}>Кар’єра</a>
                        </li>

                    </ul>
                    <ul className={'footer-docs'}>
                        <li className={'footer-docs-item'}>
                            <a href={'/'}>Документація</a>
                        </li>
                        <li className={'footer-docs-item'}>
                            <a href={'/'}>Партнери</a>
                        </li>
                        <li className={'footer-docs-item'}>
                            <a href={'/'}>Контакти</a>
                        </li>

                    </ul>
                </section>
            </section>
            <p className={'foot'}>© 2023 - Searchera Corp. Всі права захищені.</p>
        </article>
    )
}

export default Footer;