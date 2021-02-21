function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let outputTag = document.getElementById('output')
    //let myBirthday = new Date(date).value
    let myBirthday = new Date(date).toDateString()
    let day = myBirthday.split( ' ' )
    let name = document.getElementById('name').value
    let gender = document.getElementById('gender').value  
    let message = `Your were born on the ${date} and you are ${gender}` 
    let akanname;
    let femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    let malenames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
  

    
    if (gender ==='male' && day ==='Sun'){
        akanname = malenames[0]
   }else if (gender ==='male' && day ==='Mon'){
        akanname = malenames[1]
   }else if (gender ==='male' && day ==='Tue'){
        akanname = malenames[2]
   }else if (gender ==='male' && day ==='Wed'){
        akanname = malenames[3]
   }else if (gender ==='male' && day ==='Thu'){
        akanname = malenames[4]
   }else if (gender ==='male' && day ==='Fri'){
        akanname = malenames[5]
   }else if (gender ==='male' && day ==='Sat'){
        akanname = malenames[6]
   }else if (gender ==='female' && day ==='Sun'){
        akanname = femalenames[0]
   }else if (gender ==='female' && day ==='Mon'){
        akanname = femalenames[1]
   }else if (gender ==='female' && day ==='Tue'){
        akanname = femalenames[2]
   }else if (gender ==='female' && day ==='Wed'){
        akanname = femalenames[3]
   }else if (gender ==='female' && day ==='Thu'){
        akanname = femalenames[4]
   }else if (gender ==='female' && day ==='Fri'){
        akanname = femalenames[5]
   }else if (gender ==='female' && day ==='Sat'){
        akanname = femalenames[6]
   }
   let message = `Your Akan name is ${akanname}`
  
 let solution = document.getElementsById('solution')
    solution.innerHTML= `Your Akan name would have been ${akanname}`
  
    outputTag.innerHTML = message

}
