import {FC} from 'react';
import style from './comment.module.scss';
export  interface CommentProps{
    id?: number
    image?: string,
    authorName?: string,
    tagName?: string,
    text?: string,

}

export  const Comment : FC<CommentProps>  = ({id, image, authorName, tagName, text})  => {
    return (
        <article className={style.comment}>
            {id && null}
            <img className={style.comment__image} alt={authorName} src={image}/>
            <h3 className={style.comment__authorName}>{authorName}</h3>
            <span className={style.comment__tagName}>{tagName}</span>
            <pre className={style.comment__text}>{text}</pre>
        </article>
    );
}

