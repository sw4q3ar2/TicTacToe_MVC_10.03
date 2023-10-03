class KockaView{
    #index;
    #allapot
    constructor(szuloELEM, index){
        this.szuloELEM = szuloELEM;
        this.#index = index;
        this.#allapot = true;
        this.#htmlElemLetrehozas();
        this.elem = $(".elem:last-child");
        this.pElem = this.elem.children("p");
        console.log(this.elem);
        this.elem.on("click", () => {
            if (this.#allapot) {
                this.#esemenyTrigger("kivalasztott");
                this.#allapot = false;
            }
        })
    }

    getIndex(){
        return this.#index;
    }

    #esemenyTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail:this});
        window.dispatchEvent(esemenyem);
    }

    setErtek(jel){
        this.pElem.html(jel);
    }

    #htmlElemLetrehozas(){
        let txt = "";
        txt += `<div class="elem"> <p></p> </div>`
        this.szuloELEM.append(txt);
    }
}

export default KockaView;