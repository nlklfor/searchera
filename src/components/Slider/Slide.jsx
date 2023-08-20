import './Slider.scss'
import person from '../../img/person.png'

const Slide = (props) => {
    return (
        <section className={'section-single'}>
            <div className={'person'}>
                <div className={'person-info'}>
                    <img alt={'person'} className={'person-img'} src={person}/>
                    <div className={'person-desc'}>
                        <p className={'person-name'}>Іван, спеціаліст з персоналу</p>
                        <p className={'company'}>InnovateTech Corp.</p>
                    </div>
                </div>
                <div className={'person-interview'}>
                    <p className={'interview'}>«Як фахівець з персоналу я спочатку скептично ставився до штучного
                        інтелекту
                        під час прийому на роботу, але Searchera повністю мене підкорила. Аналітика талантів платформи
                        надала безцінну інформацію про нашу робочу силу, дозволяючи нам приймати рішення на основі
                        даних.
                        Наші ініціативи щодо різноманітності були активізовані завдяки функціям платформи для зменшення
                        упередженості. Це інструмент, який повинен мати кожен спеціаліст з управління персоналом». </p>
                </div>
            </div>

        </section>
    )
}

export default Slide;