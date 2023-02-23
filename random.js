const Random = () =>{
  fetch('https://randomuser.me/api/?gender=female')
  .then(res=>res.json())
  .then(data=>displayUser(data))
}
const displayUser = user =>{
  console.log(user)
  const nameTag = document.getElementById('name')
  nameTag.innerHTML = user.results[0].name.first + ' ' +user.results[0].name.last ;

  const genderTag = document.getElementById('Gender')
  genderTag.innerHTML = user.results[0].gender;

  const userId = document.getElementById('email')
    userId.innerHTML=  user.results[0].email;
}

Random();