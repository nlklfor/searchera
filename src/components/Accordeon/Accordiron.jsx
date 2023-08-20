import './Accordion.scss'
import {useState} from "react";
import opened from '../../img/arrow-opened.svg'
import closed from '../../img/arrow-closed.svg'
import drop from '../../img/drop.png'

const AccordionSection = (props) => {
    const toggleClick = () => {
        const newIndex = props.isOpened ? null : props.sectionIndex;
        props.setIsActive(newIndex);
    }
    return(
        <div className={'accordion-desc'}>
            <div className={'accordion-sub'} onClick={toggleClick}>
                <p className={'sub-title'}>{props.section.title}</p>
                <img src={props.isOpened ? opened : closed} alt={'opened'} className={'arrow-open'}/>
            </div>
            {props.isOpened && <div className={'accordion-content'}>{props.section.content}</div>}
        </div>
    )
}

const Accordiron = (props) => {
    const [isActive, setIsActive] = useState(0)
    return(
        <article className={'accordion'}>
            <h2 className={'accordion-title'}>У нас є відповідь<br/> на всі запитання</h2>
            <img className={'accordion-img'} id={'accordion-img'} src={drop} alt={'drop'} />
            <div className={'acc-blur'} id={'accor-blur1'}></div>
            <section className={'accordion-item'}>
                {props.accordionData.map((section, index) => (
                    <AccordionSection key={index} section={section} isOpened={index === isActive} setIsActive={setIsActive} isActive={isActive} sectionIndex={index}/>
                ))}
            </section>
        </article>
    )
}

export default Accordiron;