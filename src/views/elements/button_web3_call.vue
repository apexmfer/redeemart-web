<template>
    
   <ButtonDefault
   @clicked="onClicked"
   class="cursor-pointer"
   :class="!web3IsActive() && 'bg-indigo-600'"
   >
      
    <slot v-if="web3IsActive()"></slot>
    <span v-if="!web3IsActive()"> Connect </span>

    </ButtonDefault>
  
</template>


<script>
 
 
import ButtonDefault from '@/views/elements/button_default.vue'

export default {
  name: "Button_Web3_Call",
  props: ['customClass'],
  components: { ButtonDefault },
  data() {
    return {
        
    };
  },

  created() {
     
  },

  methods: {



      web3IsActive(){    
        return this.$store.state.web3Storage.active
      },
      activeAccount(){          
        return this.$store.state.web3Storage.account
      } ,



    onClicked(){
        if(this.web3IsActive()){
            this.$emit('clicked');
        }else{
            this.$store.commit('setShowWeb3ConnectModal',true)
        }
        
    }
 
    
  },
};
</script>
y