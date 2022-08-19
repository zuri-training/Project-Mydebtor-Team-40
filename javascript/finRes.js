customFetch('https://studebt4-prod.herokuapp.com/debt/','POST')

function customFetch(url,type, data){
const form = document.getElementById('finForm');
if (type === 'POST'){
finForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e)
  const formData = new FormData(form);
  const formDataSerialized = Object.fromEntries(formData);
  const jsonObject = {
    ...formDataSerialized,

  };
  
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