//Using main window height and width
//for fullscreen effect
var width = window.innerWidth;
var height = window.innerHeight;

//Renderer animates mainly
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
//Setting width and height
renderer.setSize(width, height);
//adding canvas without HTML5
document.body.appendChild(renderer.domElement);
//New THREE.js SCENE
var scene = new THREE.Scene;

                var planeGroup = new THREE.Object3D();
                var bladeGroup = new THREE.Object3D();
                bladeGroup.add(planeGroup);
                scene.add(planeGroup);
                
                var planeMaterial = new THREE.MeshLambertMaterial({color: 0xf2ff0a});
                var planeMaterialBlack = new THREE.MeshLambertMaterial({color: 0x000000});
                var planeBody = new THREE.CylinderGeometry(0.8, 0.5, 3, 10);
                var planeTail = new THREE.CylinderGeometry(0.5, 0.1, 1.2, 10);
                var planeTailWing = new THREE.CubeGeometry(3, 0.2, 0.5);
                var planeFront = new THREE.CubeGeometry(1,1,1);
                var planeRotorMiddle = new THREE.SphereGeometry(0.5, 10, 1);
                var planeRotorBlade = new THREE.CubeGeometry(4,0.2,0.5);
                var planeRotorBlade2 = new THREE.CubeGeometry(4,0.2,0.5);
                var wing1 = new THREE.CubeGeometry(0.1,1.5,6);
                var wing2 = new THREE.CubeGeometry(0.1,1.5,6);
                var string = new THREE.CubeGeometry(0.2, 0.2, 1.6);
                var string1 = new THREE.CubeGeometry(0.2, 0.2, 1.6);
                var planeRotorBlade = new THREE.Mesh(planeRotorBlade, planeMaterialBlack);
                var planeRotorBlade2 = new THREE.Mesh(planeRotorBlade2, planeMaterialBlack);
                
                var string = new THREE.Mesh(string, planeMaterialBlack);
                var string1 = new THREE.Mesh(string1, planeMaterialBlack);
                var wing1 = new THREE.Mesh(wing1, planeMaterial);
                var wing2 = new THREE.Mesh(wing2, planeMaterial);
                var planeRotorMiddle = new THREE.Mesh(planeRotorMiddle, planeMaterial);
                var planeFront = new THREE.Mesh(planeFront, planeMaterial);
                var planeBody = new THREE.Mesh(planeBody, planeMaterial);
                var planeTail = new THREE.Mesh(planeTail, planeMaterial);
                var planeTailWing = new THREE.Mesh(planeTailWing, planeMaterial);

 planeFront.position.y = 1.5;
                planeRotorMiddle.position.y = 2;
                planeRotorBlade.position.y = 2.1;
                planeRotorBlade.rotation.y = 0.5 * Math.PI;
                planeRotorBlade2.position.y = 2.1;
                planeRotorBlade2.rotation.y = 15;
                wing1.rotation.y = 0.5 * Math.PI;
                wing2.rotation.y = 0.5 * Math.PI;
                wing2.position.z = -1.5;
                string.position.x = -2.2;
                string.position.z = -0.75;
                string1.position.x = 2.2;
                string1.position.z = -0.75;
                planeTail.position.y = -2.1;
                planeTailWing.position.y = -2;
                planeTailWing.rotation.x = 0.5 * Math.PI;
     

                planeGroup.position.x = -10;
                planeGroup.position.y = 20;
                planeGroup.position.z = 10;
                
                bladeGroup.add(planeRotorBlade);
                bladeGroup.add(planeRotorBlade2);
                
                planeGroup.add(wing1);
                planeGroup.add(wing2);
                planeGroup.add(bladeGroup);
                planeGroup.rotation.x = Math.PI / 2;
                planeGroup.add(planeBody);
                planeGroup.add(planeFront);
                planeGroup.add(planeRotorMiddle);
                planeGroup.add(string);
                planeGroup.add(string1);
                planeGroup.add(planeTail);
                planeGroup.add(planeTailWing);


scene.add(planeGroup);

var camera = new THREE.PerspectiveCamera(25, width / height, 0.5, 10000);

camera.position.y = 30;
camera.position.z = 24;
camera.position.x = 1;

scene.add(camera);

//Point the camera at the cube
camera.lookAt(planeGroup.position);

//camera (sky like the sun and //reflective greenhouse effect)
var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  side: THREE.BackSide
});
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

//Add the skybox (lights)
scene.add(skybox);

//Main light
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);

//Add the main light to the scene
scene.add(pointLight);

//CLOCK
var clock = new THREE.Clock;
//END CLOCK

/* MAIN ANIMATION FUNCTION FOR GOOD PRECISION. Using jQuery, You could make a lambada function */
function render() {
  renderer.render(scene, camera);

  requestAnimationFrame(render);
  bladeGroup.rotation.y += 0.3;
    planeGroup.rotation.z += 0.004; 
}

render();