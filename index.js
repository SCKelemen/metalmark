browser.runtime.onInstalled.addListener(function() {
    console.log("Installing bookmarks");
    browser.bookmarks.create({'parentId': browser.bookmarks.id,
                               'title': 'Technical Blogs'},
                              function(newFolder) {
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Netflix',
                                'url': 'https://medium.com/netflix-techblog'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Uber',
                                'url': 'https://eng.uber.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Lyft',
                                'url': 'https://eng.lyft.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Google Developers',
                                'url': 'https://developers.googleblog.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Google Research',
                                'url': 'https://research.googleblog.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Youtube',
                                'url': 'https://youtube-eng.googleblog.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'AirBnB',
                                'url': 'https://medium.com/airbnb-engineering'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Spotify',
                                'url': 'https://labs.spotify.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Twitter',
                                'url': 'https://blog.twitter.com/engineering/en_us.html'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Amazon',
                                'url': 'https://developer.amazon.com/blogs'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Dropbox',
                                'url': 'https://blogs.dropbox.com/tech/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Facebook',
                                'url': 'https://code.facebook.com/posts/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'GitHub',
                                'url': 'https://githubengineering.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Instagram',
                                'url': 'https://instagram-engineering.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'LinkedIn',
                                'url': 'https://engineering.linkedin.com/blog'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Medium',
                                'url': 'https://medium.engineering/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Mozilla',
                                'url': 'https://blog.mozilla.org/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Paypal',
                                'url': 'https://www.paypal-engineering.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Pinterest',
                                'url': 'https://engineering.pinterest.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Reddit',
                                'url': 'https://redditblog.com/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Square',
                                'url': 'https://medium.com/square-corner-blog'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Twilio',
                                'url': 'https://www.twilio.com/engineering/'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Walmart',
                                'url': 'https://medium.com/walmartlabs'});
                                browser.bookmarks.create({'parentId': newFolder.id,
                                'title': 'Yelp',
                                'url': 'https://engineeringblog.yelp.com/'});
                                                        
        console.log("added folder: " + newFolder.title);
      });
  });


