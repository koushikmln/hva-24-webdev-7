const submit_button = document.getElementById("submit_btn");
submit_button.addEventListener("click", fetchWord);


async function fetchWord() {
    const word = document.getElementById("input_word").value.trim();
    document.getElementById("post").innerHTML = "";
    if (!word) {
        alert("Enter a valid word");
        return;
    }
    console.log(word);
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(response);

        if (!response.ok) {
            document.getElementById("post").innerHTML = `<h3 style="color:red;text-align:center;">Word not found.Please search for another word</h3>`;
            throw new Error(`${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        let myDiv = document.createElement("div");
        myDiv.style.padding = "30px";
        data.forEach(item => {
            item.meanings.forEach(pos => {
                let posSection = document.createElement("div");
                posSection.style.padding = "20px";
                posSection.style.backgroundColor = "rgb(245, 245, 203)";
                posSection.style.borderRadius = "8px";

                let parts_of_speech = document.createElement("div");
                console.log(pos.partOfSpeech);
                parts_of_speech.innerHTML = `<strong>Parts of Speech:</strong> ${pos.partOfSpeech}`;
                posSection.appendChild(parts_of_speech);


                pos.definitions.forEach(contents => {
                    console.log(contents.definition);
                    let def = document.createElement("div");
                    def.innerHTML = `<br><strong> Definition:</strong> ${contents.definition}`;
                    posSection.appendChild(def);

                    if (contents.example) {
                        let example_content = document.createElement("div");
                        example_content.innerHTML = `<strong> Example:</strong> ${contents.example}`;
                        posSection.appendChild(example_content);
                        console.log(example_content, "example is");
                    }

                    let antonyms = document.createElement("div");
                    if (contents.antonyms && contents.antonyms.length > 0) {
                        antonyms.innerHTML = `<strong> Antonyms:</strong> ${contents.antonyms.join(', ')}`;
                        posSection.appendChild(antonyms);
                        console.log(contents.antonyms, "antonyms are");
                    }
                    let synonyms = document.createElement("h5");
                    if (contents.synonyms && contents.synonyms.length > 0) {
                        synonyms.innerHTML = `<strong> Synonyms:</strong> ${contents.synonyms.join(', ')}`;
                        posSection.appendChild(synonyms);
                        console.log(contents.synonyms, "synonyms are");
                    }
                })
                posSection.style.padding = "30px";
                myDiv.appendChild(posSection);

                let hr = document.createElement("hr");
                hr.style.border = "2px solid rgb(142, 141, 141)";
                myDiv.appendChild(hr);
            })
            document.getElementById("post").appendChild(myDiv);
        })
    } catch (error) {
        console.error(error);
    }
}