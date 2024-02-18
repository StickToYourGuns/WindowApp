let elements = document.querySelectorAll('.workspace__area');
for (let i = 0; i < elements.length; i++) {
    let sortable = Sortable.create(elements[i], {
        group: "workspace",
        draggable: '.window',
        animation: 150
    });
}



class Window {
    constructor(areaNumber) {
        this.name = "default window";
        this.window = document.createElement("div");
        this.window.classList.add("window");
        
        this.controlPanel = document.createElement("div");
        this.controlPanel.classList.add("window__controlPanel");
        
        this.title = document.createElement("p");
        this.title.classList.add("window__title");
        this.title.innerHTML = this.name;
        
        
        this.controls = document.createElement("div");
        this.controls.classList.add("window__controls");
        
        this.button = document.createElement("div");
        this.button.classList.add("window__hide");
        handler(this.button, this, "hide");
        this.controls.append(this.button);
        this.button = document.createElement("div");
        this.button.classList.add("window__resize");
        handler(this.button, this, "resize");
        this.controls.append(this.button);
        this.button = document.createElement("div");
        this.button.classList.add("window__close");
        handler(this.button, this, "close");
        this.controls.append(this.button);
        // потом переделаю в цикл
        
        this.legend = document.createElement("div");
        this.legend.classList.add("window__legend");
        
        this.content = document.createElement("div");
        this.content.classList.add("window__content");
        
        this.window.append(this.controlPanel);
        this.window.append(this.legend);
        this.window.append(this.content);
        this.controlPanel.append(this.title);
        this.controlPanel.append(this.controls);
        
        let areas = document.querySelectorAll(".workspace__area")
        if ((areaNumber<0) || (areaNumber>2)) {
            areas[2].append(this.window);
            alert(`Элемент "${this.name}" автоматически установлен в конец`)
        } else {
            for (let i=0; i<areas.length; i++) {
                areas[areaNumber].append(this.window);
            }
        }
        
        function handler (target, obj, type) {
            target.addEventListener("click", function(e) {
                e.stopPropagation();
                if (type == "hide") {
                    obj.hide();
                } else if (type == "resize") {
                    obj.resize();
                } else if (type == "close") {
                    obj.close();
                }
            })
        }
    }
    
    hide() {
        let parent = this.window.parentNode;
        let window = this.window;
        window.classList.add("hidden");
        document.querySelector(".hideBar").append(window);
        window.addEventListener("click", function(e) {
            this.classList.remove("hidden");
            parent.append(this);
        })
    }
    
    resize() {
        this.window.classList.toggle("maximize");
        
    }
    
    close() {
        this.window.style.display = "none";
    }
}

let defaultWindow = new Window(0);
let defaultWindow2 = new Window(1);
let defaultWindow3 = new Window(2);
// let defaultWindow4 = new Window(1);

// menuStart.addEventListener("click", function() {
    //     menu.classList.add("visible");
    //     menuItems.forEach(function(item) {
        //         item.classList.toggle("enable");
        //     })
        // })
        
        
let menuStart = document.querySelector('.hideBar__start');
let menuUl = document.querySelector('.hideBar__ul');
let menuLi = document.querySelector('.hideBar__li');
let menuItems = document.querySelectorAll('.menuItem');

menuStart.addEventListener("click", function() {
    menuStart.classList.add("active");
    menuUl.classList.add("active");
    menuLi.classList.add("active");
});

menuItems.forEach(function(item){
    item.addEventListener("mouseover", function(e) {
        if (e.target != item){
            console.log("smth");
        }
    })
})

// menuStart.addEventListener("mouseover", function(e) {
//     if (e.target == menuStart){
//         console.log("smth");
//     }
// });