const locatedCountry = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json())
  .then(data=>dispalyCountry(data))
}

const dispalyCountry = countries =>{
  const countryDiv = document.getElementById('country-div')
  countries.forEach(country => {
    console.log(country.name.common)
    const creatDiv = document.createElement('div')
    creatDiv.classList.add('country')
    creatDiv.innerHTML = `
     <h5> Name: ${country.name.common} </h5>
     <p> City: ${country.capital? country.capital : 'No Capital'}
     <br>
     <br>

     <button onclick = "dispalyButton('${country.cca2}')"> Details  </button>
    `
    countryDiv.appendChild(creatDiv)
    
  });

}
// dainamic api creat

const dispalyButton = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`
  fetch(url)
  .then(response=>response.json())
  .then(user=> showDisplay(user[0]))
}

const showDisplay = country =>
{
  const countryDetiles = document.getElementById('country-detiles');
  countryDetiles.innerHTML = `  
   <h5> Name: ${country.name.common} </h5>
   <img src="${country.flags.png}">
  `
}
locatedCountry()