import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import gsap from 'gsap';

export default function KaabaViewer() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  // React State for Loader and Info Drawer
  const [isLoading, setIsLoading] = useState(true);
  const [percentLoaded, setPercentLoaded] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [infoTitle, setInfoTitle] = useState('');
  const [infoDesc, setInfoDesc] = useState('');

  // Refs to hold ThreeJS instances
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const modelRef = useRef(null);

  // Animation constants
  const defaultTarget = useRef(new THREE.Vector3(0, 0, 0));
  const defaultCamPos = useRef(new THREE.Vector3());
  const hotspotsData = useRef({});

  // Hotspot details
  const hotspotMetadata = {
    stone: {
      title: "Hajar al-Aswad (The Black Stone)",
      desc: "The Hajar al-Aswad is located on the Kaaba's eastern corner. It is the location where Muslims start their circumambulation of the Kaaba, known as the tawaf."
    },
    hateem: {
      title: "Hijir Ismail (Hateem)",
      desc: "Hijr-Ismail, also known as Hateem, is a low semi-circular wall originally part of the Kaaba. Composed of white marble, it stands 90 cm high opposite the northwest wall."
    },
    maqam: {
      title: "Maqam Ibrahim (Station of Ibrahim)",
      desc: "The Station of Ibrahim is a glass and metal enclosure containing an imprint of the Prophet Ibrahim's feet. He stood on this stone during the construction of the Kaaba."
    },
    gutter: {
      title: "Meezab al-Rahmah (Golden Gutter)",
      desc: "The Meezab al-Rahmah is the golden rain spout on the top of the Kaaba's northwest wall, added during the reconstruction in 1627."
    }
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.01,
      10000
    );
    cameraRef.current = camera;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfff5e0, 2.5);
    mainLight.position.set(10, 20, 15);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xc9a96e, 1.0);
    fillLight.position.set(-10, 10, -8);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x8899cc, 0.6);
    rimLight.position.set(0, 8, -20);
    scene.add(rimLight);

    const hemiLight = new THREE.HemisphereLight(0xffeebb, 0x222222, 0.5);
    scene.add(hemiLight);

    // 5. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;
    controls.rotateSpeed = 0.4;
    controls.zoomSpeed = 0.6;
    controls.minPolarAngle = Math.PI / 8;
    controls.maxPolarAngle = Math.PI / 1.8;
    controlsRef.current = controls;

    // 6. Model Loader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    dracoLoader.preload();

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(
      '/kaaba_in_mecca.glb',
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        // Hide helpers, lines
        model.traverse((child) => {
          if (child.isLine || (child.type && child.type.indexOf('Line') !== -1)) {
            child.visible = false;
          } else if (child.name) {
            const nameLower = child.name.toLowerCase();
            if (nameLower.indexOf('line') !== -1 || 
                nameLower.indexOf('path') !== -1 || 
                nameLower.indexOf('helper') !== -1 || 
                nameLower.indexOf('axis') !== -1) {
              child.visible = false;
            }
          }
          // Hide predominantly green path helpers
          if (child.isMesh && child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach((mat) => {
              if (mat.color && mat.color.g > 0.4 && mat.color.g > mat.color.r * 1.5 && mat.color.g > mat.color.b * 1.5) {
                child.visible = false;
              }
            });
          }
        });

        // Center Model
        const boundingBox = new THREE.Box3();
        let kabaMeshFound = false;

        model.traverse((child) => {
          if (child.isMesh && child.name && child.name.toLowerCase().indexOf('kaba') !== -1) {
            boundingBox.expandByObject(child);
            kabaMeshFound = true;
          }
        });

        if (kabaMeshFound) {
          const refCenter = boundingBox.getCenter(new THREE.Vector3());
          model.traverse((child) => {
            if (child.isMesh && child.visible) {
              const childBox = new THREE.Box3().setFromObject(child);
              const childCenter = childBox.getCenter(new THREE.Vector3());
              const childSize = childBox.getSize(new THREE.Vector3());
              const maxDim = Math.max(childSize.x, childSize.y, childSize.z);

              if (childCenter.distanceTo(refCenter) < 35 && maxDim < 35) {
                boundingBox.union(childBox);
              }
            }
          });
        } else {
          model.traverse((child) => {
            if (child.isMesh && child.visible) {
              const childBox = new THREE.Box3().setFromObject(child);
              const childSize = childBox.getSize(new THREE.Vector3());
              const maxDim = Math.max(childSize.x, childSize.y, childSize.z);
              if (maxDim > 0 && maxDim < 35) {
                boundingBox.union(childBox);
              }
            }
          });
        }

        if (boundingBox.isEmpty()) {
          boundingBox.setFromObject(model);
        }

        const center = boundingBox.getCenter(new THREE.Vector3());
        const sphere = boundingBox.getBoundingSphere(new THREE.Sphere());
        const radius = sphere.radius;

        model.position.sub(center);
        scene.add(model);

        // Adjust light
        mainLight.position.set(radius * 1.5, radius * 2.5, radius * 2.0);
        model.updateMatrixWorld(true);
        controls.target.set(0, 0, 0);

        // Position camera
        const fovRad = camera.fov * (Math.PI / 180);
        let cameraDistance = radius / Math.sin(fovRad / 2);
        cameraDistance *= 0.78;

        camera.position.set(
          cameraDistance * 0.55,
          cameraDistance * 0.08,
          cameraDistance * 0.75
        );

        controls.minDistance = cameraDistance * 0.2;
        controls.maxDistance = camera.position.distanceTo(controls.target);

        camera.near = 0.1;
        camera.far = 1000;
        camera.updateProjectionMatrix();
        controls.update();

        defaultCamPos.current.copy(camera.position);

        // Dynamic targets
        const stoneTarget = new THREE.Vector3(5.5, -4.5, 5.5);
        const hateemTarget = new THREE.Vector3(-12.0, -4.0, 0.0);
        const maqamTarget = new THREE.Vector3(14.0, -3.5, 6.0);
        const gutterTarget = new THREE.Vector3(0.0, 5.5, -5.5);

        model.traverse((child) => {
          if (child.isMesh && child.name) {
            const nameLower = child.name.toLowerCase();
            const childCenter = new THREE.Vector3();
            child.getWorldPosition(childCenter);

            if (isNaN(childCenter.x) || isNaN(childCenter.y) || isNaN(childCenter.z)) return;

            if (nameLower.indexOf('aswad') !== -1 || nameLower.indexOf('hajjar') !== -1) {
              stoneTarget.copy(childCenter);
            } else if (nameLower.indexOf('circle') !== -1) {
              hateemTarget.copy(childCenter);
            } else if (nameLower.indexOf('soi') !== -1 || nameLower.indexOf('ibrahim') !== -1) {
              maqamTarget.copy(childCenter);
            } else if (nameLower.indexOf('gutter') !== -1) {
              gutterTarget.copy(childCenter);
            }
          }
        });

        const getCameraPosForTarget = (target, dist, height) => {
          let dir = new THREE.Vector3(target.x, 0, target.z).normalize();
          if (dir.length() === 0) dir.set(0, 0, 1);
          return new THREE.Vector3(
            target.x + dir.x * dist,
            target.y + height,
            target.z + dir.z * dist
          );
        };

        // Populate dynamic hotspots
        hotspotsData.current = {
          stone: {
            title: hotspotMetadata.stone.title,
            desc: hotspotMetadata.stone.desc,
            target: stoneTarget,
            cameraPos: getCameraPosForTarget(stoneTarget, 7.0, 2.5)
          },
          hateem: {
            title: hotspotMetadata.hateem.title,
            desc: hotspotMetadata.hateem.desc,
            target: hateemTarget,
            cameraPos: getCameraPosForTarget(hateemTarget, 10.0, 6.0)
          },
          maqam: {
            title: hotspotMetadata.maqam.title,
            desc: hotspotMetadata.maqam.desc,
            target: maqamTarget,
            cameraPos: new THREE.Vector3(maqamTarget.x + 4.5, maqamTarget.y + 3.5, maqamTarget.z + 5.5)
          },
          gutter: {
            title: hotspotMetadata.gutter.title,
            desc: hotspotMetadata.gutter.desc,
            target: gutterTarget,
            cameraPos: getCameraPosForTarget(gutterTarget, 6.0, 4.0)
          }
        };

        setIsLoading(false);
      },
      (xhr) => {
        if (xhr.total > 0) {
          setPercentLoaded(Math.round((xhr.loaded / xhr.total) * 100));
        }
      },
      (err) => {
        console.error('Error loading model:', err);
        setIsLoading(false);
      }
    );

    // 7. Raycasting & Click Handlers
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let dragStart = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      dragStart = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = (e) => {
      const moveX = Math.abs(e.clientX - dragStart.x);
      const moveY = Math.abs(e.clientY - dragStart.y);
      if (moveX > 6 || moveY > 6) return; // Drag occurred

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (modelRef.current) {
        const intersects = raycaster.intersectObjects(modelRef.current.children, true);
        if (intersects.length > 0) {
          let clickedName = "";
          let current = intersects[0].object;
          while (current) {
            if (current.name) {
              clickedName = current.name.toLowerCase();
              break;
            }
            current = current.parent;
          }

          if (clickedName) {
            if (clickedName.indexOf('aswad') !== -1 || clickedName.indexOf('hajjar') !== -1) {
              triggerHotspot('stone');
            } else if (clickedName.indexOf('circle') !== -1) {
              triggerHotspot('hateem');
            } else if (clickedName.indexOf('soi') !== -1 || clickedName.indexOf('ibrahim') !== -1) {
              triggerHotspot('maqam');
            } else if (clickedName.indexOf('gutter') !== -1) {
              triggerHotspot('gutter');
            }
          }
        }
      }
    };

    const handlePointerMove = (e) => {
      if (e.buttons !== 0) return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (modelRef.current) {
        const intersects = raycaster.intersectObjects(modelRef.current.children, true);
        let isHovering = false;
        if (intersects.length > 0) {
          const name = intersects[0].object.name ? intersects[0].object.name.toLowerCase() : "";
          if (name.indexOf('aswad') !== -1 || name.indexOf('hajjar') !== -1 ||
              name.indexOf('circle') !== -1 ||
              name.indexOf('soi') !== -1 || name.indexOf('ibrahim') !== -1 ||
              name.indexOf('gutter') !== -1) {
            isHovering = true;
          }
        }
        canvasRef.current.style.cursor = isHovering ? 'pointer' : 'grab';
      }
    };

    const canvasDom = canvasRef.current;
    canvasDom.addEventListener('pointerdown', handlePointerDown);
    canvasDom.addEventListener('pointerup', handlePointerUp);
    canvasDom.addEventListener('pointermove', handlePointerMove);

    // 8. Animation Loop
    let animationFrameId;
    let isVisible = true;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.01 });

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (isVisible) {
        if (controls.enabled) {
          controls.update();
        }
        renderer.render(scene, camera);
      }
    };
    animate();

    // 9. Resize handler
    const handleResize = () => {
      if (!canvasRef.current) return;
      const w = canvasRef.current.clientWidth;
      const h = canvasRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvasDom.removeEventListener('pointerdown', handlePointerDown);
      canvasDom.removeEventListener('pointerup', handlePointerUp);
      canvasDom.removeEventListener('pointermove', handlePointerMove);
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  // GSAP Camera Animator
  const animateCamera = (targetPos, cameraPos) => {
    const controls = controlsRef.current;
    const camera = cameraRef.current;
    if (!controls || !camera) return;

    controls.enabled = false;
    gsap.killTweensOf(controls.target);
    gsap.killTweensOf(camera.position);

    const tl = gsap.timeline({
      onUpdate: () => {
        controls.update();
      },
      onComplete: () => {
        controls.enabled = true;
        controls.update();
      }
    });

    tl.to(controls.target, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0)
    .to(camera.position, {
      x: cameraPos.x,
      y: cameraPos.y,
      z: cameraPos.z,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0);
  };

  const triggerHotspot = (id) => {
    const data = hotspotsData.current[id];
    if (!data) return;

    if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
    }

    setActiveHotspot(id);
    setInfoTitle(data.title);
    setInfoDesc(data.desc);
    animateCamera(data.target, data.cameraPos);
  };

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true;
    }
    setActiveHotspot(null);
    animateCamera(defaultTarget.current, defaultCamPos.current);
  };

  return (
    <div className="hero-model">
      <div id="model-container" className="relative w-full h-full" ref={containerRef}>
        {/* Placeholder displays on load */}
        {isLoading && (
          <img 
            id="hero-placeholder" 
            src="/hero-placeholder.png" 
            alt="Kaaba 3D Preview" 
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700" 
          />
        )}
        
        <canvas 
          ref={canvasRef} 
          id="kaaba-canvas" 
          className="w-full h-full transition-opacity duration-1000"
          style={{ opacity: isLoading ? 0 : 1 }}
        ></canvas>

        {/* Loading Spinner */}
        {isLoading && (
          <div id="model-loader" className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-luxury-bg/80">
            <div className="model-loader-spinner mb-4"></div>
            <span className="text-luxury-textSecondary font-semibold">
              Loading 3D Model... {percentLoaded}%
            </span>
          </div>
        )}
      </div>

      {/* 3D Hotspot Interactivity Overlay */}
      <div className="model-nav" id="modelNav">
        <div className="model-nav-buttons">
          <button 
            className={`model-nav-btn ${activeHotspot === 'hateem' ? 'active' : ''}`} 
            onClick={() => triggerHotspot('hateem')}
          >
            <span className="btn-num">1</span>
            <span className="btn-txt">Hijir Ismail</span>
          </button>
          <button 
            className={`model-nav-btn ${activeHotspot === 'maqam' ? 'active' : ''}`} 
            onClick={() => triggerHotspot('maqam')}
          >
            <span className="btn-num">2</span>
            <span className="btn-txt">Maqam Ibrahim</span>
          </button>
          <button 
            className={`model-nav-btn ${activeHotspot === 'stone' ? 'active' : ''}`} 
            onClick={() => triggerHotspot('stone')}
          >
            <span className="btn-num">3</span>
            <span className="btn-txt">Black Stone</span>
          </button>
          <button 
            className={`model-nav-btn ${activeHotspot === 'gutter' ? 'active' : ''}`} 
            onClick={() => triggerHotspot('gutter')}
          >
            <span className="btn-num">4</span>
            <span className="btn-txt">Meezab</span>
          </button>
        </div>

        {/* Expandable Info Drawer */}
        <div className={`info-drawer ${activeHotspot ? 'open' : ''}`} id="infoCard">
          <div className="info-drawer-content">
            <div className="info-drawer-text">
              <h4>{infoTitle}</h4>
              <p>{infoDesc}</p>
            </div>
            <div className="info-drawer-actions">
              <button className="info-drawer-close" onClick={resetCamera} title="Close">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <button className="info-drawer-reset" onClick={resetCamera} title="Reset Camera">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="model-hint">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <circle cx="12" cy="17" r="0.5" />
        </svg>
        <span>Drag to rotate the model</span>
      </div>
    </div>
  );
}
