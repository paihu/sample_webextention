'use strict';
var urls;
// urls = [
//    {'src':'str','dsts':['str','str','str','str'],
//    {'src':'str','dsts':['str','str','str','str']
//    ]


//chrome.storage.sync.get({urls:{}},obj=>{
//    urls = obj.urls;
//});

function save_options() {
  console.log(this);
  if('chrome' in window){
      console.log("extension");
      chrome.storage.sync.set({urls:this.urls},function(){
          document.getElementById("comment").textNode("save ok");
      });
  }
  else{
      console.log("not extension");
  }
}


function delete_src(e){
  console.log("delete src",e.src);
  for(var i = 0;i < this.urls.length; i++){
      if(this.urls[i].src == e.src){
          this.urls.splice(i,1);
      }
  }
}


document.addEventListener("DOMContentLoaded",e =>{
console.log(Vue);
var vm = new Vue({
	el: '#app',
	data: {
		urls: []
	},
	methods: {
	    add_src: () => {vm.urls.push({src:'',dsts:['']})},
	    delete_src: delete_src,
	    add_dest: e => {console.log(e.dsts);e.dsts.push('')},
	    delete_dest: (u,n) => {u.dsts.splice(n,1);console.log(u.dsts);},
	    save: save_options,
	}
});
console.log(vm);


});
