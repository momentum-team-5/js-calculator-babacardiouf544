let number = document.querySelector('.numbers')
let input = ''
let output = ''

 number.addEventListener('click', function(event) {
     let displayDiv = document.querySelector('.display')
     let displayPara = document.createElement('p')
     target = event.target.id

    target = event.target.id
    if (target === '=') {
        output = eval(input)
        console.log('equal')
        console.log(output)
    }

    if (target === 'C') {
        output = ''
        input = ''
        console.log(input)
        console.log('clear')
    }

    if ((target !== '=') && (target !== 'C')) {
        
        input += target
        output = input
        console.log(input)
        
    }

    displayPara.innerText = output
    displayDiv.appendChild(displayPara)


} 

)
















 