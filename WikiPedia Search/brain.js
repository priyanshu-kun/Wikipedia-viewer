window.addEventListener("load", () => {
    const InputBox = document.querySelector("#Input-Box");
    const Button = document.querySelector(".btn");

    Button.addEventListener("click", () => {

        // const URI = ;
        MakeCall();
        InputBox.value = "";
    })

    async function MakeCall() {
        const url = "https://en.wikipedia.org/w/api.php?" +
            new URLSearchParams({
                origin: "*",
                action: "parse",
                page: InputBox.value,
                format: "json",
            });

        try {
            const req = await fetch(url);
            const json = await req.json();
            document.querySelector(".container").innerHTML = json.parse.text['*'];
        } catch (e) {
            console.error(e);
        }
    }

})