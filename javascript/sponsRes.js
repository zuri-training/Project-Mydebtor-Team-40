customFetch('http://127.0.0.1:8000/sponsor/','POST', )

function customFetch(url,type){
const form = document.getElementById('sponsForm');
if (type === 'POST'){
sponsForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e)
  const formData = new FormData(form);
  const formDataSerialized = Object.fromEntries(formData);
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