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
    const expandedState = document
      .getElementById("tag-filter-toggle")
      .getAttribute("aria-expanded");
    if (expandedState === "true") {
      document
        .getElementById("tag-filter-toggle")
        .setAttribute("aria-expanded", "false");
    } else {
      document
        .getElementById("tag-filter-toggle")
        .setAttribute("aria-expanded", "true");
    }
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
        <button
          type="button"
          id="tag-filter-toggle"
          aria-controls="tag-filter-panel"
          aria-expanded="false"
          onClick={dropdownHandler}
        >
          <i
            className={`fa-solid fa-angle-down fa-2xl ${
              isVisible ? `fa-flip-vertical` : ""
            }`}
            tabIndex={0}
          ></i>
        </button>
      </div>
      <div id="tag-filter-panel" className={classes["archive-tag-list"]}>
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
