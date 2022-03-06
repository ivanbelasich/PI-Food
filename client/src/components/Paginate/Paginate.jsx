export const Paginate = (props) => {
  return (
    <div>
      <button onClick={props.prevHandler}>Prev</button>
      {props.viewedElements} to {} of {props.totalElements}
      <button onClick={props.nextHandler}>Sig</button>
    </div>
  );
};
