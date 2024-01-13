import React from "react";

const DUMMY_DATA = [
    { 
        id: 's1',
        title: 'My Summer Vacation at Santorini',
        image: 'https://unsplash.com/photos/white-and-blue-concrete-building-on-brown-rock-formation-near-body-of-water-during-daytime-vEdJ1lMdkeQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        name: 'Christiano Pinto',
        description: 'An island in the Aegean Sea, Santorini is known for its pristine whitewashed houses spread across jagged cliffs, astonishing blue waters, dramatic views, fabulous sunsets, the ancient settlement of Thira and an active volcano.'
    },
    { 
        id: 's2',
        title: 'My Summer Vacation at Santorini',
        image: 'https://unsplash.com/photos/white-and-blue-concrete-building-on-brown-rock-formation-near-body-of-water-during-daytime-vEdJ1lMdkeQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        name: 'Christiano Pinto',
        description: 'An island in the Aegean Sea, Santorini is known for its pristine whitewashed houses spread across jagged cliffs, astonishing blue waters, dramatic views, fabulous sunsets, the ancient settlement of Thira and an active volcano.'
    },
    { 
        id: 's3',
        title: 'My Summer Vacation at Santorini',
        image: 'https://unsplash.com/photos/white-and-blue-concrete-building-on-brown-rock-formation-near-body-of-water-during-daytime-vEdJ1lMdkeQ?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
        name: 'Christiano Pinto',
        description: 'An island in the Aegean Sea, Santorini is known for its pristine whitewashed houses spread across jagged cliffs, astonishing blue waters, dramatic views, fabulous sunsets, the ancient settlement of Thira and an active volcano.'
    }
]

function Home()
{
    return(
        <section>
            <h1>All Thoughts</h1>
            <ul>
            {DUMMY_DATA.map((share) => {
                return <li key={share.id}>{share.title}</li>
            })}
            </ul>
        </section>
    );
}

export default Home;