const NavigationSidebar = (active = 'Home') => {
  const sections = [
    {label: '', href: '/', icon: 'fab fa-twitter'},
    {label: 'Home', href: '../HomeScreen/index.html', icon: 'fa fa-home'},
    {label: 'Explore', href: '../explore/index1.html', icon: 'fa fa-hashtag'},
    {label: 'Notifications', href: '#', icon: 'fa fa-bell'},
    {label: 'Messages', href: '#', icon: 'fa fa-envelope'},
    {label: 'Bookmarks', href: '#', icon: 'fa fa-bookmark'},
    {label: 'Lists', href: '.#', icon: 'fa fa-list'},
    {label: 'Profile', href: '#', icon: 'fa fa-user'},
    {label: 'More', href: '#', icon: 'fa fa-bars'},

  ]
  return(`
   <div class="list-group">
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     ${
        sections.map(section => 
          `<div class="list-group-item list-group-item-action row ${section.label === active ? 'active' : ''}" style="display: flex; align-items: center; justify-items: center; border: none;">
             <div class="col-2">
              <i class='${section.icon}'></i>
             </div>
             <div class="col-8">
              <a class="d-none d-xl-block ms-1" href=${section.href} style="text-decoration: none; color: white">${section.label}</a>
             </div>
          </div>`).join('')
      }
<!--      </div>-->
    </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;