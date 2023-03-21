import Experience from "./Experience";
import * as THREE from 'three'

export default class Renderer {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.camera = this.experience.camera;
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes


        this.setRenderer();
        this.resize()
        this.update()
    }


    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true})

        this.renderer.physicallyCorrectLights = true
        // this.renderer.toneMapping = true
        // this.renderer.toneMappingExposure = 1.75
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
        this.renderer.setSize(this.sizes.width, this.sizes.height)
    }

    resize() {
        this.renderer.setPixelRatio(this.sizes.pixelRatio)
        this.renderer.setSize(this.sizes.width, this.sizes.height)
    }


    update() {
        this.renderer.render(this.scene, this.camera.perspectiveCamera)
    }
}