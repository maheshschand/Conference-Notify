import { Conference } from '../schemas/conferences'
import { ConferenceModel } from '../models/conference';
import { Controller } from '../interfaces/controller';




export class ConferenceController extends Controller {
    conferenceModel?:ConferenceModel = undefined;
    init(conferenceModel:ConferenceModel):void{
        this.conferenceModel = conferenceModel;
     }

    async getConferences(offset:Number , count:Number):Promise<Conference[]>{
        // TO-DO
        /*
            This route will return count number of Conferenes data , with a particular offset
            The results should be sorted by nearest date greater than current date
        */
        return Promise.resolve([]);
    }
    async getConferencesFromCategory(category:String , offset:Number , count:Number):Promise<Conference[]>{
        //TO- DO
        /*
            This route will return count number of Conferenes data , with a particular offset
            The results should be sorted by nearest date greater than current date
            But also the result should be of a a particular conference.
        */
        return Promise.resolve([]);
    }
    async getCategories():Promise<Array<String>>{
        // To-DO
        /*
            get all the conference category
        */
        return Promise.resolve([]);
    };

    async getOne():Promise<Conference[]> {
        return new Promise<Conference[]>((resolve , reject) => {
            this.conferenceModel?.getOne().then( value => {
                if(value == null)
                    resolve([])
                else{
                    let conference:Conference = {   title: value.title ,
                                                    url: value.url , 
                                                    deadline: value.deadline } 
                    resolve([conference])
                }
            }).catch(err => {
                reject(err)
            })
        }) 
        
    }
}