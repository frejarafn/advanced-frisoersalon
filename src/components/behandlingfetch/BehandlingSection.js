

import BehandlingPost from "./BehandlingPost";
import { useEffect, useState } from "react";

export default function BehandlingSection() {
    const [posts, setPosts] = useState([]);
    // Her hentes datalisten fra json Wordpress
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://behandling.frejavangilst.com/wp-json/wp/v2/categories?_embed");
            const data = await res.json();
            console.log(data);
            setPosts(data);
        }

        getData();
    }, []);

    return (
        <section>
            <h2>Behandlinger</h2>

            <div className=" "> {posts.map(post => (
                <BehandlingPost key={post.id} post={post} />
            ))}</div>

        </section>

    );
}
