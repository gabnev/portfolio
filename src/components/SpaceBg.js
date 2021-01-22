import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import starImg from "../images/star.png";

const SpaceBg = () => {

  const ref = useRef();

  useEffect(() => {


    let scene = new THREE.Scene();

    let camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.z = 1;
    camera.rotation.x = Math.PI / 2;

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    // document.body.appendChild(renderer.domElement);
    ref.current.appendChild(renderer.domElement);

    let starGeometry = new THREE.Geometry();

    for (let i = 0; i < 6000; i++) {
      let star = new THREE.Vector3(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
      star.velocity = 0;
      star.acceleration = 0.009;
      starGeometry.vertices.push(star);
    }

    let spaceDust = new THREE.TextureLoader().load(starImg);
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.5,
      map: spaceDust
    });

    let stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);


    const animate = () => {
      starGeometry.vertices.forEach((star) => {

        star.velocity += star.acceleration;
        star.y -= star.velocity;

        if (star.y < -200) {
          star.y = 200;
          star.velocity = 0;
        }
      });

      starGeometry.verticesNeedUpdate = true;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    animate();

  }, [])

  return <div ref={ref} />
}

export default SpaceBg;