import { useRouter } from "next/router";


function BlogDetails() {
    const router = useRouter();
    const blogId = router.query.blogId
    console.log(blogId);
    const goToAbout = () => {
        router.replace('/about');
    }
    return (
        <div>
    <h1>Blog details page {blogId}</h1>
    <button onClick={goToAbout}>submit</button>
        </div>
    );
}

export default BlogDetails;