let users = document.querySelector(".users")
let loading = document.querySelector(".loader");
let select = document.querySelector(".select")
let userId = document.querySelector(".user-id")
let userName = document.querySelector(".user-name")

let API_URL = 'https://jsonplaceholder.typicode.com/users';


async function getUsers(API_URL) {
    
    await fetch(API_URL).then((res) => {
        return res.json();
    }).then((data) => {

        let innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            innerHTML +=
                `
        <div class="col-3 mb-5">
            <div class="card" style="width: 20rem; ">
            <img class="card-img-top" src="https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=" alt="Card image cap"  style="height: 250px;>
                <div class="card-body ">
                  <h5 class="card-title ms-3 pt-3">${data[i].name}</h5>
                  <p class="card-text ms-3 pt-2"><b>Email:</b> ${data[i].email}</p>
                  <p class="card-text ms-3"><b>Street:</b> ${data[i].address.street}</p>
                  <p class="card-text ms-3"><b>City:</b> ${data[i].address.city}</p>
                  <p class="card-text ms-3"><b>Phone:</b> ${data[i].phone}</p>
                  <p class="card-text ms-3"><b>Company Name:</b> ${data[i].company.name}</p> <br> 
                </div>
              </div>
        </div>                                             
    `
        }
        users.innerHTML = innerHTML;
    }).catch(() => {
        users.innerHTML = 'some error occured'
    })

}


window.addEventListener("load",()=>{
    loading.style.display = "block";
    getUsers(API_URL)
})


select.addEventListener("change", (e) => {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            users.innerHTML = ""
            if (select.value === 'id') {
                let sorteredData = data.sort(function (a, b) {
                    return (a.id) - (b.id)
                })
                sorteredData.forEach((user) => {
                    users.innerHTML += `
                <div class="col-3 mb-5">
                    <div class="card" style="width: 20rem; ">
                    <img class="card-img-top" src="https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=" alt="Card image cap"  style="height: 250px;>
                        <div class="card-body ">
                          <h5 class="card-title ms-3 pt-3">${user.name}</h5>
                          <p class="card-text ms-3 pt-2 d-none"> ${user.id}</p>
                          <p class="card-text ms-3 pt-2"><b>Email:</b> ${user.email}</p>
                          <p class="card-text ms-3"><b>Street:</b> ${user.address.street}</p>
                          <p class="card-text ms-3"><b>City:</b> ${user.address.city}</p>
                          <p class="card-text ms-3"><b>Phone:</b> ${user.phone}</p>
                          <p class="card-text ms-3"><b>Company Name:</b> ${user.company.name}</p> <br> 
                        </div>
                      </div>
                </div>                                             
            `
                });
            }
            else if (select.value === 'username') {
                let sorteredData = data.sort(function (a, b) {
                    return a.name.localeCompare(b.name)
                })
                sorteredData.forEach((user) => {
                    users.innerHTML += `
                <div class="col-3 mb-5">
                    <div class="card" style="width: 20rem; ">
                    <img class="card-img-top" src="https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=" alt="Card image cap"  style="height: 250px;>
                        <div class="card-body ">
                          <h5 class="card-title ms-3 pt-3">${user.name}</h5>
                          <p class="card-text ms-3 pt-2"><b>Email:</b> ${user.email}</p>
                          <p class="card-text ms-3"><b>Street:</b> ${user.address.street}</p>
                          <p class="card-text ms-3"><b>City:</b> ${user.address.city}</p>
                          <p class="card-text ms-3"><b>Phone:</b> ${user.phone}</p>
                          <p class="card-text ms-3"><b>Company Name:</b> ${user.company.name}</p> <br> 
                        </div>
                      </div>
                </div>                                             
            `
                });
            }

        })
})

