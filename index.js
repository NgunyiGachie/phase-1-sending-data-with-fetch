function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      return resp.json();
    })
    .then(function(json) {
      document.body.innerHTML = `User ID: ${json.id}`;
    })
    .catch(error => {
      document.body.innerHTML = `Error: ${error.message}`;
    });
  }
  

