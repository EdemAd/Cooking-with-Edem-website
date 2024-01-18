const registrationForm = document.getElementById('subForm');
const userTable = document.getElementById('table');
const button = document.getElementById('sub_btn');

button.addEventListener('click', function(event) {
    
    var gender = "";


    if (document.getElementById('men').checked == true){
        gender = "Men";
    }
    if (document.getElementById('women').checked == true){ 
        gender = "Women";
    }
    if (document.getElementById('other').checked == true){ 
        gender = "Other";
    }
    


    const fame = document.getElementById('firstName').value;
    const lame = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    if(fame && lame && email && gender )
    {
        const newRow = userTable.insertRow(-1); 
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        cell1.textContent = fame;
        cell2.textContent = lame;
        cell3.textContent = email;
        cell4.textContent = gender;

        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';


    }
    else {
        alert("Please fill the whole form");
    }
    

    
});

function click ()
{
    console.log("click !")
}