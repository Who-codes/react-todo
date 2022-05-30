const Lists = ({ list }) => {
  return (
    <div className="list">
      {list.map((item) => {
        const { title, id } = item;
        return (
          <article className="list-item" key={item.id}>
            <p>{title}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Lists;
