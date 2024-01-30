import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg" />
            </div>
            <div className={s.descriptionBlock}>
                ava + discription
            </div>
        </div>

    )
}
export default ProfileInfo;

