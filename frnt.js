'use strict';

var urls;
chrome.storage.sync.get({"urls":{}}, obj => {
   urls = obj.urls;
})


var domain = document.URL.replace(/https?:\/\/([^/]+)\/.+$/,'$1');
console.log("domain: ",domain);




function test(event){
    for(var key in urls){
        console.log("key: ",key);
        if(key.indexOf(domain)!=-1){
            var list_a = document.getElementsByTagName('a');
            console.log(list_a);
            for(var i of list_a){
//                i.removeEventListener("click",click_event,true);
                i.addEventListener("click",click_event,true);
                
            }
            domain = key;
            break;
        }
    }
}


function click_event(e){

        var n = e.target;
        console.log(n);
        while(!n.hasAttribute('href')){
          n = n.parentNode
        }
        console.log(domain,n.href,n);
        for(var v of urls[domain]){
            if(n.href.indexOf(v)!=-1){
                console.log("link disabled");
                chrome.runtime.sendMessage({url:n.href},r => {console.log(r);});
                e.preventDefault();
                e.stopPropagation();
            }
        }
}


document.addEventListener("DOMNodeInserted", test, false);
