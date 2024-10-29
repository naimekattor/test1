const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div class="col-6">
          <input type="text" placeholder="Entar Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success my-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
