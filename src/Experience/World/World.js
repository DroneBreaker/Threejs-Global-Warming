import Experience from "../Experience";
import Earth from "./Earth";
import Stars from "./Stars";

export default class World {
    constructor() {
        this.experience = new Experience()
        // this.sizes = this.experience.sizes
        // this.scene = this.experience.scene
        // this.canvas = this.experience.canvas
        // this.camera = this.experience.camera


        //Add the mesh to the world
        this.earth = new Earth()
        this.stars = new Stars()
    }
}