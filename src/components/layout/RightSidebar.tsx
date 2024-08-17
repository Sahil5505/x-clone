import Link from "next/link";

// Replace with real data later   
const topHashtags = [
    {name: "react", count: 1234},
    {name: "nextjs", count: 1234},
    {name: "tailwindcss", count: 1234},
    {name: "ts", count: 1234},
    {name: "sj", count: 1234},
];

const topProfiles = [
    {id: 1, username: "alice", followerCount: 1234},
    {id: 2, username: "kat", followerCount: 1234},
    {id: 3, username: "aman", followerCount: 1234},
    {id: 4, username: "kirat", followerCount: 1234},
    {id: 5, username: "dev", followerCount: 1234},
];

export default function RightSideBar() {
    return (
        <aside className="hidden h-screen w-1/4 overflow-y-auto p-4 md:sticky md:block xl:w-1/5">
            <section className="mb-4 rounded-lg bg-gray-100 p-4">
                <h2 className="mb-2 text-xl font-bold">What's happening</h2>
                <ul>
                    {topHashtags.map(hashtag => (
                        <li key={hashtag.name}>
                            <Link href={`/explore?h=${hashtag.name}`}>
                                <div className="text-blue-500 hover:underline">
                                    #{hashtag.name}
                                </div>
                            </Link>
                            <div className="text-gray-500">({hashtag.count})</div>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mb-4 rounded-lg bg-gray-100 p-4">
                <h2 className="mb-2 text-xl font-bold">Who to follow</h2>
                <ul>
                    {topProfiles.map(profile => (
                        <li key={profile.id}>
                            <Link href={`/profile/${profile.id}`}>
                                <span className="text-blue-500 hover:underline">
                                    {profile.username}
                                </span>
                            </Link>
                            <div className="text-gray-500">({profile.followerCount})</div>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}
