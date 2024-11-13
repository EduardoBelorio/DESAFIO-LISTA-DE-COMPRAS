// Seleciona o elemento <form> da página para manipulá-lo
const form = document.querySelector('form')

// Seleciona o primeiro elemento <ul> (lista não ordenada) da página
const list = document.querySelector('ul')

// Seleciona o campo de texto de entrada com o id 'inputText' para obter o valor inserido pelo usuário
const input = document.getElementById('inputText')

// Seleciona o elemento <footer> para manipulação posterior (exibir resultados)
const footer = document.querySelector('footer')

// Função para criar um novo item na lista
const newItem = (inputValue) => {
    const item = document.createElement('li')
    const itemName = document.createElement('span')
    itemName.textContent = inputValue

    // Cria o checkbox
    const checkboxItem = document.createElement('input')
    checkboxItem.type = 'checkbox'

    // Cria o ícone de deletar
    const deleteIcon = document.createElement('img')
    deleteIcon.src = 'assets/deleteButton.svg' // Certifique-se de que o caminho da imagem está correto
    deleteIcon.classList.add('deleteItem')

    // Evento para deletar o item da lista e mostrar o footer de alerta
    deleteIcon.addEventListener('click', () => {
        list.removeChild(item)
        showAlertItem() // Mostra o footer de alerta
    })

    // Adiciona o checkbox, o nome do item e o ícone de deletar ao item da lista (li)
    item.append(checkboxItem, itemName, deleteIcon)

    // Adiciona o item na lista (ul)
    list.appendChild(item)
}

// Função para mostrar o footer temporariamente quando um item for deletado
const showAlertItem = () => {
    footer.classList.add('alertDeleteItem')

    setTimeout(() => {
        footer.classList.remove('alertDeleteItem')
    }, 2000); // 2 segundos
}

// Evento de submissão do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    const inputValue = input.value

    if (inputValue) {
        newItem(inputValue) // Adiciona o novo item
    }

    input.value = '' // Limpa o campo de input após adicionar o item
}

// Validação para impedir a inserção de números
input.addEventListener('input', () => {
    const regex = /\d+/g
    input.value = input.value.replace(regex, "") // Remove os números do input
})