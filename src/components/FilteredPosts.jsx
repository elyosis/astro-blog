import PostPreviewArchive from "./PostPreviewArchive";
import classes from "../styles/components/FilteredPosts.module.scss";

const FilteredPosts = (props) => {
  return (
    <div className={classes["archive-filtered-posts"]}>
      {props.posts.map((post) => {
        return (
          <PostPreviewArchive
            key={post.slug}
            title={post.title}
            heroImage={post.heroImage}
            slug={post.slug}
          />
        );
      })}
    </div>
  );
};

export default FilteredPosts;
