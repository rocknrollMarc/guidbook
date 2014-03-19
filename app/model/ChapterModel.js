
Guidebook.service('ChapterModel', function(){
  this.getChapters = function() {
    return [{
      id: 0,
      title: 'Chapter 1: So, What is AngulerJS?',
      summary: 'Find out what seoerates AngularJS from...'
    },{
      id: 2,
      title: 'Chapter 3: Quickstart',
      summar: 'Discover the strengths of AngularJS...'
    }, {
      id: 4,
      title: 'Chapter 5: The AngularJS Community',
      summary: 'Get to know the top contributors...'
    }  
    ]};
});
