<template>
    <div>
        <div class="horizontal-scroll-wrapper squares">
            <div>item 1</div>
            <div>item 2</div>
            <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
            <div>item 6</div>
            <div>item 7</div>
            <div>item 8</div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.horizontal-scroll-wrapper::-webkit-scrollbar { 
    display: none; 
} 
.horizontal-scroll-wrapper {
  width: 200px;
  height: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
  transform: rotate(-90deg);
  transform-origin: right top;
  transform:rotate(-90deg) translateY(-200px);
}
.horizontal-scroll-wrapper > div {
    background: red;
    margin-bottom: 5px;
  width: 200px;
  height: 200px;
  transform: rotate(90deg);
  transform-origin: right top;
}
</style>
