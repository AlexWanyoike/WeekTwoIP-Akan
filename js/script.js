function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let outputTag = document.getElementById('output')
    let message = `Your were born on the ${date}`   
    outputTag.innerHTML = message
    console.log(date);
}