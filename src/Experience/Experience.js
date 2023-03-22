import * as THREE from 'three'
import Sizes from '../Utils/Sizes';
import Time from '../Utils/Time';
import Camera from './Camera';
import Environment from './Environment';
import Renderer from './Renderer';
import World from './World/World';

export default class Experience {
    static instance;
    constructor(canvas) {
        if(Experience.instance) {
            return Experience.instance
        }
        Experience.instance = this
        this.canvas = canvas

        /**
         * Setup the scene
         * Camera
         * Renderer
         */
        this.scene = new THREE.Scene();
        this.time = new Time()
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.environemnt = new Environment()
        this.world = new World();


        // Event emitter for time class
        this.time.on('update', () => {
            this.update();
        })

        // Event emitter for sizes class
        this.sizes.on('resize', () => {
            this.resize();
        })
    }

    update() {
        this.camera.update()
        this.renderer.update()
        this.world.earth.update()
        this.world.pluto.update()
    }

    
    resize() {
        this.camera.resize()
        this.renderer.resize()
    }
}