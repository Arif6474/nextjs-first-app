import Link from "next/link";

function index() {
  return (
    <div>
    <h1>This is navigate page</h1>
    <Link href="/about">
    <h1>go to about page</h1>
    </Link>
</div>
  );
}

export default index;
