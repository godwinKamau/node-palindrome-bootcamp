document.querySelector('#checker').addEventListener('click', sendRequest)

function sendRequest() {
    const word = document.querySelector('input').value.toLowerCase()
    console.log(word)
    fetch(`/palindrome?word=${word}`)   //question mark is important to creating the key/value pair
        .then(res => res.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}