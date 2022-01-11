function handleSubmit(event) {
    event.preventDefault()
    let fetchedData;
    const formdata = new FormData();
    formdata.append("key", process.env.API_KEY);
    formdata.append("url", "https://www.nytimes.com/2022/01/11/us/politics/biden-filibuster-voting-rights.html");
    formdata.append("lang", "en");  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    fetch("https://api.meaningcloud.com/sentiment-2.1?", requestOptions)
        .then(response => (response.json()))
        .then((res) => ( function (res) {
                console.log("client side res: ", res)
                document.getElementById('agreement').innerHTML = "Agreement : " + res.agreement
                document.getElementById('confidence').innerHTML = "Confidence : " + res.confidence
                document.getElementById('irony').innerHTML = "Irony:  : " + res.irony
                document.getElementById('model').innerHTML = "Model : " + res.model
                document.getElementById('score_tag').innerHTML = "Score Tag : " + res.score_tag

            }
        ))
        .catch(error => console.log('error', error));
    // const postNewsLink = (url = '', data = { test: 'eeeeee' }) => {
    //     console.log("Data in postNewsLink: ", data);
    //     return fetch(url, {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: data,
    //     });
    // }
    // check what text was put into the form field
    // let formText = document.getElementById('name').value
    // if (Client.checkForName(formText)) {
    //         fetch('http://localhost:8081/apidata')
    //         .then(res => res.json())
    //         .then(function (res) {
    //             console.log("client side res: ", res)
    //             document.getElementById('agreement').innerHTML = "Agreement : " + res.agreement
    //             document.getElementById('confidence').innerHTML = "Confidence : " + res.confidence
    //             document.getElementById('irony').innerHTML = "Irony:  : " + res.irony
    //             document.getElementById('model').innerHTML = "Model : " + res.model
    //             document.getElementById('score_tag').innerHTML = "Score Tag : " + res.score_tag

    //         })
    // }

    console.log(":::????? Form Submitted ?????:::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
            console.log("/test res: ", res)
        })

}

export { handleSubmit }
