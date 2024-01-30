import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'



let dialogs = [
    { id: 1, name: 'Viktor' },
    { id: 2, name: 'Daria' },
    { id: 3, name: 'Artyom' },
    { id: 4, name: 'Olga' },
    { id: 5, name: 'Elena' },
    { id: 6, name: 'Dmitriy' },
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
]

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
let messagesElements = messages.map(m => <Message message={m.message} />)


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs