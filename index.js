function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: userName, email: userEmail})
    })
    .then(response => response.json())
    .then(user => {
        let p = document.createElement("p")
        p.textContent = user.id;
        document.querySelector("body").appendChild(p);
    })
    .catch((error) => {
        alert("Unauthorized Access");
        console.log(error.message);
        let err = document.createElement("p");
        err.textContent = "Unauthorized Access";
        document.querySelector("body").appendChild(err);
    })
}