<template>
  <div>
      <h1 ref="myref">Hooks lesson</h1>
      <h2>Myself , {{name}} from {{address}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:'Tilak',
            address:'Butwal',
        }
    },

    beforeCreate(){
        console.log("this is before created",this.name)
    },

    created(){
        //call mostly intial data from it.
            console.log("This is created ......data and other functions are availabLe but not html,",this.name);
        },
        
    mounted(){
        console.log("this is mounted :", this.$refs.myref)
    }
}
</script>

<style>

</style>