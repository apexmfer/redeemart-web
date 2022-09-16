<template>
  <div>
   <PrimaryLayout> 

  <div class="section w-container flex flex-col py-16 " style="min-height:600px"> 

   
      <div class="text-lg" > Claim your Digital Collectible Code (DCC)</div>
    <div class="text-md text-gray-600" > This will add the NFT to your IndieFuture account. </div>


      <div class="pt-8"> 

 
        <input class="p-2 border-2 border-gray-500 my-2 rounded " v-model="secretMessage" placeholder="redemption code" /> 


        <ButtonSignInCall        
        class="p-2 bg-blue-400 hover:bg-gray-400 inline text-white mx-2 "
        @clicked="claim"
        > 
        Claim 
        </ButtonSignInCall>
       

      </div>  

  <div>
  
    <ErrorBanner  
      ref="errorBanner"
    
    
    />
  </div>

 

     </div> 


   </PrimaryLayout>
  </div>
</template>


<script>

import {ethers,Contract,utils} from 'ethers';
 

import AppHelper, {routeTo,redirectTo} from '@/js/app-helper'
import {getRouteTo} from '@/js/frontend-helper'
 
 import {resolveRoutedApiQuery} from '@/js/rest-api-helper'
import PrimaryLayout from './PrimaryLayout.vue';
  
import ButtonDefault from '@/views/elements/button_default.vue'
import ButtonSignInCall from '@/views/elements/button_signin_call.vue'
import ErrorBanner from '@/views/elements/ErrorBanner.vue'


 
export default {
  name: "Claim",
  props: [],
  components: {
     PrimaryLayout,
      ButtonDefault ,
      ButtonSignInCall,
      ErrorBanner
      },
  data() {
    return {
         secretMessage: undefined,
    };
  },

  async created() {


 
     
  },


  async mounted(){

    let routerCode = this.$route.params.code 

    if(routerCode){
      this.secretMessage = routerCode 
    }

  },

  methods: {
    routeTo,
    
    getRouteTo,


    async claim(){
      console.log('claim',this.secretMessage)

      //perform an API POST request to the server 

      let sessionToken = getSessionToken()

      let mintCode = this.secretMessage
      let params = {sessionToken,mintCode} 

      let claimURI = resolveURIFromRouteName( "claimMintCode" )
      let requestResponse = await resolveRestQueryAsserted(claimURI, params)



    },
 
    
  },
};
</script>
