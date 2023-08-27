console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
    .then((response)=> response.json())
    .then((data)=>{
        let x = 0;
        while(x <= data.message.length-1){
            let newImage = document.createElement("img")
            newImage.src = data.message[x]
            imageContainer = document.getElementById("dog-image-container")
            imageContainer.appendChild(newImage)
            x++
        }
    })
const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
    .then((response)=> response.json())
    .then((data)=>{
        const breedList = document.getElementById("dog-breeds")
        const breedArray = Object.keys(data.message)

        let i = 0;
        for(const breed of breedArray){
            const listItem = document.createElement("li")
            listItem.textContent = breed;
            listItem.classList.add(`${breed[0]}`)
            breedList.appendChild(listItem)
            listItem.addEventListener('click',()=>{
                listItem.style.color = 'hsl(' + (360*breedArray.indexOf(breed)/breedArray.length)+ ",80%,50%)"
            })
            i++;
        }
    })
document.addEventListener('DOMContentLoaded', function() {
    const filter = document.getElementById("breed-dropdown")
    filter.addEventListener('change',(event)=>{
        const filterClass = document.getElementsByClassName(event.target.value);
        const allList = document.querySelectorAll("li");
        for(const filterItem of allList){
            filterItem.style.display = 'none';
            console.log(filterItem)
        }
        for(const filterItem of filterClass){
            filterItem.style.display = 'block';
        }
    })
});

