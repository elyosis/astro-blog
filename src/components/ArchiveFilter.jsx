import { useState } from "react";
import FilteredPosts from "./FilteredPosts";

const ArchivePanel = (props) => {
  const [filteredTag, setFilteredTag] = useState();

  const uniqueTags = [
    ...new Set(
      props.postsCollection
        .map((post) => post.tags)
        .flat()
        .sort()
    ),
  ];

  const filteredPosts = props.postsCollection.filter((post) =>
    post.tags.includes(filteredTag)
  );

  const buttonHandler = (event) => {
    setFilteredTag(event.target.name);
  };

  return (
    <>
      <h2>Select a tag to filter:</h2>
      <div>
        {uniqueTags.map((tag) => (
          <button type="button" name={tag} onClick={buttonHandler}>
            {tag}
          </button>
        ))}
      </div>
      <div>
        <FilteredPosts posts={filteredPosts} />
      </div>
    </>
  );
};

export default ArchivePanel;
