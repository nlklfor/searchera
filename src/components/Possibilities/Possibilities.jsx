import './Possibilities.scss'
import possImg from '../../img/possibilities.png'

const Possibilieties = () => {
    return (
        <article className={'possibilities'}>
            <h1 className={'possibilities-title'}>Основні можливості<br/> платформи</h1>
            <section className={'possibilities-section'}>

                <div className={'switch-section'}>
                    <div className={'links'}>
                        <a href={'switch'} className={'switch'}>Покращений підбір кандидатів</a>
                        <a href={'switch'} className={'switch'}>Оптимізація процесу найму</a>
                        <a href={'switch'} className={'switch'}>Персональні рекомендації щодо роботи</a>
                    </div>
                    <div className={'section-overview'}>
                        <p className={'section-sub'}>Завдяки вдосконаленій аналітиці талантів і алгоритмам штучного
                            інтелекту<br/> платформа може точніше підбирати кандидатів відповідно до вимог<br/> роботи, що
                            сприяє кращому підходу та зниженню ймовірності<br/> невідповідностей.</p>
                        <button className={'btn_more'}>Дізнатися більше</button>
                    </div>
                    <img src={possImg} alt={'possImg'} className={'possibilities-img'}/>
                </div>
            </section>
        </article>
    )
}

export default Possibilieties;