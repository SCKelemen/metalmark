browser.runtime.onInstalled.addListener(function() {
    console.log("Installing Speeds");
    browser.bookmarks.create({'parentId': browser.bookmarks.id,
                               'title': 'Playback Speed'},
                              function(newFolder) {
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': '1x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 1.0)'});
                                
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': '1.5x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 1.5)'});
       
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': '2x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 2.0)'});
        
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': '2.5x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 2.5)'});
                                
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': '3x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 3.0)'});
       
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': '3.5x',
                                'url': 'javascript:Array.from(document.getElementsByTagName(‘video’)).map(video => video.playbackRate = 3.5)'});
        
        
        console.log("added folder: " + newFolder.title);
      });
  });


