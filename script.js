var lastIncidents = [
    {
        sys_id: "1",
        number: "INC100001",
        description: "Brief description",
        priority: "High"
    },
    {
        sys_id: "2",
        number: "INC100002",
        description: "Brief description",
        priority: "Low"
    },
    {
        sys_id: "3",
        number: "INC100003",
        description: "Brief description",
        priority: "Medium"
    },
    {
        sys_id: "4",
        number: "INC100004",
        description: "Brief description",
        priority: "Medium"
    },
    {
        sys_id: "5",
        number: "INC100004",
        description: "Brief description",
        priority: "Low"
    },
    {
        sys_id: "6",
        number: "INC100004",
        description: "Brief description",
        priority: "High"
    },
];


document.addEventListener("DOMContentLoaded", function (event) {

    let list = document.querySelector('#lastIncidents');
    let qtd = document.querySelector('#qtdIncident');

    qtd.innerText = '0';
    

    lastIncidents.forEach(function (item, index) {
        list.innerHTML += `
            <li class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">INC10000${item.sys_id}</h6>
                    <small class="text-muted">Brief description</small>
                </div>
                <small class="text-muted">High</small>
            </li>
        
        `
    });

    qtd.innerText = lastIncidents.length

    console.log("DOM completamente carregado e analisado");
});


document.querySelector("#myForm").addEventListener("submit", function (event) {
    // if(!isValid){
    //     event.preventDefault();    //stop form from submitting
    // }
    event.preventDefault();

    let urgency = document.querySelector("#urgency").value;
    let user = document.querySelector("#user").value;
    let description = document.querySelector("#description").value;

});



async function createIncident() {

    try {

        var basic_auth = btoa('raul.gil:zQs,YG6p0TepRA1');

        const payload = {
            "short_description": "teste",
            "assigned_to": "",
            "category": "software",
            "subcategory": "email",
            "assignment_group": "12a586cd0bb23200ecfd818393673a30"
        }

        const response = await fetch('https://dev145546.service-now.com/api/now/table/incident', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": 'Basic ' + basic_auth,
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        return data;

    } catch (error) {

        console.log('Deu erro');
        return error;
    }





}

async function getIncident() {

    try {

        const payload = {
            "short_description": "teste",
            "assigned_to": "",
            "category": "software",
            "subcategory": "email",
            "assignment_group": "12a586cd0bb23200ecfd818393673a30"
        }

        const response = await fetch('https://dev145546.service-now.com/api/now/table/incident/57af7aec73d423002728660c4cf6a71c', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "no-cors",
                "Authorization": 'Basic ' + btoa('raul.gil' + ':' + 'zQs,YG6p0tepRA1'),
            }
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
        console.log('Deu erro')
    }





}