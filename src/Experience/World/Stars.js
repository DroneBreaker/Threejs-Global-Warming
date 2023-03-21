import Experience from "../Experience";
import * as THREE from 'three'

export default class Stars {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene


        /**
         * Setup the star
         * Add geometry and material
         * Add to star
         */
        const geometry = new THREE.BufferGeometry()
        const material = new THREE.PointsMaterial({color: 0xffffff})

        const stars = new THREE.Points(geometry, material)

        // Add points to the buffer
        const starVertices = []
        for (let i = 0; i < 12000; i++) {
            const x = (Math.random() - 0.5) * 2000
            const y = (Math.random() - 0.5) * 2000
            const z = -Math.random() * 2000

            starVertices.push(x, y, z)
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))


        // Add to scene
        this.scene.add(stars)
    }
}