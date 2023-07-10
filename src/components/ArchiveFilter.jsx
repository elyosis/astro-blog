import { useState } from "react";
import FilteredPosts from "./FilteredPosts";
import classes from "../styles/components/ArchiveFilter.module.scss";
import ArchiveTag from "./ArchiveTag";

const ArchiveFilter = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filteredTag, setFilteredTag] = useState("");

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

  const dropdownHandler = () => {
    setIsVisible((prevState) => !prevState);
    setFilteredTag("");
  };

  const filterHandler = (tag) => {
    setFilteredTag(tag);
  };

  return (
    <div
      className={`${classes["archive-container"]} ${
        isVisible ? classes.visible : ""
      }`}
    >
      <div className={classes["archive-dropdown"]}>
        <h2>Select a tag to filter:</h2>
        <button onClick={dropdownHandler}>&</button>
      </div>
      <div className={classes["archive-tag-list"]}>
        {uniqueTags.map((tag) => (
          <ArchiveTag
            key={tag}
            name={tag}
            filteredTag={filteredTag}
            onFilter={filterHandler}
          />
        ))}
      </div>
      {filteredTag && (
        <p>
          Posts tagged as{" "}
          <span className={classes["tag-text"]}>{filteredTag}</span>:
        </p>
      )}
      <FilteredPosts posts={filteredPosts} />
    </div>
  );
};

export default ArchiveFilter;
