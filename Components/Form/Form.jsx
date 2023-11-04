export default function Form({userName , setUsername}) {
  function handleOnChange(event){
    event.preventDefault();
    const {name, value} = event.target;
    setUsername(value);
  }
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input onChange={(e) => handleOnChange(e)} value={userName} type="text" className="form-control" placeholder="User Name" />
      </div>
    </form>
  );
}
