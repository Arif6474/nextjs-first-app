function User({user}) {
    console.log(user);
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    );
}

export async function getServerSideProps(ctx){
   const {params} = ctx
   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
   const data = await res.json()
    return {
        props:{
            user:data
        }
    }
}

export default User;