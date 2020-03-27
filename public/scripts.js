function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle('hideScroll')
}

function checkFields(event) {

    const valuesCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]
    const isEmpty = valuesCheck.find(function (value) {
        const checkIf = typeof event.target[value].value === "string";
        const checkEmpty = !event.target[value].value.trim();
        if (checkIf && checkEmpty) {
            return true
        }
    })
    if(isEmpty){
        event.preventDefault()
        alert("Por favor , preencha todos os campos")
    }
}