<template>
  <div>
    <ul>
      <li v-on:click="changeImage('img/360/tulipes1.png')">Image 1</li>
      <li v-on:click="changeImage('img/360/tulipes2.png')">Image 2</li>
      <li v-on:click="changeImage('img/360/tulipes3.png')">Image 3</li>
      <li v-on:click="changeImage('img/360/tulipes4.png')">Image 4</li>
      <li v-on:click="changeImage('img/360/360_5.jpg')">Image 5</li>
    </ul>
    <div id="vrview"></div>
  </div>
</template>

<script>
import THREE from '~/plugins/three.js'

export default {
  name: 'VR',
  data () {
    return {
      pathimg: 'img/360/tulipes1.png'
    }
  },
  mounted() {
    this.createScene()
    this.onResize()
    this.addListeners()
  },
  methods: {
    addListeners() {
      window.addEventListener('resize', this.onResize, false)
      window.addEventListener('mousedown', this.onPointerStart, false)
      window.addEventListener('mousemove', this.onPointerMove, false)
      window.addEventListener('mouseup', this.onPointerUp, false)
      window.addEventListener('wheel', this.onDocumentMouseWheel, false)
      window.addEventListener('touchstart', this.onPointerStart, false)
      window.addEventListener('touchmove', this.onPointerMove, false)
      window.addEventListener('touchend', this.onPointerUp, false)

      document.addEventListener(
        'dragover',
        function(event) {
          event.preventDefault()
          event.dataTransfer.dropEffect = 'copy'
        },
        false
      )
      document.addEventListener(
        'dragenter',
        function() {
          document.body.style.opacity = 0.5
        },
        false
      )
      document.addEventListener(
        'dragleave',
        function() {
          document.body.style.opacity = 1
        },
        false
      )
      document.addEventListener(
        'drop',
        function(event) {
          event.preventDefault()
          this.reader = new FileReader()
          this.reader.addEventListener(
            'load',
            function(event) {
              this.material.map.image.src = event.target.result
              this.material.map.needsUpdate = true
            },
            false
          )
          this.reader.readAsDataURL(event.dataTransfer.files[0])
          document.body.style.opacity = 1
        },
        false
      )
    },

    removeListeners() {
      window.removeEventListener('resize', this.onResize)
    },

    createScene() {
      this.isUserInteracting = false
      this.onMouseDownMouseX = 0
      this.onMouseDownMouseY = 0
      this.lon = 0
      this.onMouseDownLon = 0
      this.lat = 0
      this.onMouseDownLat = 0
      this.phi = 0
      this.theta = 0
      
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        1000
      )
      this.camera.target = new THREE.Vector3(0, 0, 0)

      this.scene = new THREE.Scene()

      this.geometry = new THREE.SphereBufferGeometry(500, 60, 40)
      // invert the geometry on the x-axis so that all of the faces point inward
      this.geometry.scale(-1, 1, 1)

      this.material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(this.pathimg)
      })

      this.mesh = new THREE.Mesh(this.geometry, this.material)

      this.scene.add(this.mesh)

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
      this.setRendererSize()
      this.$el.appendChild(this.renderer.domElement)

      this.animate()
    },

    setRendererSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.renderer.setSize(this.width, this.height)
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    },

    onPointerStart(event) {
      this.isUserInteracting = true
      this.clientX = event.clientX || event.touches[0].clientX
      this.clientY = event.clientY || event.touches[0].clientY
      this.onMouseDownMouseX = this.clientX
      this.onMouseDownMouseY = this.clientY
      this.onMouseDownLon = this.lon
      this.onMouseDownLat = this.lat
    },

    onPointerMove(event) {
      if (this.isUserInteracting === true) {
        this.clientX = event.clientX || event.touches[0].clientX
        this.clientY = event.clientY || event.touches[0].clientY
        this.lon =
          (this.onMouseDownMouseX - this.clientX) * 0.1 + this.onMouseDownLon
        this.lat =
          (this.clientY - this.onMouseDownMouseY) * 0.1 + this.onMouseDownLat
      }
    },
    onPointerUp() {
      this.isUserInteracting = false
    },

    onResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.setRendererSize()
    },

    animate() {
      requestAnimationFrame(this.animate)
      this.update()
    },

    update() {
      if (this.isUserInteracting === false) {
        this.lon += 0.1
      }

      this.lat = Math.max(-85, Math.min(85, this.lat))
      this.phi = THREE.Math.degToRad(90 - this.lat)
      this.theta = THREE.Math.degToRad(this.lon)
      this.camera.target.x = 500 * Math.sin(this.phi) * Math.cos(this.theta)
      this.camera.target.y = 500 * Math.cos(this.phi)
      this.camera.target.z = 500 * Math.sin(this.phi) * Math.sin(this.theta)
      this.camera.lookAt(this.camera.target)

      // this.camera.position.copy( this.camera.target ).negate();

      this.renderer.render(this.scene, this.camera)
    },

    changeImage(e) {
      this.pathimg = e
      this.material.map = new THREE.TextureLoader().load(this.pathimg)
    }
  },

  beforeDestroy() {
    this.removeListeners()
  }
}
</script>

<style scoped>
</style>
