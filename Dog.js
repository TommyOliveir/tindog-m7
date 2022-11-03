// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data)



    }

  
    getDogHtml() {
        const { avatar, name, age, bio, } = this
        // const show = true
        // if (show) {
        //     this.hasBeenLiked = true
        // }


        // console.log(this.name)
        return `<div class="dog-individual">

                    <div class="dog-img">
                
                        <div id="stamp-like" class="stamp">
                            <img src="/images/badge-like.png"  alt="like"  >
                        </div>

                        <div id="stamp-nope" class="stamp">
                            <img src="/images/badge-nope.png" alt="w"  >
                        </div>
                        <img src="${avatar}" alt="${name}" width="100%" >
                        <div class="dog-details">
                            <h2>${this.name}, ${age}</h2>
                            <p>${bio}</p>
                        </div>
                    
                    </div>
                  
               
                </div>`


    }
    getbtnLike(){
       
        this.hasBeenLiked = true
        document.getElementById("stamp-like").style.display = "block"
        document.getElementById("stamp-nope").style.display = "none"
       console.log(this.hasBeenLiked);
    
    }
    getbtnNope(){
       
        this.hasBeenLiked = false
        document.getElementById("stamp-like").style.display = "none"
        document.getElementById("stamp-nope").style.display = "block"
       console.log(this.hasBeenLiked);
    
    }

}

export default Dog