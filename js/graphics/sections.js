// Links to figure elements for each section
var sectionLinks = {
    'sketches': document.querySelectorAll('[data-section="sketches"]'),
    'schemes': document.querySelectorAll('[data-section="schemes"]'),
    'visualisations': document.querySelectorAll('[data-section="visualisations"]'),
    'computational-design': document.querySelectorAll('[data-section="computational-design"]'),
    'branding': document.querySelectorAll('[data-section="branding"]'),
    'social-media': document.querySelectorAll('[data-section="social-media"]'),
    'photography': document.querySelectorAll('[data-section="photography"]')
};

// After clicking on the navigation link
document.querySelectorAll('.codrops-demos a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Get the section ID from the link's href attribute
        var sectionId = link.getAttribute('href').substring(1);

        // Get links to figure elements for the selected section
        var sectionFigures = sectionLinks[sectionId];

        // Get the first figure element from the selected section
        var firstFigure = sectionFigures[0];

        // Get the distance from the top edge of the selected figure element
        var offset = firstFigure.offsetTop;

        // Scroll the page to the appropriate place (with space)
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});