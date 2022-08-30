const getRes = (getUrl, type) =>{
    if (type === 'GET'){
    fetch(getUrl)
    .then(data => {return data.json()})
    .then(get => {
      console.log(get.id)
  
    })
    .then(res =>{ console.log(res)})
  }
  
  }
  getRes('http://127.0.0.1:8000/school/me','GET' )
  


customFetch('http://127.0.0.1:8000/school/1/students/','POST', )

function customFetch(url,type){
const form = document.getElementById('form');
if (type === 'POST'){
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e)
  const formData = new FormData(form);
  const formDataSerialized = Object.fromEntries(formData);
  console.log(formDataSerialized)
  const jsonObject = {
    ...formDataSerialized,

  };
  // let dataRes = data.formData();
  
  console.log(jsonObject);
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(jsonObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
    console.log('theres an error ')
  }
});
}
}