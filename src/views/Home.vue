<template>
  <div>
    <div class="Kalle">
      This is Kalle page
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <div class="Ali">
      This is Ali page
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <div class="Minette">
      This is Minette page
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
