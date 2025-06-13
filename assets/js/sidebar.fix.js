// Auto-close sidebar when clicking menu links
document.addEventListener('DOMContentLoaded', function() {
    // Find all links in the sidebar menu
    var sidebarLinks = document.querySelectorAll('#sidebar nav a');
    
    // Add click listener to each link
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Close the sidebar by adding the inactive class
            var sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.add('inactive');
            }
        });
    });
});