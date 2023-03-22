import Experience from "./Experience";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;


        this.createPerspectiveCamera();
        this.setControls();
    }


    createPerspectiveCamera() {
        this.perspectiveCamera = new  THREE.PerspectiveCamera(50, this.sizes.aspect, 0.1, 1000)

        // Add to scene
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z = 10;
        this.perspectiveCamera.updateProjectionMatrix()
    }


    setControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true
        this.controls.enablePan = true
        this.controls.zoomSpeed = 0.5
        this.controls.enableZoom = true
        this.controls.enabled = true
        this.controls.autoRotate = true
        this.controls.autoRotateSpeed = 0.6


        // this.controls.update()
    }

    resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect
    }


    update() {
        this.controls.update()
    }
}