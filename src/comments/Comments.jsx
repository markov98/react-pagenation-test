import { Link } from "react-router-dom";
import { allComments } from "./data";
import './Comments.css';
import { useParams } from "react-router-dom";

export function Comments() {
    const { num } = useParams();
    const currPage = Number(num) || 1;
    const commentsPerPage = 3;

    const lastIndex = currPage * commentsPerPage;
    const firstIndex = lastIndex - commentsPerPage;

    const currComents = allComments.slice(firstIndex, lastIndex);

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
                {currPage > 1 && <><Link to={`/${currPage - 1}`}>{currPage - 1}</Link> | </>}
                <span>{currPage}</span>
                {lastIndex < allComments.length && <> | <Link to={`/${currPage + 1}`}>{currPage + 1}</Link></>}
            </div>
        </>
    )
}
