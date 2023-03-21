import Experience from "../Experience";
import * as THREE from 'three'


export default class Earth {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        
        // Add a geometry
        const geometry = new THREE.SphereGeometry(2, 40, 40)

        // Add a material
        const material = new THREE.MeshStandardMaterial({
            map: new THREE.TextureLoader().load('/earth_day.jpg')
        })

        // Add geometry and material to mesh
        const earth = new THREE.Mesh(geometry, material)
        earth.position.set(2.5, 0, 0)
        // earth.rotation.y += 0.05

        
        
        // Add to scene
        this.scene.add(earth)





        const mouse = {
            x: undefined,
            y: undefined
        }


        
        // window.addEventListener('mousemove', () => {
        //     mouse.x = (event.clientX / innerWidth) * 2 - 1
        //     mouse.y = -(event.clienty / innerHeight) * 2 + 1
        // })
    }
    

    // animate() {
    //     window.requestAnimationFrame(animate)
    //     this.earth.rotation.y += 0.5
    // }

    // animate()
}