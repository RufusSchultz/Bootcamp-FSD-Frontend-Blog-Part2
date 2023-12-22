function BlogListItem({ id, title, author, comments, shares }) {
    return (
        <div>
            <p>
                <a href={`/posts/${id}`} className="blog_link">{title}</a> ({author})
            </p>
            <p>
                {comments} reacties - {shares} keer gedeeld
            </p>
        </div>
    )
}

export default BlogListItem;