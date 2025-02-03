class Element {
    constructor({parent = document.querySelector("main"), tag = "div", classes = []}) {
        this.parent = parent;
        this.tag = tag;
        this.classes = classes;

        this.e = document.createElement(this.tag);
        for (let className of this.classes) {
            this.e.classList.add(className);
        }
        if (this.parent === null) {
            document.body.appendChild(this.e);
        } else {
            this.parent.appendChild(this.e);
        }
    }

    append(name, element) {
        this[name] = element;
    }

    get html() {
        return this.e;
    }

    get id() {
        return this.e.id;
    }
    set id(value) {
        if (value.length > 0 && document.querySelector(`#${value}`) === null) {
            this.e.id = value;
        } else {
            throw Error("ID either invalid or already exists");
        }
    }
}

class E_img extends Element {
    constructor(obj) {
        super(obj);
        this.src = obj.src;

        this.e.src = this.src;
    }
}

class E_select extends Element {
    constructor(obj) {
        super(obj);
        this.options = obj.options;

        for (let option of this.options) {
            let opt = document.createElement("option");
            opt.textContent = option;
            this.e.appendChild(opt);
        }
    }
}


let obj = {tag: "div", classes: ["test"]};
let img = {tag: "img", src: "bild.png"};
let slct = {tag: "select", options: ["Jordan Love", "Josh Jacobs", "Xavier McKinney"]};
let c = new Element(obj);
let c2 = new Element({});
let i1 = new E_img(img);
let s1 = new E_select(slct);
c2.append("test", new Element({classes: ["test"]}));
c2.test.e.textContent = "blablalba"