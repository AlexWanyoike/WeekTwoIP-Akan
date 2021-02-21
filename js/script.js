function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let outputTag = document.getElementById('output')
    //let myBirthday = new Date(date).value
    let myBirthday = new Date(date).toDateString()[ 0 ]
    let day = myBirthday.split(' ')
    let name = document.getElementById('name').value
    let gender = document.getElementById('gender').value

    let akanName = document.getElementById('akanName').value
    let femalenames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    let malenames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    
    if (gender ==='male' && day ==='S'){
        return malenames[0]
    }else if (gender ==='male' && day ==='M'){
        return malenames[1]
    } else if (gender ==='male' && day ==='Tue'){
        return malenames[2]
    }else if (gender ==='male' && day ==='Wed'){
        return malenames[3]
    }else if (gender ==='male' && day ==='Thu'){
        return malenames[4]
    }else if (gender ==='male' && day ==='Fri'){
        return malenames[5]
    }else if (gender ==='male' && day ==='Sat'){
        return malenames[6]
    }else if (gender ==='female' && day ==='Sun'){
        return femalenames[0]
    }else if (gender ==='female' && day ==='Mon'){
        return femalenames[1]
    }else if (gender ==='female' && day ==='Tue'){
        return femalenames[2]
    }else if (gender ==='female' && day ==='Wed'){
        return femalenames[3]
    }else if (gender ==='female' && day ==='Thu'){
        return femalenames[4]
    }else if (gender ==='female' && day ==='Fri'){
        return femalenames[5]
    }else if (gender ==='female' && day ==='Sat'){
        return femalenames[6]
    }

    let message =`Hey ${name} you were born on ${day} and you are ${gender}. Your Akan name is ${akanName}`
    outputTag.innerHTML = message
}