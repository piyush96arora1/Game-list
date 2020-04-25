import Axios from "axios";

class CommonService {

    getRequest = url => {
        return new Promise((resolve, reject) => {
          Axios.get(url)
            .then(res => {
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        });
      };
}

export default new CommonService();