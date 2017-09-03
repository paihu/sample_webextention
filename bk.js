'use strict';


chrome.runtime.onMessage.addListener((req,s,res)=>{
console.log(s,req);
res({msg:"pong"});
});

//var url;
//chrome.tabs.onActiveChanged.addListener(function(id,info){
//  chrome.tabs.get(id,function(tab){
//    url = tab.url;
//    console.log("onActiveChanged:"+url);
//  });
//});
//
//chrome.tabs.onUpdated.addListener(function(id,info,tab){
//  if(tab.active){
//    if(tab.url.indexOf("wikipedia")==-1){
//      url = tab.url;
//    }
//  }
//});

//chrome.webRequest.onBeforeRequest.addListener(function(details){
//
//  if(details.type != "main_frame" && details.type != "sub_frame"){
//    return;
//  }
//  if(details.url.indexOf("wikipedia") != -1){
//    if(url.indexOf("google") != -1){
//      return {cancel: true};
//    }
//  }
//  return
//
//  },
//  {urls:["<all_urls>"]},
//  ["blocking"]
//);
