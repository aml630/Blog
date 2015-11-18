

document.write("<ul class='share-buttons'> ")
document.write(" <li><a href='https://www.facebook.com/sharer/sharer.php?u=&t='  title='Share on Facebook' target='_blank' onclick='window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;'><img src='https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Facebook.png' height = '70px'></a></li> ")
document.write("  <li><a href='https://twitter.com/intent/tweet?source=&text=:%20' target='_blank' title='Tweet' onclick='window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;'><img src='https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Twitter.png' height = '70px'></a></li>  ")
  document.write(" <li><a href='http://www.reddit.com/submit?url=&title=' target='_blank' title='Submit to Reddit' onclick='window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;'><img src='https://cdn2.iconfinder.com/data/icons/social-aquiocons/128/Aquicon-Reddit.png' height = '70px'></a></li> ")
document.write(" </ul> ")
