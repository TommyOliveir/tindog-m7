// Remember to import the data and Dog class!
import  Dog  from "./Dog.js"
import dogs from "./data.js"


function render() {

    document.getElementById("dog-list").innerHTML = rex.getDogHtml()

}


const rex = new Dog(dogs[0])

render()