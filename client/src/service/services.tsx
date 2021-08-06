import axios from "axios";
const URL = 'http://localhost:3001/productservice/'
export class ProductService {

    private static contactSvcObjRef: ProductService;

    public static Create(): ProductService {
        if (this.contactSvcObjRef === undefined || this.contactSvcObjRef === null) {
            console.log('service created')
            this.contactSvcObjRef = new ProductService()
        }
        return this.contactSvcObjRef
    }
    

    public getProduct(id:any){
        return axios.get(URL + id)
    }

    public getProducts(){
        return axios.get(URL)
    }

    public deleteData = (id:any) => {    
    return axios.delete(URL + id)
    }

    public postData = (data:any) => {    
        return axios.post(URL, data)
    }
    
    public putData = ( data:any) => {    
        return axios.put(URL , data)
    }
}
