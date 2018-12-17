<template>
<div>
</div>
</template>

<script>
export default {
  asyncData ({ redirect, params }) {
    return redirect(`/realisations/${params.uid}`)
  }
}
</script>