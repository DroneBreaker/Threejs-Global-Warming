import Experience from "../Experience";
import * as THREE from 'three'


export default class Pluto {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        
        // Add a geometry
        const geometry = new THREE.SphereGeometry(2, 40, 40)

        // Add a material
        const material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load('/pluto_texture.jpg')
        })

        // Add geometry and material to mesh
        const pluto = new THREE.Mesh(geometry, material)
        pluto.position.set(-4, 2, 20)
        
        
        // Update function to handle animations
        this.update = function update() {
            pluto.rotation.x += 0.002
            pluto.rotation.y += 0.002
            pluto.rotation.z += 0.002
        }
         // Add to scene
        this.scene.add(pluto)
    }
}