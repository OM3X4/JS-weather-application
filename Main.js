const apikey = "0669db946b0d839cec9922f8276c6d33";
const input = document.getElementById("input");
const button = document.getElementById("button");
const cityName = document.querySelector("h2");
const tempName = document.querySelector("h1");
const descName = document.querySelector("h4");
const emojiName = document.querySelector("#emoji");
const errorName = document.querySelector("#errorDisplay");
const card = document.getElementById("card")


const emojis = {
    "Clouds" : "☁️",
    "Clear" : "☀️",
    "Rain" : "🌧️"
}


button.addEventListener("click" , async () =>{
    const input = document.getElementById("input").value;
    document.getElementById("input").value = '';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`;
    try{
        Data = await fetchData(input , apiUrl);
        console.log(Data)
        console.log(Data.weather)

        card.style.display = "flex";
        cityName.textContent = '';
        cityName.textContent = Data.name;
        tempName.textContent = '';
        tempName.textContent = Math.round(Data.main.temp - 273.15) + "℃";
        emojiName.textContent = '';
        emojiName.textContent = emojis[Data.weather[0].main];
        descName.textContent = '';
        descName.textContent = Data.weather[0].main;
        }
    catch (error){
        console.error(error)
        if(!input){
            card.style.display = "none";
            errorName.textContent = '';
            errorName.style.display = "block";
            errorName.textContent = "Enter A CITY NAME";
        }
        else{
            card.style.display = "none";
        }

    }

        

})


input.addEventListener("keydown" , (event) => {
    if(event.key === "Enter"){
        event.preventDefault(); // Prevents form submission or other default actions
        weather();
        document.getElementById("input").value = '';
    }
})

async function weather(){
        const input = document.getElementById("input").value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}`;
        try{
            Data = await fetchData(input , apiUrl);
            console.log(Data)
            console.log(Data.weather)
    
            card.style.display = "flex";
            cityName.textContent = '';
            cityName.textContent = Data.name;
            tempName.textContent = '';
            tempName.textContent = Math.round(Data.main.temp - 273.15) + "℃";
            emojiName.textContent = '';
            emojiName.textContent = emojis[Data.weather[0].main];
            descName.textContent = '';
            descName.textContent = Data.weather[0].main;
            }
        catch (error){
            console.error(error)
            if(!input){
                card.style.display = "none";
                errorName.textContent = '';
                errorName.style.display = "block";
                errorName.textContent = "Enter A CITY NAME";
            }
            else{
                card.style.display = "none";
            }
    
        }
    
            
    
    }


async function fetchData(input , url){
    const Data = await fetch(url);
    
    if(!Data.ok){
        throw new Error("Could Not Fetch Weather Data")
    }

    return await Data.json()

}

















