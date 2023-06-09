import Experience from "../Experience";
import * as THREE from 'three'


export default class Earth {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = this.experience.time

        
        // Add a geometry
        const geometry = new THREE.SphereGeometry(2, 40, 40)

        // Add a material
        const material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load('/earth_day.jpg')
        })

        // Add geometry and material to mesh
        const earth = new THREE.Mesh(geometry, material)
        earth.position.set(4, 0, 0)

        // Update Function
        this.update = function update() {
            earth.rotation.x += 0.002
            earth.rotation.y += 0.002
            earth.rotation.z += 0.002
        }
       
        
        // Add to scene
        this.scene.add(earth)
    }
}