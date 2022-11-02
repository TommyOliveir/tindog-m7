// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const {avatar , name, age, bio} = this
        // console.log(this.name)
        return `<div class="dog-individual">

                    <div class="dog-img">
                        <div class="stamp">
                           LIKE
                        </div>
                        <img src="${avatar}" alt="${name}" width="100%" >
                        <div class="dog-details">
                            <h2>${this.name}, ${age}</h2>
                            <p>${bio}</p>
                        </div>
                       

                    </div>
                    <div class="">
                        <button>x</button>
                        <button>heart</button>
                    </div>
               
                </div>`
    }
}

export default Dog