import Card from "../Card/Card";

export const Paginate = (props) => {
  return (
    <div>
      <button onClick={props.prevHandler}>Prev</button>
      page {props.currentPage} of {props.totalPages}
      <button onClick={props.nextHandler}>Sig</button>
      <ul>
        <div>
          {props.items.length > 0 ? (
            props.items.map((el) => (
              <Card
                key={el.id}
                title={el.title}
                image={el.image}
                diets={el.diets}
                id={el.id}
              />
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </ul>
    </div>
  );
};
