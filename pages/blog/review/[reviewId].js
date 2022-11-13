import { useRouter } from "next/router";

function review() {
    const router = useRouter();
    const {reviewId} = router.query
    return (
        <div>
        <h1>This is review  {reviewId}</h1>
        </div>
    );
}

export default review;