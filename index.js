let naughty = ["fuck", "fucking", "bloody", "ass", "shit", "cum", "dick"]
let swear = naughty[Math.floor(Math.random() * naughty.length)]

window.onload = async function() {
    async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    
    let adj = await new URL('https://random-word-form.herokuapp.com/random/adjective');
    let adjective = await fetchAsync(adj);

    let noun = await new URL('https://random-word-form.herokuapp.com/random/noun');
    noun = await fetchAsync(noun)

    let insult = adjective + ' ' + swear + ' ' + noun;

    document.getElementById("insult").innerHTML = await insult;

    await console.log(adjective);
    await console.log(swear);

    async function buttonFunction() {
        location.reload();
    }

    document.getElementById('refresh button').addEventListener('click', buttonFunction)
};