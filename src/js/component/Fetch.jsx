fetch("https://playground.4geeks.com/apis/fake/todos/user/MariaOrtega", {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
 if (!resp.ok) throw Error (response.statusText)
        return resp.json(); 
    })
    .then(resp => {
setTodos (todos)
        console.log(resp); 
    })
    .catch(error => {

        console.log(error);
    });