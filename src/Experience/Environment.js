import Experience from "./Experience";
import * as THREE from 'three'

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene


        this.setLight()
        this.setAmbientLight()
    }


    setLight() {
        const lights = new THREE.DirectionalLight('white', 6)
        

        // Set position of the light
        lights.position.set(10, 10, 10)

        //Add to scene
        this.scene.add(lights)
    }


    setAmbientLight() {
        const ambientLight = new THREE.DirectionalLight('white', 4)
        

        // Set position of the light
        ambientLight.position.set(10, 10, 10)

        //Add to scene
        this.scene.add(ambientLight)
    }
}