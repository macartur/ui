<template>
  <div id="app" >
    <prop-doc :component="KytosButton"></prop-doc>
  </div>
</template>

<script>

import propDoc from 'propdoc'
import KytosButton from '../src/components/kytos/inputs/buttons/Button.vue';


export default {
  name: 'app',
  components: {
    propDoc
  },
  data() {
    return {
      KytosButton
    }
  }
}
</script>

<style lang="sass">

@import '../src/assets/styles/variables'
@import '../src/assets/styles/reset'

/* body */
body
  font-size: 1em
  font-family: sans-serif

li
  display: inline-block

a
  color: #fff

#app
  text-align: left

.container
  display: -webkit-flex
  display: flex
  width: auto
  overflow: hidden

::-webkit-scrollbar-track
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
  border-radius: 10px
  background-color: rgba(0,0,0,0.8)

::-webkit-scrollbar
  width: 12px;
  background-color: rgba(0,0,0,0.8)

::-webkit-scrollbar-thumb
  border-radius: 10px
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3)
  background-color: rgba(255,255,255,0.3)

#kytos-area
 display: -webkit-flex
 display: flex
 width: 100%
 height: 100vh
 overflow: hidden
 position: absolute
 top: 0
 left: 0

</style>

