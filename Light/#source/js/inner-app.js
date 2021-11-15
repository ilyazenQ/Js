const innerPage = document.getElementById('inner-page');
window.onload = function () {
   tunnel ();
   window.setTimeout(function () {
     innerPage.classList.remove('hidden');
   }, 2000);
 }


function tunnel () { 
   var renderer	= new THREE.WebGLRenderer({
      antialias	: true,
      alpha: true
    });
    renderer.setClearColor(new THREE.Color('#f51590'), 1)
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    // array of functions for the rendering loop
    var onRenderFcts= [];
    // init scene and camera
    var scene	= new THREE.Scene();
    var camera	= new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.01, 999);
    
    var clock = new THREE.Clock();
    
    //////////////////////////////////////////////////////////////////////////////////
    //		add an object in the scene
    //////////////////////////////////////////////////////////////////////////////////
    
    scene.fog = new THREE.FogExp2(0xff3399, 0.05);
    var light = new THREE.PointLight(0x0033ff, 1);
    scene.add(light);
    
    // Buildings 
    var nbTriangles = 60;
    var dmTriangles = 60;
    var tbTriangles = [];
    
    var material = new THREE.MeshPhongMaterial({
      color      :  new THREE.Color("rgb(0,15,35)"),
      emissive   :  new THREE.Color("rgb(0,30,20)"),
      specular   :  new THREE.Color("rgb(0,60,0)"),
      shininess  :  0,
      shading    :  THREE.SmoothShading,
      side       :  THREE.BackSide,
    });
    
    function Triangle (inx){
      this.b = new THREE.Mesh(new THREE.CylinderGeometry( 3.5, 3.5, 6.5, 3,1,0), material);
      this.b.position.x = Math.cos(inx*(Math.PI*2)/nbTriangles)*dmTriangles;
      this.b.position.z = Math.sin(inx*(Math.PI*2)/nbTriangles)*dmTriangles;
      this.b.lookAt(new THREE.Vector3(0,0,0));
      this.b.rotation.z = Math.PI/2;
    }
    
    for(var i=0; i<nbTriangles; i++){
      tbTriangles.push(new Triangle(i));
      scene.add(tbTriangles[i].b);
    }	
    
    //////////////////////////////////////////////////////////////////////////////////
    //		render the whole thing on the page
    //////////////////////////////////////////////////////////////////////////////////
    var step = clock.getDelta();
    // handle window resize
    window.addEventListener('resize', function(){
      renderer.setSize( window.innerWidth, window.innerHeight )
      camera.aspect	= window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()		
      }, false)
      // render the scene
      onRenderFcts.push(function(){
      renderer.render( scene, camera );	
      camera.position.x = Math.cos(step)*dmTriangles;
      camera.position.z = Math.sin(step)*dmTriangles;		
      camera.lookAt(new THREE.Vector3(Math.cos(step+0.001)*dmTriangles,0,Math.sin(step+0.001)*dmTriangles));
      camera.rotation.z = Math.PI/2;
      step += 0.0025;	
    })
    
    // run the rendering loop
    var lastTimeMsec= null
      requestAnimationFrame(function animate(nowMsec){
        // keep looping
        requestAnimationFrame( animate );
        // measure time
        lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
        var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
        lastTimeMsec	= nowMsec
        // call each update function
        onRenderFcts.forEach(function(onRenderFct){
        onRenderFct(deltaMsec/1000, nowMsec/1000)
      })
    })
   }


(function () {
   

   const wrapper = document.getElementById('inner-page');
   const rotateImg = document.getElementById('rotate-img');
  
   function arcctg(x,y,width) { 
      if(x < 800 && y < 900) {
      return Math.PI / 2 - Math.atan(y/x);
      }
      if (x > 800 && y < 900) {
         return 2 * (3 * Math.PI / 2  - Math.atan(x/y)) + Math.PI/1.6;
      }
     // if (x < 0 && y < 0) {
     //    return Math.PI  + Math.atan(y/x);
     // }
    }
   function onMouseMove(event) {
       let mouseX = event.pageX ;
       let mouseY = event.pageY ;
       let width = document.documentElement.clientWidth;
       console.log(mouseX,mouseY)
       let crd = wrapper.getBoundingClientRect();
       let activePointer = 
       crd.left <= mouseX && mouseX <= crd.right 
       && crd.top <= mouseY 
       && mouseY <= crd.bottom;

       requestAnimationFrame(function movePointer() {
           if (activePointer) {
           rotateImg.style.transform = 'rotate('+57.2958 * 
           arcctg(mouseX,mouseY,width)
           +'deg)';
           } 
       });
   }



   wrapper.addEventListener('mousemove', onMouseMove, false);

})();