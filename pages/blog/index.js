import Link from "next/link";

function index({blogId = 200})  {
    return (
        <div>
    
  
    <Link href="/blog/1">
    <h1>go to blog one page</h1>
    </Link>
    <Link href="/blog/2">
    <h1>go to blog two page</h1>
    </Link>
    <Link href={`/blog/${blogId}`} replace>
    <h1>go to blog three page</h1>
    </Link>
    <Link href="/blog/4">
    <h1>go to blog four page</h1>
    </Link>

        </div>
    );
}

export default index;