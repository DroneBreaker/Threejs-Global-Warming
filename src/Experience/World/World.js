import Experience from "../Experience";
import Earth from "./Earth";
import Pluto from "./Pluto";
import Stars from "./Stars";

export default class World {
    constructor() {
        this.experience = new Experience()
       


        //Add the mesh to the world
        this.earth = new Earth()
        this.pluto = new Pluto()
        this.stars = new Stars()
    }
}