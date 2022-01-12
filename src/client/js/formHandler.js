function handleSubmit(event) {
    event.preventDefault()
    let fetchedData;
    // const fetch = require('node-fetch')

    // const formdata = new FormData();
    // formdata.append("key", process.env.API_KEY);
    // formdata.append("url", "https://www.nytimes.com/2022/01/11/us/politics/biden-filibuster-voting-rights.html");
    // formdata.append("lang", "en");  // 2-letter code, like en es fr ...
    // console.log("formdata : ", formdata);
    // const requestOptions = {
    //     method: 'POST',
    //     body: formdata,
    //     redirect: 'follow'
    // };
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText)) {
    fetch("https://api.meaningcloud.com/sentiment-2.1?"+`key=${ process.env.API_KEY}&url=${formText}&lang=en`)
    .then(res=> res.json())
    .then(data=>{
        console.log("data: ", data)
        document.getElementById('status').innerHTML = "Status : " + data.status.msg

        document.getElementById('agreement').innerHTML = "Agreement : " + data.agreement
                document.getElementById('confidence').innerHTML = "Confidence : " + data.confidence
                document.getElementById('irony').innerHTML = "Irony:  : " + data.irony
                document.getElementById('model').innerHTML = "Model : " + data.model
                document.getElementById('score_tag').innerHTML = "Score Tag : " + data.score_tag
                document.getElementById('subjectivity').innerHTML = "Subjectivity : " + data.subjectivity
    }).catch(error => console.log('error', error));
    console.log("https://api.meaningcloud.com/sentiment-2.1?"+`key=${process.env.API_KEY}&url=${formText}&lang=en`)
}else{
    alert("Please enter a valid URL")
}
    // fetch("https://api.meaningcloud.com/sentiment-2.1?"+`key=${ process.env.API_KEY}&url=${url}&lang=en`)
    //     .then(response => (response.json()))
    //     .then((res) => ( function (res) {
    //             console.log("client side res: ", res)
    //             document.getElementById('agreement').innerHTML = "Agreement : " + res.agreement
    //             document.getElementById('confidence').innerHTML = "Confidence : " + res.confidence
    //             document.getElementById('irony').innerHTML = "Irony:  : " + res.irony
    //             document.getElementById('model').innerHTML = "Model : " + res.model
    //             document.getElementById('score_tag').innerHTML = "Score Tag : " + res.score_tag

    //         }
    //     ))
    //     .catch(error => console.log('error', error));
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
            // document.getElementById('results').innerHTML = res.message
            console.log("/test res: ", res)
        })

}

export { handleSubmit }
