fetch("https://reqres.in/api/users/2", {
  method: "DELETE"
})
  .then(function(response) {
    if (response.status !== 204)
      console.log(
        "Looks like there was a problem. Status Code:" + response.status
      );
    else {
      console.log(response);
    }
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
