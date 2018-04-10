chrome.runtime.onInstalled.addListener(function() {
    console.log("Installing bookmarks");
    chrome.bookmarks.create({'parentId': chrome.bookmarks.id,
                               'title': 'Technical Blogs'},
                              function(newFolder) {
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Netflix',
                                'url': 'https://medium.com/netflix-techblog'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Uber',
                                'url': 'https://eng.uber.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Lyft',
                                'url': 'https://eng.lyft.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Google Developers',
                                'url': 'https://developers.googleblog.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Google Research',
                                'url': 'https://research.googleblog.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Youtube',
                                'url': 'https://youtube-eng.googleblog.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'AirBnB',
                                'url': 'https://medium.com/airbnb-engineering'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Spotify',
                                'url': 'https://labs.spotify.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Twitter',
                                'url': 'https://blog.twitter.com/engineering/en_us.html'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Amazon',
                                'url': 'https://developer.amazon.com/blogs'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Dropbox',
                                'url': 'https://blogs.dropbox.com/tech/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Facebook',
                                'url': 'https://code.facebook.com/posts/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'GitHub',
                                'url': 'https://githubengineering.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Instagram',
                                'url': 'https://instagram-engineering.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'LinkedIn',
                                'url': 'https://engineering.linkedin.com/blog'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Medium',
                                'url': 'https://medium.engineering/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Mozilla',
                                'url': 'https://blog.mozilla.org/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Paypal',
                                'url': 'https://www.paypal-engineering.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Pinterest',
                                'url': 'https://engineering.pinterest.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Reddit',
                                'url': 'https://redditblog.com/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Square',
                                'url': 'https://medium.com/square-corner-blog'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Twilio',
                                'url': 'https://www.twilio.com/engineering/'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Walmart',
                                'url': 'https://medium.com/walmartlabs'});
                                chrome.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Yelp',
                                'url': 'https://engineeringblog.yelp.com/'});
                                                        
        console.log("added folder: " + newFolder.title);
      });
  });


