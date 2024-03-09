import HttpCommon from '../lib/HttpCommon';
import LibConfig  from '../lib/LibConfig';
import Crud from './Crud';
//
const CrudIndex = {
    /**
     * getList
     * @param
     *
     * @return
     */
    getList :async function (): Promise<any>
    {
        try{
            const postItem = {
                userId: 0,
            }
console.log(postItem); 
            const json = await HttpCommon.serverPost(postItem, "/test/get_list");
//console.log(json);      
            let items: any[] = [];
            items = json.data;
//console.log(items);
            return items;
        } catch (e) {
            console.error(e);
            throw new Error("Error, getList");
        } 
    },  
    /**
     *
     * @param
     *
     * @return
     */
    addItem : async function()
    {
        try{
            let ret = false;
            let titleValue = "";
            const title = document.querySelector("#title") as HTMLInputElement;
            if(title) {
                titleValue = title.value;
            }
            let urlValue = "";
            const url = document.querySelector("#url") as HTMLInputElement;
            if(url) {
                urlValue = url.value;
            }              
            const item = {
                title: titleValue,
                url: urlValue,
                bmCategoryId: 0,
                userId: 0,
            }
console.log("title=", titleValue);
console.log(item);
//return; 
/*
            const body = JSON.stringify(item);		
            const res = await fetch("/api/bookmark/create", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},      
                body: body
            });
            const json = await res.json() 
*/
            const json = await HttpCommon.serverPost(item, "/api/bookmark/create"); 
console.log(json);   
            if (json.ret !==  "OK") {
                console.error("Error, json.ret <> OK");
                return ret;
            }
            ret = true;
            return ret;
        } catch (e) {
            console.error("Error, addItem");
            console.error(e);
            throw new Error('Error , addItem');
        }
    }, 
   /**
   *
   * @param key: any
   *
   * @return
   */     
    displayAlert: function (idName: string) {
        //console.log("displayAlert=");
        const elm = document.querySelector(`#${idName}`);
        if(elm) {elm.classList.remove('d-none');}
        setTimeout(function(){
            if(elm) {elm.classList.add('d-none');}
        }, 4000)
    },
}

export default CrudIndex;
