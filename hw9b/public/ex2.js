const TravelRecord =
{
    name: "Stephanie",
    countries: [
        {
            name: "Japan",
            year: 2016
        },
        {
            name: "Mexico",
            year: 2019
        },
        {
            name: "Canada",
            year: 2010
        }
    ]
};

document.getElementById("callAPI").addEventListener("click", e => {

    fetch("http://localhost:3000/api/countries", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(TravelRecord)
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById("result").textContent = result;
            console.log(result);
        })
});