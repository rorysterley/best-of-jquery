var app = {};
app.sections = {};

app.util = {
  $mainClone: $('#main').clone(), 

  resetSection: function(section) {
    $(section + ' .display-result')
      .replaceWith(this.$mainClone.find(section + ' .display-result').clone());
  },
  
  // Convert section from html 'id' notation to camel case
  sectionParser: function(section) {
    return section.slice(1).replace(/\-./g, function(x) {
      return x.slice(1).toUpperCase();
    });
  },
  
  tryIt: function(section) {
    app.sections[this.sectionParser(section)](section);
  }
}

