class Model{
    #allapot;
    #list = [];
    #lepes;
    constructor(){
        this.#allapot = "X";
        this.#list = [".",".",".",".",".",".",".",".","."];
        this.#lepes = 0;
    }

    setAllapot(index){
        this.#lepes++;
        if(this.#allapot === "X"){
            this.#allapot = "O";
        } else{
            this.#allapot = "X";
        }
        this.#list[index] = this.#allapot;
        console.log(this.#list);
    }

    getErtek(){
        return this.#allapot;
    }

    vegeVanE(){
        let eredmeny = this.#vizSzintesEll();
        if (eredmeny.indexOf("XXX") > -1) {
            return "X nyert";
        }else if (eredmeny.indexOf("OOO") > -1) {
            return "O nyert";
        }else if (this.#lepes >= 9) {
            return "döntetlen";
        }
        return "nope vege"
    }

    #vizSzintesEll(){
        //végigmegyek a listán
        //osszerakok egy sztringet az elemekből
        //van a szringben xxx

        let vText = "";
        for (let i = 0; i < 9; i++) {
            vText += this.#list[i];
            if (i % 3 == 2) {
                vText += "@";
            }
        }
        console.log(vText);
        return vText;
    }
}

export default Model;