import classes from "../styles/components/ArchiveTag.module.scss";

const ArchiveTag = (props) => {
  return (
    <button
      type="button"
      className={`${classes.tag} ${
        props.name === props.filteredTag ? classes.active : ""
      }`}
      onClick={() => {
        props.onFilter(props.name);
      }}
      tabIndex={0}
    >
      {props.name}
    </button>
  );
};

export default ArchiveTag;
