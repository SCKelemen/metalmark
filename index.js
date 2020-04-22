"use strict";
var API = chrome || browser;

API.runtime.onInstalled.addListener(function() {
    console.log("Installing Speeds");
    API.bookmarks.create({'parentId': API.bookmarks.id,
                               'title': 'Playback Speed'},
                              function(newFolder) {
                                API.bookmarks.create({'parentId': newFolder.id,
                                'title': '1x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 1.0)'});
                                
                                API.bookmarks.create({'parentId': newFolder.id,
                                'title': '1.5x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 1.5)'});
       
                                API.bookmarks.create({'parentId': newFolder.id,
                                'title': '2x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 2.0)'});
        
                                API.bookmarks.create({'parentId': newFolder.id,
                                'title': '2.5x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 2.5)'});
                                
                                API.bookmarks.create({'parentId': newFolder.id,
                                'title': '3x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 3.0)'});
       
                                API.bookmarks.create({'parentId': newFolder.id,
                                'title': '3.5x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 3.5)'});
        
        
        console.log("added folder: " + newFolder.title);
      });
  });


