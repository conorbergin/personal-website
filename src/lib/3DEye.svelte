<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";

    let renderer, scene, camera;

    import PageHead from "$lib/components/PageHead.svelte";
    import Article from "$lib/components/Article.svelte";
    import ArticleTitle from "$lib/components/ArticleTitle.svelte";
    import ArticleMeta from "$lib/components/ArticleMeta.svelte";
    import ArticleDescription from "$lib/components/ArticleDescription.svelte";

    let canvasW = 100;
    let canvasH = 100;

    type Point = { x: number; y: number };

    let centre = { x: 0, y: 0 };
    let point = { x: 0, y: 0 };

    let px = 0;
    let py = 0;

    let canvas: HTMLCanvasElement;

    const getCentre = (canvas: HTMLCanvasElement) => {
        let r = canvas.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    };

    const normalize = ({ x, y }: Point) => {
        const magnitude = Math.sqrt(x * x + y * y);
        const normalized_x = x / magnitude;
        const normalized_y = y / magnitude;
        return { x: normalized_x, y: normalized_y };
    };

    const clamp = (n: number, min: number, max: number) =>
        Math.min(Math.max(min, n), max);

    const norm2 = ({ x, y }: Point) => {
        const depth = 100;
        const max = 0.6;
        return {
            x: Math.atan(x / depth),
            y: Math.atan(y / depth),
        };
    };

    const clampCircle = (p: Point, r: number) => {
        if (Math.sqrt(p.x * p.x + p.y * p.y) > r) {
            const n = normalize(p);
            return { x: n.x * r, y: n.y * r };
        } else {
            return p;
        }
    };

    onMount(() => {
        centre = getCentre(canvas);

        document.body.addEventListener("resize", () => {
            centre = getCentre(canvas);
        });
        document.body.addEventListener(
            "scroll",
            () => (centre = getCentre(canvas)),
        );

        document.addEventListener("pointermove", (e: PointerEvent) => {
            point = clampCircle(
                norm2({ x: e.clientX - centre.x, y: e.clientY - centre.y }),
                0.8,
            );
        });
        // Scene setup

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
        // camera = new THREE.OrthographicCamera(
        //     4 / -2, // Left
        //     4 / 2, // Right
        //     4 / 2, // Top
        //     4 / -2, // Bottom
        //     0.1,
        //     1000,
        // );
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(canvasW, canvasH);
        renderer.shadowMap.enabled = true;
        renderer.shadowMapType = THREE.PCFSoftShadowMap; // options are THREE.BasicShadowMap | THREE.PCFShadowMap | THREE.PCFSoftShadowMap
        renderer.setPixelRatio(2);
        // Create white sphere

        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(1, 64, 64),
            new THREE.MeshStandardMaterial({
                color: 0xbbbb77,
            }),
        );

        const lens = new THREE.Mesh(
            new THREE.SphereGeometry(0.6, 64, 64),
            new THREE.MeshStandardMaterial({
                transparent: true,
                opacity: 0.2,
                color: 0x777700,
            }),
        );
        
        // const sphereCSG = CSG.


        const iris = new THREE.Mesh(
            new THREE.CircleGeometry(0.3, 100),
            new THREE.MeshBasicMaterial({ color: 0x9999ff }),
        );
        const pupil = new THREE.Mesh(
            new THREE.CircleGeometry(0.2, 100),
            new THREE.MeshBasicMaterial({ color: 0x000000 }),
        );

        // sphere.add(iris);
        // sphere.add(pupil);
        // iris.position.set(0, 0, 0.99); // Position the dot on the surface of the sphere
        // pupil.position.set(0, 0, 1.01); // Position the dot on the surface of the sphere

        sphere.castShadow = true;
        sphere.receiveShadow = true;
        scene.add(sphere);

        const light = new THREE.DirectionalLight(0xffffff, 10);
        light.position.set(-0.1, 0.1, 1);
        light.castShadow = true; // Enable shadow casting				dirLight.shadow.camera.right = 2;
        light.shadow.camera.left = -2;
        light.shadow.camera.top = 2;
        light.shadow.camera.bottom = -2;
        light.shadow.radius = 10;
        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        scene.add(light);

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(),
            new THREE.ShadowMaterial({
                color: 0x222222,
                transparent: true,
                opacity: 0.1,
                side: THREE.DoubleSide,
            }),
        );
        plane.position.z = -3;
        // plane.rotation.x = -Math.PI / 2;
        plane.scale.setScalar(10);
        plane.receiveShadow = true;

        scene.add(plane);

        // Position camera
        camera.position.z = 4;

        // Render loop
        function animate() {
            requestAnimationFrame(animate);
            sphere.rotation.x = point.y;
            sphere.rotation.y = point.x;
            renderer.render(scene, camera);
        }

        animate();

        return () => {
            // Cleanup
            renderer.dispose();
        };
    });
</script>

<canvas width={canvasW} height={canvasW} bind:this={canvas} />
