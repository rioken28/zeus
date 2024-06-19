export function login(data){
    return fetch('http://localhost:3000/api/v1/login', {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
        },
        credentials: "same-origin",
        body: JSON.stringify(data)
    });
}