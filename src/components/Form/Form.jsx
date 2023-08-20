import './Form.scss'
import {useState} from "react";
import circle from "../../img/Elipse-form.svg";

const Form = () => {
    const [isName, setIsName] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const onChangeName = (event) => {
        setIsName(event.target.value);
    }
    const onChangeEmail = (event) => {
        setIsEmail(event.target.value);
    }
    const onSendForm = () => {
        if (isEmail.includes('@')) {
            alert(`Ваше ім'я: ${isName} / Ваша пошта: ${isEmail}`)
        } else {
            return (
                alert('Ви ввели некоректну адресу електронної пошти')
            )
        }
    }
    return(
        <article className={'form'}>
        <h2 className={'form-title'}>Все ще залишились питання? <br/> заповніть форму і ми з <br/> вами зв’яжемось</h2>
            <img src={circle} className={'form-img'} alt={'circle'} />
            <div className={'form-blur'} id={'form-blur1'}></div>
            <section className={'section-form'}>
                <input onChange={onChangeName} className={'input-name'} type={"text"} value={isName} />
                <input onChange={onChangeEmail} className={'input-email'} type={"email"} value={isEmail} />
                <button onClick={onSendForm} className={'btn-send'}>Відправити</button>
            </section>
        </article>
    )
}

export default Form