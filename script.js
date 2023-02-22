// const object = {id:1 , name:'sadiq' , phone:017750707};
// const json = JSON.stringify(object);
// console.log(json)
// const UpdateJson = JSON.parse(json)
// console.log(UpdateJson)

// // fetch("https://jsonplaceholder.typicode.com/photos")
// // .then(response => response.json())
// // .then(json => console.log(json))

 function loaddata(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response=>response.json())
  .then(data=>console.log(data))
}


// button clicked view the data
function loaddata2()
{
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res=>res.json())
  .then(data=>dispalyView(data))
}

function dispalyView(data){
  const ul = document.getElementById('user-list');
  for(const user of data)
  {
    console.log(user.name)
    const li = document.createElement('li');
    li.innerText = user.email;
    ul.appendChild(li);
  }
}


// direct show the api value
function datacollect () {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(Response=>Response.json())
  .then(Data=>dispalyView2(Data))
}

function dispalyView2 (Datas)
{
  const callId = document.getElementById('show-description')
  for (const User of Datas) 
  {
    const div = document.createElement('div');
    div.classList.add('Datas')
    div.innerHTML = `
     <h1>User-${User.postId} </h1>
      <h2>Name: ${User.name} </h2>
     <h5> Email- ${User.email}</h5>
     <p> Description: ${User.body} </p>
    `;
    callId.appendChild(div)
  }
}
datacollect();










