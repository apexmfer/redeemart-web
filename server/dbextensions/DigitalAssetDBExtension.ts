
import {Mongoose, Schema, Model} from 'mongoose'
 
import ExtensibleMongoDatabase , {TableDefinition,DatabaseExtension} from 'extensible-mongoose'
import {MongoRecord} from "./MongoDBExtension"
 
  export interface DigitalAssetProject extends MongoRecord{
    projectId:  string,
    
    title: string,
    description:string,

    artistName?:string, 

    artistAddress: string,
    
    contractAddress:  string, 
    totalSupply:number,
    metadataURI:string,

    


    createdAt:string,
    status: string //can be disabled temporarily 
  }

 
  export interface DigitalAsset extends MongoRecord{
    parentUserId: string,
    parentDigitalAssetProjectId: string|undefined,

    ownerPublicAddress:string,
 
    tokenId: string,


    createdAt:string, //for ordering 
    updatedAt:string,


    status: string //can be disabled temporarily 
  } 

    

  export const DigitalAssetProjectSchema = new Schema<DigitalAssetProject>({ 
    projectId:  { type: String, index: true, unique: true },
    title: { type: String, required:true},
   
    description: {type:String},
    artistName: {type:String},
    artistAddress: {type:String},

    contractAddress:  { type: String    },


    totalSupply: {type:Number},
    metadataURI: {type:String},

    createdAt: {type:String},

    status: String 
  })

 

  export const DigitalAssetSchema = new Schema<DigitalAsset>({    
    parentUserId: {type:String, index:true, required:true},

    parentDigitalAssetProjectId: { type: String, index:true   },  
    
    ownerPublicAddress:  { type: String    }, 
    
    tokenId:  { type: String    }, 
    
    createdAt: {type:String},
    updatedAt: {type:String},

    status: String 
  })
 
 

  export const DigitalAssetProjectDefinition:TableDefinition= {tableName:'digitalassetprojects',schema:DigitalAssetProjectSchema}
  export const DigitalAssetDefinition:TableDefinition= {tableName:'digitalassets',schema:DigitalAssetSchema}
 

export default class DigitalAssetDBExtension extends DatabaseExtension {
 

  
    getBindableModels() : Array<TableDefinition>{

        return  [
          DigitalAssetProjectDefinition,
          DigitalAssetDefinition 
        ]
    } 
    

}