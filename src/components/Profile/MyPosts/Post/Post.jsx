import classesGreg from './Post.module.css'

const Post = (props)=> {
    return <div className={classesGreg.post}>
        <img src="data:image/jpeg;base64,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" alt="аватар" />
        {props.message}
        <div className={classesGreg.like}>
            <span>{props.like}</span>
        </div>

    </div>
}

export default Post