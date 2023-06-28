import classes from "../styles/components/ArchiveTag.module.scss";

const ArchiveTag = (props) => {
  return (
    <button
      type="button"
      className={classes.tag}
      onClick={() => {
        props.onFilter(props.name);
      }}
    >
      {props.name}
    </button>
  );
};

export default ArchiveTag;
