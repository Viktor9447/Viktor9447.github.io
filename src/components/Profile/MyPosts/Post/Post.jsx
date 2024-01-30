import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"/>
                {props.message}
            </div>
            <div>
                <span> like </span> {props.likesCount}
            </div>
        </div>
    )
}
export default Post