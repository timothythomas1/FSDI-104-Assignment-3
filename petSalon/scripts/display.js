function displayCardPets(){
    // travel the array
    let card = "";
    for (let i = 0; i < petSalon.pets.length; i++){
        // console.log(petSalon.pets[i].length);
        let pet = petSalon.pets[i];
        card +=`
            <div class="col">
                <div class="card h-100">
                    <img src="https://bit.ly/3OOg05j" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Name: ${pet.name}</h5>
                        <p class="card-text">Age: ${pet.age}\</p>
                        <p class="card-text">Gender: ${pet.gender}\</p>
                        <p class="card-text">Breed: ${pet.breed}\</p>
                        <p class="card-text">Service: ${pet.service}\</p>
                        <p class="card-text">Owner: ${pet.owner}\</p>
                        <p class="card-text">Phone: ${pet.phone}</p>
                        <p class="card-text action">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i class="fa-solid fa-trash-can"></i>
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    // inject the card into the HTML (register.html)
    document.getElementById('pet-cards').innerHTML = card;
}

function displayPetsTable(){
    let count = 1;
    let row = "";
    // travel the array (for)
    // inject the tr into the HTML table
    // tr+= (tr,th,td)
    for (let i = 0; i < petSalon.pets.length; i++){
        // console.log(petSalon.pets[i].length);
        let pet = petSalon.pets[i];
        row +=`
            <tr>
                <th scope="row">${count}</th>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.owner}</td>
                <td>${pet.phone}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </td>
            </tr>
        `
        count++;
    }
    document.getElementById('pet-table').innerHTML = row;
}

