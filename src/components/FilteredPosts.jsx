const FilteredPosts = (props) => {
  return (
    <div>
      {props.posts.map((post) => {
        return <li>{post.title}</li>;
      })}
    </div>
  );
};

export default FilteredPosts;
