import Model from "../Model/model.js";
import JatekTerView from "../View/JatekTerView.js";

class Controller{
    constructor(){
        this.MODEL = new Model();
        this.JATEKTER = new JatekTerView($(".kocka"));
        

        $(window).on("kivalasztott", (event) => {
            console.log(event.detail.getIndex());
            this.MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(this.MODEL.getErtek());
            console.log(this.MODEL.vegeVanE());
        });
    }
}

export default Controller;