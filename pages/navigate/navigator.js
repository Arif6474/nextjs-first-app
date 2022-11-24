import Link from "next/link";

function navigator() {
    return (
        <div>
        <h1>This is navigate page</h1>
        <Link href="/about">
        <h1>go to about page</h1>
        </Link>
        <Link href="/login">
        <h1>go to login page</h1>
        </Link>
    </div>
    );
}

export default navigator;