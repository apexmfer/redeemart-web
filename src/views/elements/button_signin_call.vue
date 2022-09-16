<template>
    
   <ButtonDefault
   @clicked="onClicked"
   class="cursor-pointer"
   :class="!isSignedIn() && 'bg-indigo-600'"
   >
      
    <slot v-if="isSignedIn()"></slot>
    <span v-if="!isSignedIn()"> Sign In </span>

    </ButtonDefault>
  
</template>


<script>
 import {isSignedIn} from '@/js/frontend-helper'
import {routeTo,redirectTo,getCurrentPageURL} from '@/js/app-helper'
 
 
import ButtonDefault from '@/views/elements/button_default.vue'



export default {
  name: "Button_SignIn_Call",
  props: ['customClass'],
  components: { ButtonDefault },
  data() {
    return {
        
    };
  },

  created() {
     
  },

  methods: {
    
      isSignedIn,
 


    onClicked(){
        if(this.isSignedIn()){
            this.$emit('clicked');
        }else{
            routeTo(this.$router,{name:'login',query:{ redirectBackTo: getCurrentPageURL()}})
        }
        
    }
 
    
  },
};
</script>
y