import classes from "../styles/components/PostPreviewArchive.module.scss";

const PostPreviewArchive = (props) => {
  return (
    <div className={classes["archive-post-item"]}>
      <img src={props.heroImage} />
      <h4>{props.title}</h4>
      <button type="button">
        <a href={`/posts/${props.slug}`}>Read entry</a>
      </button>
    </div>
  );
};

export default PostPreviewArchive;
