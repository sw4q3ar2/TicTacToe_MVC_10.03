import KockaView from "./kockaView.js";

class JatekTerView{
    constructor(szuloELEM){
        for (let i = 0; i < 9; i++) {
            new KockaView(szuloELEM, i);
        }
    }
}

export default JatekTerView;