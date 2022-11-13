import { useRouter } from "next/router";

function BlogDetails() {
    const router = useRouter();
    const blogId = router.query.blogId
    console.log(blogId);
    return (
        <div>
    <h1>Blog details page {blogId}</h1>
        </div>
    );
}

export default BlogDetails;