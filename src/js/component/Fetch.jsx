fetch('https://playground.4geeks.com/apis/fake/todos/user/alesanchezr', {
      method: "PUT",
      body: JSON.stringify(todos),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); 
        console.log(resp.status); 
        console.log(resp.text()); 
        return resp.json(); 
    })
    .then(data => {

        console.log(data); 
    .catch(error => {

        console.log(error);
    });