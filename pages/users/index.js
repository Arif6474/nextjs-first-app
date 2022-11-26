import Link from "next/link";

function Users({users}) {
    console.log(users);
    return (
        <div>
        {
            users.map(user => {
                return (
                    <div key={user.id}>
                        <Link  href={`users/${user.id}`}><h1>{user.name}</h1></Link>
                    </div>
                )
            })
        }
        </div>
    );
}

export async function getServerSideProps(ctx){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
    return {
        props:{
            users:data
        }
    }
}

export default Users;