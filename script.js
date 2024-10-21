(() =>{
    document.addEventListener("DOMContentLoaded", (event)=>{
        heroTextChanger();
    })

})();

const pause = ms => new Promise(res => setTimeout(res, ms))

heroTextChanger = async ()=>{
    

    console.log("hero change running");
    let textArr = [
        "Hey there",
        "You there",
        "Yes you",
        "Come take this"
    ]

    let heroText = document.querySelector("#hero-text");

    let count = 0;
    
    while(count < 4){
        heroText.innerText = textArr[count];
        console.log(textArr[count]);
        await pause(3000);
        if(count == 3 ){
            count = 0;
        }
        else{
            count += 1;
        }
    }
}