var inventory = []
var collection = [
    {
        id: "hp1",
        requirements: "0",
        collected: false
    },
    {
        id: "hp2",
        requirements: "bombs",
        collected: false
    },
    {
        id: "hp3",
        requirements: "bombs",
        collected: false
    },
    {
        id: "hp4",
        requirements: "bombs",
        collected: false
    },
    {
        id: "hp5",
        requirements: "0",
        collected: false
    },
    {
        id: "hp6",
        requirements: "bombs",
        collected: false
    },
    {
        id: "hp7",
        requirements: "pboots",
        collected: false
    },
    {
        id: "hp8",
        requirements: "mudora",
        collected: false
    },
    {
        id: "hp9",
        requirements: "flippers",
        collected: false
    },
    {
        id: "hp10",
        requirements: "glove1",
        collected: false
    },
    {
        id: "hp11",
        requirements: "mirror",
        collected: false
    },
    {
        id: "hp12",
        requirements: "pboots sword2",
        collected: false
    },
    {
        id: "hp13",
        requirements: "sword2",
        collected: false
    },
    {
        id: "hp14",
        requirements: "mirror sword2",
        collected: false
    },
    {
        id: "hp15",
        requirements: "mirror flippers sword2",
        collected: false
    },
    {
        id: "hp16",
        requirements: "pboots mirror bombs sword2",
        collected: false
    },
    {
        id: "hp17",
        requirements: "sword2",
        collected: false
    },
    {
        id: "hp18",
        requirements: "sword2",
        collected: false
    },
    {
        id: "hp19",
        requirements: "hookshot cape sword2",
        collected: false
    },
    {
        id: "hp20",
        requirements: "glove2 hammer sword2",
        collected: false
    },
    {
        id: "hp21",
        requirements: "glove2 flute sword2",
        collected: false
    },
    {
        id: "hp22",
        requirements: "glove2 flute mirror sword2",
        collected: false
    },
    {
        id: "hp23",
        requirements: "mirror glove1 bombs sword2",
        collected: false
    },
    {
        id: "hp24",
        requirements: "somaria qmedal mirror sword2",
        collected: false
    }
]
var check = "" // functions set this before they call a find method to check for a value in an array

function saveCollection(){
    for(var i=0;i<collection.length;i++){
        localStorage.setItem(collection[i].id,collection[i].collected); // runs through the collection array and saves whether or not a heart piece has been collected under the specific piece's id
    } // i referenced https://www.w3schools.com/jsref/prop_win_localstorage.asp to brush up on the syntax
    localStorage.setItem("inventory", inventory.toString()); // saves the entire inventory under 1 key as a string
}

function loadCollection(){
    for(var i=0;i<collection.length;i++){
        if(localStorage.getItem(collection[i].id)==='true'){
            collection[i].collected = true;
        }else{ // checks the value of collected for each heart piece, then converts it to boolean so the site doesn't break before slotting it back into the array
            collection[i].collected = false;
        }
        if(collection[i].collected===true){
            document.getElementById(collection[i].id + "Box").checked = true;
        } // sets the state of the checkboxes to match the underlying values
    }
    var invString = localStorage.getItem("inventory");
    inventory = invString.split(","); // fetches the inventory string and converts it back into an array
    for(var i=0;i<inventory.length;i++){
        document.getElementById(inventory[i]).checked = true;
    } // sets the state of the checkboxes to match the underlying values, this time for the inventory
        updateGuide();
}

function changeItem(item){ // each checkbox passes the item variable, which is the same as the box's id
    var box = document.getElementById(item);
    if(box.checked==true){
        inventory.push(item);
    } // if the box is checked, we add the item to the end of the list, if not, we find and remove it
    else{
        check = item
        var index = inventory.findIndex(checkValue);
        inventory.splice(index, 1); // referenced https://www.w3schools.com/jsref/jsref_splice.asp for syntax
    }
    updateGuide();
}

function changeHP(item){
    var box = document.getElementById(item + "Box");
    check = item;
    if(box.checked==true){
        collection.find(checkCollection).collected = true;
    } // searches collection for the right object id then changes its collected value
    else{
        collection.find(checkCollection).collected = false;
    }
    updateGuide();
}

function updateGuide(){
    var guide = document.getElementsByClassName("guide");
    for(var i=0;i<guide.length;i++){
        console.log(guide[i]); // grabs every guide element, runs a check on it, then either shows or hides it depending on the result
        if(checkItems(guide[i])&&checkCollected(guide[i])){
            guide[i].style.display = 'inline';
        }else{ // referenced https://www.w3schools.com/jsref/prop_style_display.asp for syntax
            guide[i].style.display = 'none';
        }
    }
}

function checkItems(element){
    check = element.id;
    var collect = collection.find(checkCollection);
    var reqs = collect.requirements; // grabs the requirements for a piece from the collection object
    if(reqs === "0"){ // if a piece has no requirements, the check bails and returns true
        return true;
    }
    var reqsArray = reqs.split(" "); // turns the string into an array so it matches the inventory
    console.log(reqsArray);
    for(var i=0;i<reqsArray.length;i++){
        check = reqsArray[i]; // searches the inventory for each requirement. if any search comes up empty, the guide is hidden.
        if(inventory.find(checkValue) === undefined){
            return false;
        }
    } // if all of the requirements are found in the inventory, then the check says it was successful
    return true;
}

function checkCollected(element){
    check = element.id;
    var collect = collection.find(checkCollection);
    var found = collect.collected;
    if(found === true){
        return false;
    }else{ // this block finds a specific heart piece's object, checks if it's been collected, and if so it hides it
        return true;
    }
}


// checkValue and checkCollection were both based on this tutorial: https://www.w3schools.com/jsref/jsref_find.asp
function checkValue(value){
    if(value===check){
        return true;
    }else{ // simple function i wrote to work with .find (i don't know if this was necessary, i was bashing my head against the wall for a bit trying to fix an error and this was one of my attempts)
        return false;
    }
}

function checkCollection(value){
    if(value.id===check){
        return true;
    }else{ // same as check value, but specifically for searching through the collection (it checks for an object's id rather than a specific value)
        return false;
    }
}