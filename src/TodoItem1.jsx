const TodoItem1 = () => {
  let TodoName = "Buy Milk";
  let TodoDate = "04/10/24";
  return (
    <div className="container text-center">
      <div class="row my-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger my-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem1;
