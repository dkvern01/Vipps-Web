//finds number of occurences, if there's an error we set pageNotFound = true
const fetchNumberOccurences = async (topic) => {
    const url = `/api/occurences?topic=${topic}`;
    const response = await fetch(url);

    if (response.status == 404) {
        return {error: true}
    }

    const data = await response.json();
    return data
}

const form = document.querySelector("form")
const resultDiv = document.querySelector("#result")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const topic = document.querySelector("#topic").value
    const data = await fetchNumberOccurences(topic)

    if (data.error) {
        resultDiv.textContent = `The word "${topic}" does not have a corresponding article.`
    } else {
        resultDiv.textContent = `The word "${topic}" appears ${data.count} times in the article.`
    }
})