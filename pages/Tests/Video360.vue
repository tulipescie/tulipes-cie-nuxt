<template>
  <div>
    <div id="vrview"></div>
    <iframe src="https://player.vimeo.com/video/232449909" width="640" height="274" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>
</template>

<script>
import THREE from '~/plugins/three.js'

export default {
  name: 'VR',
  mounted() {
    // this.createScene()
    // this.onResize()
    // this.addListeners()
  },
  methods: {
    addListeners() {
      window.addEventListener('resize', this.onResize)
      window.addEventListener('mousedown', this.onMousedown)
      window.addEventListener('mousemove', this.onMousemove)
      window.addEventListener('mouseup', this.onMouseup)
      window.addEventListener('wheel', this.onWheel)
    },

    removeListeners() {
      window.removeEventListener('resize', this.onResize)
    },

    createScene() {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.camera.target = new THREE.Vector3(0, 0, 0)

      this.geometry = new THREE.SphereBufferGeometry(500, 60, 40)
      // invert the geometry on the x-axis so that all of the faces point inward
      this.geometry.scale(-1, 1, 1)

      this.video = document.createElement('video')
      this.video.crossOrigin = 'anonymous'
      this.video.width = 1920
      this.video.height = 1080
      this.video.loop = true
      this.video.muted = true
      this.video.src = 'video/video.mp4'
      this.video.setAttribute('webkit-playsinline', 'webkit-playsinline')
      this.video.play()

      this.texture = new THREE.VideoTexture( this.video );
      this.material = new THREE.MeshBasicMaterial( { map: this.texture } );

      this.mesh = new THREE.Mesh( this.geometry, this.material );

      this.scene.add(this.mesh)

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
      this.setRendererSize()
      this.$el.appendChild(this.renderer.domElement)

      this.animate()
    },

    animate() {
      requestAnimationFrame(this.animate)
      this.renderer.render(this.scene, this.camera)
    },

    setRendererSize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.renderer.setSize(this.width, this.height)
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    },

    onResize() {
      this.setRendererSize()
    }
  },

  beforeDestroy() {
    this.removeListeners()
  }
}
</script>

<style scoped>
</style>
