import './Demo.scss'

const Demo = () => {
    return (
        <article className={'demo'}>
            <section className={'section-desc'}>
                <h1 className={'section-title'}>Революція в підборі кадрів<br/> за допомогою <span>штучного<br/> інтелекту</span>
                </h1>
                <p className={'section-subtitle'}>Ми використовуємо штучний інтелект, щоб<br/> спростити пошук талантів.
                </p>
            </section>
            <section className={'section-buttons'}>
                <button className={'button-demo'}>Спробувати демо версію</button>
                <button className={'button-info'}>Дізнатися більше
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6L18 18M18 18V10M18 18H10" stroke="white" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>
            </section>
            <section className={'section-imgs'}>

            </section>
        </article>
    )
}

export default Demo;