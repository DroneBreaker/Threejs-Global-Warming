import Experience from "./Experience";
import * as THREE from 'three'

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;


        this.createPerspectiveCamera()
    }


    createPerspectiveCamera() {
        this.perspectiveCamera = new  THREE.PerspectiveCamera(80, this.sizes.aspect, 0.1, 1000)

        // Add to scene
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 5;
        this.perspectiveCamera.updateProjectionMatrix()
    }

    resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect
    }


    update() {

    }
}