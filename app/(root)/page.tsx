import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: "55",
      _id: "1",
      author: { _id: "22", name: "John Doe" },
      description: "I am the best startup",
      image:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      category: "startup",
      title: "Best Startup",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch Your Startup, <br />
          connect with entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          submit Ideas , vote on pitches , and get noticed in virtual
          competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: startupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result"> No results found</p>
          )}
        </ul>
      </section>
    </>
  );
}
