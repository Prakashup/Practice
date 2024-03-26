// async Await

const p1 = new Promise((resolve, reject)=>{
     setTimeout(function(){
        resolve("Resolve Promise P1");
     }, 1000)
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(function(){
       resolve("Resolve Promise P2");
    }, 5000)
});


// Promise way
// function getData(){
//     p1.then( res => console.log(res));
//     console.log("Old way of handling Promise");
// }

// getData();

const API_URL = "https://api.github.com/users/prakashup";
let getGithubProfile = fetch(API_URL).then(res => res.json()).then(result => console.log(result.name));


console.log(getGithubProfile);

// async function handlePromise(){
//     const res1 = await getGithubProfile;
//     const result = await res1.json();
//     console.log(result.avatar_url);

//     // const res2 = await p2;
//     // console.log("After P2 promise");
//     // console.log(res1);
// }

// handlePromise();