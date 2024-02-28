import * as THREE from 'three'
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export default class ThreeScene {
    constructor(canvasRef, animationRef) {
        this.canvasRef = canvasRef.current
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvasRef,
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: true,
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.shadowMap.enabled = true;

        this.animationEnabled = true

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000)
        this.camera.position.set(55, 35, 55)
        this.camera.lookAt(new THREE.Vector3())

        this.renderScene = new RenderPass(this.scene, this.camera)
        this.composer = new EffectComposer(this.renderer)
        this.composer.addPass(this.renderScene)
        this.bloomPass = new UnrealBloomPass(
            new THREE.Vector2(this.renderer.width, this.renderer.height),
            1.25,
            0.2,
            0.15
        )
        this.composer.addPass(this.bloomPass)

        this.scene.background = new THREE.Color(0x000000)
        this.scene.add(new THREE.AmbientLight(0xffffff, 10))

        this.controls = new FlyControls(this.camera, this.renderer.domElement);
        this.controls.movementSpeed = 0
        this.controls.rollSpeed = 0.025

        this.points = []

        this.setupScene()
        this.startAnimation(animationRef)
    }
    changeAnimation(animationEnabled, animationRef) {
        this.animationEnabled = animationEnabled
        if (!this.animationEnabled) animationRef.current = null
        else {
            animationRef.current = true
            this.startAnimation(animationRef)
        }
    }
    createPoint() {
        const point = new THREE.Mesh(new THREE.SphereGeometry(0.05), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x1e88e5), side: THREE.DoubleSide }))
        point.position.randomDirection()
        point.position.multiplyScalar(Math.random() * 3 + 1.5)

        const pointGroup = new THREE.Group()
        pointGroup.add(point)
        return pointGroup
    }
    setupScene() {
        this.curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(58.5, 30, 52.5),
            new THREE.Vector3(45, 20, 45),
            new THREE.Vector3(30, 25, 45),
            new THREE.Vector3(10, 30, 35),
            new THREE.Vector3(5, 32.5, 20),
            new THREE.Vector3(0, 32.5, -20),
            new THREE.Vector3(-5, 50, -30),
            new THREE.Vector3(10, 75, -15),
            new THREE.Vector3(25, 85, 0),
            new THREE.Vector3(40, 80, 35),
            new THREE.Vector3(65, 50, 60),
            new THREE.Vector3(58.5, 30, 52.5),
        ]);

        this.curve2 = new THREE.CatmullRomCurve3([
            new THREE.Vector3(60, 30, 30),
            new THREE.Vector3(60, -30, 30),
            new THREE.Vector3(-60, -30, 30),
            new THREE.Vector3(-60, 30, 30),
            new THREE.Vector3(60, 30, 30),
        ]);

        this.curve3 = new THREE.CatmullRomCurve3([
            new THREE.Vector3(60, 30, 30),
            new THREE.Vector3(-60, 30, 30),
            new THREE.Vector3(0, 90, 30),
            new THREE.Vector3(60, 30, 30),
        ]);

        const geometry = new THREE.TubeGeometry(this.curve, 40, 1.5, 16, false);
        geometry.computeBoundingBox();
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0x1e88e5),
            side: THREE.DoubleSide,
        });
        const tubeMesh = new THREE.Mesh(geometry, material);

        const geometry2 = new THREE.TubeGeometry(this.curve2, 40, 1.5, 16, false);
        geometry2.computeBoundingBox();
        const tubeMesh2 = new THREE.Mesh(geometry2, material);
        tubeMesh2.position.x += 150
        tubeMesh2.position.z -= 150

        const geometry3 = new THREE.TubeGeometry(this.curve3, 40, 1.5, 16, false);
        geometry3.computeBoundingBox();
        const tubeMesh3 = new THREE.Mesh(geometry3, material);
        tubeMesh3.position.x -= 150
        tubeMesh3.position.z += 150

        this.scene.add(tubeMesh, tubeMesh2, tubeMesh3)

        for (let i = 0; i < 650; i++) {
            const pointGroup = this.createPoint()
            pointGroup.currentCurvePoint = Math.random()
            pointGroup.position.copy(this.curve.getPoint(pointGroup.currentCurvePoint))
            pointGroup.offset = new THREE.Vector3(0,0,0)
            this.points.push(pointGroup)
        }
        this.scene.add(...this.points)
    }

    async startAnimation(animationRef) {
        const animate = (ref) => {
            if(ref.current){
                window.requestAnimationFrame(() => animate(ref))
            }
            this.controls.update(1 / 60)

            this.composer.render(this.scene, this.camera)
            this.points.forEach(point => {
                point.currentCurvePoint = point.currentCurvePoint + 0.002 > 1 ? 0.002 : point.currentCurvePoint + 0.002
                point.position.copy(this.curve.getPoint(point.currentCurvePoint).add(point.offset))
            })
        }
        animate(animationRef)
    }
}