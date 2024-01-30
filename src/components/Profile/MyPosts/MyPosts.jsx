
import Post from './Post/Post'
import s from './MyPosts.module.css'

let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: '15' },
    { id: 1, message: "It's my fierst post", likesCount: '30' },
]

let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts
