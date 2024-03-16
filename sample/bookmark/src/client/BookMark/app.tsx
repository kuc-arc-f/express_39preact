import { useEffect, useState } from 'preact/hooks';
import Head from '../../components/Head';
import Footer from '../../components/Footer';
import HttpCommon from '../lib/HttpCommon';
import CrudIndex from './CrudIndex';
//
let pageItems: any[] = [];
const dataItems: any[] = [
  {id:1, title: "title_1"},
  {id:2, title: "title_2"},
  {id:3, title: "title_3"},
];
let items: any[] = [];
//
export function App() {
  const [count, setCount] = useState(0);  
  const [updatetime, setUpdatetime] = useState("");
  //
  useEffect(() => {
    (async() => {
//      console.log('Count updated:', count);
      getList();
    })()
  }, []);
  //
  const addItem = async function(){
    try{
      await CrudIndex.addItem(); 
      location.reload();
    } catch (e) {
      console.error(e);
    } 
  }
  /**
   *
   * @param
   *
   * @return
   */
  const getList = async function() {
    try{
console.log("#getList");
      const item  = {
        "userId": 0,
      }      
      const json = await HttpCommon.serverPost(item, "/api/bookmark/get_list");
      pageItems = json;
      console.log(json);
      setUpdatetime(new Date().toString());
    } catch (e) {
      console.error(e);
    } 
  }
  //
  return (
  <>
    <div class="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <div>
        <Head />
      </div>
      <h1 class="text-4xl font-bold">BookMark </h1>
      <hr class="my-2" />
      <label class="text-2xl block text-gray-700 font-bold mb-2">Title</label>
      <input type="text" id="title" 
      class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
      />
      <div class="mb-2">
        <label class="text-2xl block text-gray-700 font-bold mb-2">URL</label>
        <input type="text" id="url" 
        class="border border-gray-400 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        placeholder="ex: https://url-input-123456789.com"
        />
      </div>
      <div class="card">
        <button class="btn-purple my-1" onClick={() => addItem()}>Save
        </button>
      </div>
      <hr />
      {pageItems.map((item: any) => {
        return (
        <div key={item.id}>
          <a href={`${item.url}`} target="_blank">
            <h3 class="text-3xl font-bold">{item.title}</h3>
          </a>
          <span>id: {item.id}</span>
          <a href={`/bookmark/show?id=${item.id}`}>
            <button class="btn-outline-purple ms-2">Show</button>
          </a>
          <hr />
        </div>
        );
      })}
    </div>
    <Footer />
  </>

  )
}
/*
<a href="${element.url}" target="_blank"><h3 className="text-3xl font-bold"
>${element.title}</h3></a>
*/