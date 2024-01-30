import React, { useEffect, useState } from "react";
import ShareList from "../components/share/ShareList";

/*const DUMMY_DATA = [
    { 
        id: 's1',
        title: 'My Summer Vacation at Santorini',
        image: 'https://images.unsplash.com/photo-1561642993-8621fcf54e76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Christiano Pinto',
        description: 'An island in the Aegean Sea, Santorini is known for its pristine whitewashed houses spread across jagged cliffs, astonishing blue waters, dramatic views, fabulous sunsets, the ancient settlement of Thira and an active volcano.'
    },
    { 
        id: 's2',
        title: 'My Summer Vacation at Santorini',
        image: 'https://images.pexels.com/photos/163864/santorini-oia-greece-travel-163864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        name: 'Christiano Pinto',
        description: 'An island in the Aegean Sea, Santorini is known for its pristine whitewashed houses spread across jagged cliffs, astonishing blue waters, dramatic views, fabulous sunsets, the ancient settlement of Thira and an active volcano.'
    },
    { 
        id: 's3',
        title: 'My Summer Vacation at Santorini',
        image: 'https://images.pexels.com/photos/2249780/pexels-photo-2249780.jpeg?auto=compress&cs=tinysrgb&w=600',
        name: 'Christiano Pinto',
        description: 'An island in the Aegean Sea, Santorini is known for its pristine whitewashed houses spread across jagged cliffs, astonishing blue waters, dramatic views, fabulous sunsets, the ancient settlement of Thira and an active volcano.'
    }
]*/

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedShares, setLoadedShares] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://reflect-f0a06-default-rtdb.firebaseio.com/shares.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const shares = [];

        for(const key in data)
        {
            const share = {
                id: key,
                ...data[key]
            };
            shares.push(share);
        }

        setIsLoading(false);
        setLoadedShares(shares);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Posts</h1>
      <ShareList shares={loadedShares} />
    </section>
  );
}

export default Home;
