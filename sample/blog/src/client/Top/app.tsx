//import { useState } from 'preact/hooks'
import { useEffect, useState } from 'preact/hooks';
import Head from '../../components/Head';
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
      const btn_search = document.querySelector('#btn_search');
      btn_search?.addEventListener('click', async () => {
          const post_list_wrap = document.querySelector(`.post_list_wrap`) as HTMLInputElement;
          if (!post_list_wrap.classList.contains('d-none')) {
              post_list_wrap?.classList.add('d-none');
          }
          const res = await CrudIndex.search();
          pageItems = res;
          setUpdatetime(new Date().toString());
        console.log(res);
      });
    })()
  }, []);
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
      const json = await HttpCommon.serverPost(item, "/test/get_list");
      pageItems = json.data;
      console.log(json.data);
      setUpdatetime(new Date().toString());
    } catch (e) {
      console.error(e);
    } 
  }
  //
  return (
    <div class="">
      {/*
      <h1 class="text-4xl font-bold">Search-result</h1>
      */}
      <hr />
      <div class="search_result_wrap container mx-auto my-2 px-2">
      {pageItems.map((item: any) => {
        return (
        <div key={item.id} class="rounded-md bg-white my-2  p-4">
          <div class="flex flex-row">
            <div class="flex-1 p-2 m-1">
              <a href={`/posts/${item.id}`} target="_blank"><h3 class="text-3xl font-bold"
              >{item.title}</h3></a>
              <p>ID: {item.id}, {item.createdAt}</p>
            </div>
            <div class="flex-1 p-2 m-1 text-end">
              <a href={`/posts/${item.id}`} target="_blank">
                <button  class="btn-outline-purple ms-2 my-2">Show</button>
              </a>
            </div>
          </div>
        </div>
        );
      })}
    </div>
    </div>
  )
}
/*
<a href="/">[ home ]</a>
<hr />
*/