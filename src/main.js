let userInput = document.getElementById('value');
let userInputButton = document.getElementById('button');
let myForm = document.querySelector('form').action


userInputButton.addEventListener('click', function starWars(event) {
    event.preventDefault()

    let userInputText = userInput.value.trim();
    
    if (userInputText == '') {
        return  document.getElementById('text').textContent ='Введите текст'
    }

    document.getElementById('text').textContent = 'Загрузка...';


    fetch(`${myForm}${userInputText}`)
        .then((response) => {
            if (!response.ok) {
                document.getElementById('text').textContent = 'Error'
                throw new Error('Сетевой ответ не в порядке');
        } return response.json()
        })
        .then((data) => {
                // document.getElementById('text').textContent = `Id: ${data.id}, Controller: ${data.controller}`;
                document.getElementById('text').textContent = JSON.stringify(data, null, 2)
        })
    .catch((error) => console.error('Error:', error))
}
)
