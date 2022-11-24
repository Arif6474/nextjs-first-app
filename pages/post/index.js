function index({data}) {
    console.log(data);
    return (
        <div>
           <h1>This is a post page</h1>
           {
           data.map(d => {
            return <div d={d} key={d.id}>
                <h2>{d.title}</h2>
                <h4>{d.userId}</h4>
                <p>{d.body}</p>
                <hr></hr>
            </div>
           })
           }
        </div>
    );
}

export async function getServerSideProps(ctx){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

    return {
        props:{
            data:data
        }
    }
}

export default index;