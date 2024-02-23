import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { mapGrid } from './3DMap';

export default class ThreeScene {
    constructor(canvasRef) {
        this.canvasRef = canvasRef.current
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvasRef,
            alpha: true,
            antialias: true,
            preserveDrawingBuffer: true,
        })
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.shadowMap.enabled = true;

        this.stopAnimation = false

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000)
        this.camera.position.set(55, 35, 55)
        this.camera.lookAt(new THREE.Vector3())

        this.renderScene = new RenderPass(this.scene, this.camera)
        this.composer = new EffectComposer(this.renderer)
        this.composer.addPass(this.renderScene)
        this.bloomPass = new UnrealBloomPass(
            new THREE.Vector2(this.renderer.width, this.renderer.height),
            1,
            0.2,
            0.1
        )
        this.composer.addPass(this.bloomPass)

        this.scene.background = new THREE.Color(0x000000)
        this.scene.add(new THREE.AmbientLight(0xffffff, 10))

        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.setupScene()
        this.composer.render(this.scene, this.camera)
        this.composer.render(this.scene, this.camera)
        // this.startAnimation()
    }
    pauseScene() {
        this.stopAnimation = !this.stopAnimation
        if (!this.stopAnimation) this.startAnimation()
    }
    createMap(height) {
        const mapSize = 150
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(mapSize * mapSize * 3);
        const colors = new Float32Array(mapSize * mapSize * 3);
        const indices = [];

        for (let i = 0; i < mapSize; i++) {
            const row = mapGrid[i]
            const x = (i - mapSize / 2) * 2
            for (let j = 0; j < mapSize; j++) {
                const cell = row[j]
                const z = (j - mapSize / 2) * 2
                const y = cell.noise * height
                const index = (i * mapSize + j) * 3

                vertices[index] = x;
                vertices[index + 1] = y;
                vertices[index + 2] = z;

                const color = new THREE.Color();
                color.setRGB(0, 0, (cell.noise + 0.5) / 2);
                colors[index] = color.r;
                colors[index + 1] = color.g;
                colors[index + 2] = color.b;

                if (i < mapSize - 1 && j < mapSize - 1) {
                    indices.push(
                        i * mapSize + j,
                        (i + 1) * mapSize + j,
                        i * mapSize + j + 1
                    );

                    indices.push(
                        i * mapSize + j + 1,
                        (i + 1) * mapSize + j,
                        (i + 1) * mapSize + j + 1
                    );
                }
            }
        }
        geometry.setIndex(indices);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
        const terrainMesh = new THREE.Mesh(geometry, material);
        return terrainMesh
    }
    createBlock(height) {
        const group = new THREE.Group()

        const surface = new THREE.Mesh(new THREE.BoxGeometry(3, 0.1, 3), new THREE.MeshPhongMaterial({ color: 0x1e88e5 }))
        surface.position.y = height + 0.05

        const points = [
            new THREE.Vector3(1.5, 0, 1.5),
            new THREE.Vector3(-1.5, 0, 1.5),
            new THREE.Vector3(-1.5, 0, -1.5),
            new THREE.Vector3(1.5, 0, -1.5),
            new THREE.Vector3(1.5, 0, 1.5),
        ]
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
        const surfaceEdge = new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: 0xffffff }))
        surfaceEdge.position.y = height + 0.1

        const blockMaterial = new THREE.ShaderMaterial({
            uniforms: {
                color1: {
                    value: new THREE.Color(0x000000)
                },
                color2: {
                    value: new THREE.Color(0x1e88e5)
                }
            },
            vertexShader: `
              varying vec2 vUv;

              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
              }
            `,
            fragmentShader: `
              uniform vec3 color1;
              uniform vec3 color2;

              varying vec2 vUv;

              void main() {

                gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
              }
            `,
        });
        const block = new THREE.Mesh(new THREE.BoxGeometry(3, height, 3), blockMaterial)
        block.castShadow = true
        block.position.y = height / 2

        group.add(block, surface, surfaceEdge)
        return group
    }
    setupScene() {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(57.5, 32.5, 52.5),
            new THREE.Vector3(45, 20, 45),
            new THREE.Vector3(30, 25, 45),
            new THREE.Vector3(10, 30, 35),
            new THREE.Vector3(5, 32.5, 20),
            new THREE.Vector3(0, 32.5, -20),
            new THREE.Vector3(-5, 50, -30)
        ]);

        const geometry = new THREE.TubeGeometry(curve, 40, 1.5, 16, false);
        geometry.computeBoundingBox();
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0x1e88e5),
            side: THREE.DoubleSide,
            // uniforms: {
            //     color1: {
            //         value: new THREE.Color(0x000000)
            //     },
            //     color2: {
            //         value: new THREE.Color(0x1e88e5)
            //     },
            //     bboxMin: {
            //         value: geometry.boundingBox.min
            //     },
            //     bboxMax: {
            //         value: geometry.boundingBox.max
            //     }
            // },
            // vertexShader: `
            //     uniform vec3 bboxMin;
            //     uniform vec3 bboxMax;
              
            //     varying vec2 vUv;
            
            //     void main() {
            //       vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
            //       gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
            //     }
            //   `,
            // fragmentShader: `
            //     uniform vec3 color1;
            //     uniform vec3 color2;
              
            //     varying vec2 vUv;
                
            //     void main() {
                  
            //       gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
            //     }
            //   `,
        });

        // Create the final object to add to the scene
        const splineObject = new THREE.Mesh(geometry, material);
        this.scene.add(splineObject)

        // const block1 = this.createBlock(15)
        // block1.position.set(30, 0, 45)
        // this.scene.add(block1)

        // const block2 = this.createBlock(20)
        // block2.position.set(10, 0, 35)
        // this.scene.add(block2)

        // const block3 = this.createBlock(25)
        // block3.position.set(5, 0, 20)
        // this.scene.add(block3)

        // const block4 = this.createBlock(15)
        // block4.position.set(45, 0, 40)
        // this.scene.add(block4)

        // const block5 = this.createBlock(22.5)
        // block5.position.set(55, 0, 37.5)
        // this.scene.add(block5)

        // const map = this.createMap(7.5)
        // this.scene.add(map)
    }

    startAnimation() {
        const animate = () => {
            if (!this.stopAnimation) {
                window.requestAnimationFrame(animate);
            }
            // this.controls.update()
            this.composer.render(this.scene, this.camera)
        }
        animate()
    }
}