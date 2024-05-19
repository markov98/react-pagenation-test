import { useState } from "react";
import { allComments } from "./data";
import './Comments.css';

export function Comments() {
    const [currPage, setCurrPage] = useState(1);
    const commentsPerPage = 3;

    const lastIndex = currPage * commentsPerPage;
    const firstIndex = lastIndex - commentsPerPage;

    const currComents = allComments.slice(firstIndex, lastIndex);

    const nextPage = () => { setCurrPage(currPage + 1) };
    const lastPage = () => { setCurrPage(currPage - 1) };

    return (
        <>
            <h1>Comments</h1>
            <ul>
                {currComents.map(comment => {
                    return <li key={comment.id}>
                        <p className="username">{comment.username}</p>
                        <p className="comments_text">{comment.comment}</p>
                    </li>
                })}
            </ul>
            <div className="pages">
                {currPage > 1 && <><a onClick={lastPage}>{currPage - 1}</a> | </>}
                <span>{currPage}</span>
                {lastIndex < allComments.length && <> | <a onClick={nextPage}>{currPage + 1}</a></>}
            </div>
        </>
    )
}
