
import BehandlingItem from "../../page/BehandlingItem";
import { useEffect, useState } from "react";

export default function BehandlingList(props) {
    const [posts, setPosts] = useState([]);
    // Her hentes datalisten fra json Wordpress
    useEffect(() => {
        async function getData(id) {
            const res = await fetch(`https://behandling.frejavangilst.com/wp-json/wp/v2/posts?categories=${id}&_embed`);
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }

        getData(props.id);
    }, [props.id]);

    return (
        <section>
            <h2>Behandlinger</h2>

            <div className=" "> {posts.map(post => (
                <BehandlingItem key={post.id} post={post} />
            ))}</div>

        </section>

    );
}
