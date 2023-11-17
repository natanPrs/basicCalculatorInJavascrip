let option = ""
let x = 0
let y = 0

function addition () {
    x = Number(prompt("Qual o valor do primeiro número?"))
    y = Number(prompt("Qual o valor do segundo número?"))
    const add = x + y

    alert(x +" + "+ y + " é igual a "+ add)
}

function subtract () {
    x = Number(prompt("Qual o valor do primeiro número?"))
    y = Number(prompt("Qual o valor do segundo número?"))
    const add = x - y

    alert(x +" - "+ y + " é igual a "+ add)
}

function multiply () {
    x = Number(prompt("Qual o valor do primeiro número?"))
    y = Number(prompt("Qual o valor do segundo número?"))
    const add = x * y

    alert(x +" * "+ y + " é igual a "+ add)
}
function division () {
    x = Number(prompt("Qual o valor do primeiro número?"))
    y = Number(prompt("Qual o valor do segundo número?"))
    const add = x / y

    alert(x +" / "+ y + " é igual a "+ add)
}

do {
     option = prompt(
        "Escolha uma das opções:" +
        "\n1. Adição" +
        "\n2. Subtração" +
        "\n3. Multiplicação" +
        "\n4. Divisão" +
        "\n5. Sair"
        )

        switch(option){
            case "1":
                addition()
                break
            case "2":
                subtract()
                break
            case "3":
                multiply()
                break
            case "4":
                division()
                break    
            case "5":
                alert("Você escolheu Sair")
                alert("Encerrando...")
                break
        }
} while (option !== "5")