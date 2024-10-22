(() => {
    document.addEventListener("DOMContentLoaded", (event) => {
        heroTextChanger();
        reviewChanger();
    })

})();

const pause = ms => new Promise(res => setTimeout(res, ms))

heroTextChanger = async () => {


    console.log("hero change running");
    let textArr = [
        "Hey there",
        "You there",
        "Yes you",
        "Come take this"
    ]

    let heroText = document.querySelector("#hero-text");

    let count = 0;

    while (count < 4) {
        heroText.innerText = textArr[count];
        console.log(textArr[count]);
        await pause(3000);
        if (count == 3) {
            count = 0;
        }
        else {
            count += 1;
        }
    }
}

reviewChanger = async () => {


    console.log("hero change running");
    let reviewArr = [
        `"I've tried so many products, but Glow Essence is truly one of a kind! My skin has never felt this soft and radiant. It's the only skincare line that’s actually worked for me, and I’m hooked!"`,
        `"The Glow Essence serum is a game-changer! My skin feels so smooth and hydrated. I’ve received compliments on my glow, and I love that it doesn’t feel greasy at all. Only reason it’s not 5 stars is the shipping time, but worth the wait!"`,
        `"Finally, a product that does what it says! Glow Essence has transformed my skin in just weeks. It's no exaggeration to say this is the best skincare product I’ve ever used. Highly recommend!"`,
        `"I’ve struggled with dry skin for years, but Glow Essence has been a lifesaver. It’s lightweight but deeply nourishing, and the results are immediate. My skin is glowing like never before. I’ll never go back to anything else!"`
    ]

    let reviewerArr = [
        "Sarah W.",
        "Emma L.",
        "David M.",
        "Sofia R."
    ]

    let reviewerLocArr = [
        "United States",
        "United Kingdom",
        "Australia",
        "Canada"
    ]

    let reviewText = document.querySelector("#review");
    let reviewer = document.querySelector("#reviewer");
    let reviewerLoc = document.querySelector("#reviewer-loc");

    let count = 0;

    while (count < 4) {
        reviewText.innerText = reviewArr[count];
        reviewer.innerText = reviewerArr[count];
        reviewerLoc.innerText = reviewerLocArr[count];
        console.log(reviewArr[count]);
        await pause(3000);
        if (count == 3) {
            count = 0;
        }
        else {
            count += 1;
        }
    }
}