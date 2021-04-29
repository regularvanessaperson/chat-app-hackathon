const UsernameField = ({ value, onChange, onSubmit, completed }) => {
    if (completed) {
      // if the user has already claimed a username, display it.
      return (
        <div>
         <h1 class="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Chatting as <b>{value}</b></h1> 
        </div>
      );
    } else {
      // if the user hasn't yet claimed a username, let them do so.
      return (
        <div  className="w-full bg-white rounded shadow-lg p-8 m-4 h-full">
          <form onSubmit={(e) => e.preventDefault() || onSubmit(value)}>
            <label>
              
              <input
                type="text"
                name="username"
                value={value}
                className="focus:ring-2 focus:ring-blue-600 mt-10"
                placeholder= "Set your username"
                onChange={(e) => e.preventDefault() || onChange(e.target.value)}
              />
            </label>
            <input className="py-1 px-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  };
  
  export default UsernameField;