
import {Mongoose, Schema, Model} from 'mongoose'
 
import ExtensibleMongoDatabase , {TableDefinition,DatabaseExtension} from 'extensible-mongoose'
import {MongoRecord} from "./MongoDBExtension"
 
  export interface MintCode extends MongoRecord{
    parentUserId:  string,

    code:string,

    networkName:string,

    projectId:string,
    nonce:string,
    signature:string,

    createdAt:string,

    status: string //starts out unclaimed 
  }

  
    

  export const MintCodeSchema = new Schema<MintCode>({ 
    
    parentUserId: {type:String, required:true},
   
    code: {type:String, required: true},

    networkName: {type:String, required: true},

    projectId: {type:String},
    nonce: {type:String},
    signature: {type:String},

    createdAt: {type:String},

    status: String 
  })

 
 
 

  export const MintCodeDefinition:TableDefinition= {tableName:'mintcodes',schema:MintCodeSchema}
 

export default class ThreadDBExtension extends DatabaseExtension {
 

  
    getBindableModels() : Array<TableDefinition>{

        return  [
          MintCodeDefinition
        ]
    } 
    

}