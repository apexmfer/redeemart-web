
import {Mongoose, Schema, Model} from 'mongoose'
 
import ExtensibleMongoDatabase , {TableDefinition,DatabaseExtension} from 'extensible-mongoose'
import {MongoRecord} from "./MongoDBExtension"
 
  export interface MintCode extends MongoRecord{
    parentUserId:  string,
    
    
    code:string,


    createdAt:string,


    status: string //can be disabled temporarily 
  }

  
    

  export const MintCodeSchema = new Schema<MintCode>({ 
    
    parentUserId: {type:String, required:true},
   
    code: {type:String, required: true},

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