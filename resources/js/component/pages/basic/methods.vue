<template>
<div>
    <h1>Number of views : {{views}}</h1>
    <button @click="updateViews(1)">Increment </button>
    <button @click="updateViews(-1)" :disabled="isnegative" >Decrement </button>

    <br> <br>
    <div v-if="blogs.length">
        <div v-for="(blog, i) in blogs" :key="i" >
            <h1>{{blog.title}}</h1>
            <p>{{blog.post}}</p>
        </div>
    </div>

    <div>
        <h1 v-if="showItems" >i am true </h1>
        <h1 v-if="!showItems">i am false </h1>
    </div>
    <button @click="showItems = !showItems"> Toggle me </button>

</div>
  
</template>

<script>
export default {
    data(){
        return{
            views:0,
            isnegative:false,
            blogs :[],
            showItems :false
        }
    },
    methods:{
        updateViews(number){
            this.views +=number

            if(this.views < 0 ){
                this.isnegative = true
                this.views = 0

            }else{
            this.isnegative = false;
            }

        }
    },
    created(){
        // call the server to get the number of views
        this.views= 100
        // get the blog posts
        let posts = [
            {title:'first title',post:'first post', id: 1},
            {title:'second title',post:'second post', id: 2},
            {title:'third title',post:'third post', id: 3},

        ]

        this.blogs = posts
        
    }

}
</script>

<style>

</style>