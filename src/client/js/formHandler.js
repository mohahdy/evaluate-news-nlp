function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log(":::????? Form Submitted ?????:::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
        console.log("/test res: ",res)
    })
    fetch('http://localhost:8081/apidata')
    .then(function(res) {
        console("client side res: ",res)
        document.getElementById('results').innerHTML = res
    })
}

export { handleSubmit }
