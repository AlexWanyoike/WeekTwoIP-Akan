function getName(event){
    event.preventDefault()
    let date = document.getElementById('date').value
    let outputTag = document.getElementById('output')
    let myBirthday = new Date(date).toDateString()
    let day = myBirthday.split( ' ' )[0]
    let name = document.getElementById('name').value
    let gender = document.getElementById('gender').value  
    const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    console.log(femaleNames);
    console.log(maleNames);
    let solution = document.getElementById('solution')
    let akanName;
          if (gender=== null|| date===''){
               alert('Error In Data Input')
          }else if (gender=== 'male' && day=== "Sun"){
               akanName= maleNames[0]
          }else if (gender=== 'male' && day==="Mon"){
               akanName= (maleNames[1])
          }else if (gender=== 'male' && day==="Tue"){
               akanName=maleNames[2]
          }else if (gender=== 'male' && day==="Wed"){
               akanName=(maleNames[3])
          }else if (gender=== 'male' && day==="Thu"){
               akanName=(maleNames[4])
          }else if (gender=== 'male' && day==="Fri"){
               akanName=(maleNames[5])
          }else if (gender=== 'male' && day==="Sat"){
               akanName=(maleNames[6])
          }else if (gender=== 'female' && day==="Sun"){
               akanName=(femaleNames[0])
          }else if (gender=== 'female' && day==="Mon"){
               akanName=(femaleNames[1])
          }else if (gender=== 'female' && day==="Tue"){
               akanName=(femaleNames[2])
          }else if (gender=== 'female' && day==="Wed"){
               aakanName=(femaleNames[3])
          }else if (gender=== 'female' && day==="Thu"){
               akanName=(femaleNames[4])
          }else if (gender=== 'female' && day==="Fri"){
               akanName=(femaleNames[5])
          }else if (gender=== 'female' && day==="Sat"){
               akanName=(femaleNames[6])
          }
     
       
    let message = `Hey ${name} your birthday is on the ${myBirthday}` 
    solution.innerHTML= `You name is ${akanName}.`
    outputTag.innerHTML = message

}
