import CommonService from './CommonService'
import { SERVICE } from '../Util/appConstants'

export class GameService{

    
    static getGameList=async(number)=>{

        return CommonService.getRequest(SERVICE.GAME_SERVICE)
    }


}
export default GameService