(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lista'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div>\r\n  Dobar dan "
    + alias4(((helper = (helper = lookupProperty(helpers,"ime") || (depth0 != null ? lookupProperty(depth0,"ime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ime","hash":{},"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":19}}}) : helper)))
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"prezime") || (depth0 != null ? lookupProperty(depth0,"prezime") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prezime","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":31}}}) : helper)))
    + "!\r\n</div>";
},"useData":true});
templates['slika'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img src="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"url") || (depth0 != null ? lookupProperty(depth0,"url") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"url","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":16}}}) : helper)))
    + " />";
},"useData":true});
})();