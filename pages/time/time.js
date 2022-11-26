function Time({time}) {
    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export async function getStaticProps(ctx){


    return {
        props:{
            time: new Date().toISOString(),
        },
        revalidate: 10, 
    }
}

export default Time;