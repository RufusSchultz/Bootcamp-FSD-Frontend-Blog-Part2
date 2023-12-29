function BlogListItem({ id, title, author, comments, shared }) {
    return (
        <div>
            <p>
                <a href={`/posts/${id}`} className="blog_link">{title}</a> ({author})
            </p>
            <p>
                {comments} reacties - {shared} keer gedeeld
            </p>
        </div>
    )
}

export default BlogListItem;