<template> 
   

 
    <CFlex
      minH='100vh'
      align='center'
      justify='center'
      
      >
        <CStack
            maxW='lg'
          textAlign='center'
          :spacing= "{base: 8, md: 14 }"
          :py= "{base: 20, md: 36 }">
          <CHeading
            fontWeight=600
            :fontSize= "{base: 'xl', sm: '2xl', md: '4xl' }"
            lineHeight='110%'
            color='black'>
            
              Digital Collectibles from Local Artists
            
            
             <br />
           
            

          </CHeading>
          <CText color='gray.500'>
              
              
             Scan physical 'NFT Mint Codes' and claim them into your email account to collect.  Use 'Mint Codes' to redeem on-chain NFTs from your favorite artists.
          </CText>
          <CStack
            direction='column'
            spacing=3
            align='center'
            alignSelf='center'
            position='relative'>
          
             <CButton variant='link' class="text-neutral-800" colorScheme='blue' size='sm' @click="routeTo($router,{name:'redeem'})" >
              Redeem a Mint Code
            </CButton>
             <CButton variant='link' class="text-neutral-500" colorScheme='blue' size='sm' @click="routeTo($router,{name:'learn'})" >
              Learn More
            </CButton>
             
          </CStack>
        </CStack>
     
    </CFlex>
    </template>

<script>


import {
  CFlex,
  CBox,
  CFormControl,
  CFormLabel,
  CInput,
  CIcon,
  CCheckbox,
  CStack,
  CLink,
  CButton,
  CHeading,
  CHead,
  CText 
} from '@chakra-ui/vue';
 
    

import AppHelper, {routeTo} from '@/js/app-helper'
 
export default {
  name: "CtaAnnotated",
  props: [],
  components: { 
   CFlex,
  CBox,
  CFormControl,
  CFormLabel, 
  CInput,
  CIcon,
  CCheckbox,
  CStack,
  CLink,
  CButton,
  CHeading,
  CHead,
  CText 
  },
  methods: {

     routeTo,
  }
}

 </script>
    

