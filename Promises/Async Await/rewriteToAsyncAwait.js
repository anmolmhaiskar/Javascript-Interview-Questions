// Rewrite the code with promise to an asycn await function

// function loadJson(url){
//     return fetch(url).then((response)=> {
//         if(response.status === 200){
//             return response.json();
//         }
//         else {
//             throw new Error(response.status);
//         }
//     });
// }

async function loadJson(url) {
  const response = await fetch(url);

  if (response.status === 200) {
    let jsonResponse = await response.json();
    return jsonResponse;
  }

  throw new Error(response.status);
}

loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
  console.log(err);
});
