// Objet literals 
// Arrays []
// Objets {}
let petSalon = {
    // Attributes
    name:"The Fashion Pet", 
    address:"Ave University 768",
    hours:{
        open:"9:00am",
        closed:"6:00pm",
    },
    prices: {
        small: 100, 
        medium: 200, 
        large: 300
    },
    pets: []
}
// constructor fucntions 
// -------------------------------- Parameters/Local Variables --------------------------------
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    // attributes = parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
for (let i = 0; i < petSalon.pets.length; i++){
    document.getElementById('pets').innerHTML += `
    <p>${petSalon.pets[i].name}\</p>`
}
// creating the function
function displayInfo(){
    document.getElementById("info").innerHTML = `
   <p class="welcome"> Welcome to the ${petSalon.name} family. You can find us at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.closed}</p>
    `;
}
function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML = `
    <p class="que">There are currently ${petSalon.pets.length} pets in the salon que</p>
    `;
}
function isValid(aPet){
    let valid = true;
    if (aPet.name == "" ||
        aPet.age == "" ||
        aPet.gender == "" ||
        aPet.breed == "" ||
        aPet.service == "Choose..." ||
        aPet.owner == "" ||
        aPet.phone == ""
    ){
        valid = false;
    }
    return valid;
}

function clearInputs(){
    document.getElementById("textPetName").value = "";
    document.getElementById("textPetAge").value = "";
    document.getElementById("textPetGender").value = "";
    document.getElementById("textPetBreed").value = "";
    document.getElementById("inputGroupSelect01").value = "";
    document.getElementById("textPetOwnerName").value = "";
    document.getElementById("textPetContactPhone").value = "";
}

function register(){
    //get info from the inputs
    let petName = document.getElementById("textPetName").value;
    let age = document.getElementById("textPetAge").value;
    let gender = document.getElementById("textPetGender").value;
    let breed = document.getElementById("textPetBreed").value;
    let service = document.getElementById("inputGroupSelect01").value;
    let ownerName = document.getElementById("textPetOwnerName").value;
    let contactPhone = document.getElementById("textPetContactPhone").value;

    // create the object
    let newPet = new Pet(petName,age,gender,breed,service,ownerName,contactPhone);
    if(isValid(newPet)){
        // push the object
        petSalon.pets.push(newPet);
        displayNumberOfPets();
        displayCardPets();
        displayPetsTable();
        clearInputs();
    }
    else{
        alert("Please enter and select valid pet information");
    }
}

function init(){
    // Creating new objects from the constructors
    let ted = new Pet("Ted",50,"Male","Bear", "Grooming", "Greg", "666-666-6666");
    let jerry = new Pet("Jerry",5,"Male","Mixed", "Vax", "Tim", "666-666-6666");
    let turbo = new Pet("Turbo",10,"Female","Pit", "Vax", "Tim", "666-666-6666");
    let jacko = new Pet("Jacko",10,"Female","Pit", "Vax", "Tim", "666-666-6666");

    //main function
    petSalon.pets.push(ted,jerry,turbo, jacko);
    console.log(petSalon.pets);

    // calling the function
    displayInfo();
    displayNumberOfPets() ;
    displayCardPets();
    displayPetsTable();
    console.log(petSalon.pets);
    //hook events
}

window.onload=init;