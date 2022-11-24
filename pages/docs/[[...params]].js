import { useRouter } from "next/router";

function Document() {
    const router = useRouter();
    const params = router.query.params || [];
    console.log(params);
    if (params.length == 1) {
      return  <h1>this feature is {params[0]} 1</h1>
    }
    if (params.length == 2) {
      return  <h1>this feature is {params[1]} 2</h1>
    }
    if (params.length == 3) {
      return  <h1>this feature is {params[2]} 3</h1>
    }
    return (
        <div>
            <h1>This is document home page</h1>
        </div>
    );
}

export default Document;