// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const {avatar , name, age, bio, hasBeenLiked} = this
        // console.log(this.name)
        return `<div class="dog-individual">

                    <div class="dog-img">
                        <div id="stamp" class="stamp">
                            <img src="${ hasBeenLiked ? "/images/badge-like.png" : "/images/badge-nope.png"}" alt="w"  >
                        </div>
                        <img src="${avatar}" alt="${name}" width="100%" >
                        <div class="dog-details">
                            <h2>${this.name}, ${age}</h2>
                            <p>${bio}</p>
                        </div>
                       

                    </div>
                    <div class="">
                        <button>x</button>
                        <button id="like-btn">heart</button>
                    </div>
               
                </div>`
    }
}

export default Dog