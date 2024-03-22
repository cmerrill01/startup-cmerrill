function login() {
    const usernameEl = document.querySelector("#login-username");
    localStorage.setItem("username", usernameEl.value);
    window.location.href = "gameplay.html";
}

async function createAccount() {
    const username = document.querySelector("#create-username")?.value;
    const password = document.querySelector("#create-password")?.value;
    const email = document.querySelector("#create-email")?.value;
    try {
        const response = await fetch("api/auth/create", {
            method: "post",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
            headers: { "content-type": "application/json; charset=UTF-8" }
        });

        console.log(response.status);
    
        if (response.ok) {
            localStorage.setItem("username", username);
            window.location.href = "gameplay.html";
        } else {
            console.error("Failed to create account:", response.statusText);
        }
    } catch (error) {
        console.error("Error creating account:", error);
    }
    /*
    const usernameEl = document.querySelector("#create-username");
    localStorage.setItem("username", usernameEl.value);
    window.location.href = "gameplay.html";
    */
}

