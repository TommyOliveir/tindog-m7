// Remember to import the data and Dog class!
import Dog from "./Dog.js"
import dogs from "./data.js"

function getNewdog() {

    const nextDogData = dogs.shift()
    console.log(nextDogData)
    return nextDogData ? new Dog(nextDogData) : {}

}

function render() {
    document.getElementById("dog-list").innerHTML = dogface.getDogHtml()
}



let dogface = getNewdog()


render()

document.getElementById("like-btn").addEventListener("click", stampLike)
document.getElementById("nope-btn").addEventListener("click", stampNope)

function stampLike() {

    if (dogs.length > 0) {
        console.log("array length", dogs.length)

        dogface.getbtnLike()
        setTimeout(() => {
            dogface = getNewdog()
            document.getElementById("dog-list").innerHTML = dogface.getDogHtml()
        }, 1000)
    }
    else {
        dogface.getbtnLike()
    }

}

function stampNope() {


    if (dogs.length > 0) {
        console.log("array length", dogs.length)

        dogface.getbtnNope()
        setTimeout(() => {
            dogface = getNewdog()
            document.getElementById("dog-list").innerHTML = dogface.getDogHtml()
        }, 1500)
    }
    else {
        dogface.getbtnNope()
    }

}

