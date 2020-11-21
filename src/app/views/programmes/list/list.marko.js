// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/programming_schedule$1.0.0/src/app/views/programmes/list/list.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js\"></script><script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\"></script></head><body>");

  component_globals_tag({}, out);

  out.w(" <div class=\"jumbotron\" style=\"background-color: rgb(0, 100, 151)\"><div class=\"container\"><div class=\"text-center\"><img src=\"https://bemaqui.rpc.com.br/static/media/logo-rpc.f93c7640.png\" alt=\"rpc\" width=\"290px\" height=\"206px\"> </div> </div> <div class=\"container\"><form action=\"/\" method=\"post\"><div class=\"form-row\"><div class=\"form-group col-md-11\"><input class=\"form-control\" type=\"date\" id=\"date\" name=\"date\"></div><div class=\"form-group col-md-0\"><button type=\"submit\" class=\"btn btn-primary\">Buscar</button></div></div></form></div> </div> <div class=\"container\"><div class=\"jumbotron\"><div class=\"table-responsive\"> <table class=\"table table-hover\">");

  var for__24 = 0;

  marko_forEach(data.programmes, function(programme) {
    var keyscope__25 = "[" + ((for__24++) + "]");

    out.w("<tr onclick=\"window.location='" +
      marko_escapeXmlAttr(programme.custom_info.URLPrograma) +
      "'\"><td><h3>" +
      marko_escapeXml(programme.human_start_time) +
      "</h3></td><td><div class=\"row\"><div class=\"col-xs-6 col-md-3\"><img src=\"" +
      marko_escapeXmlAttr(programme.custom_info.Graficos.ImagemURL) +
      "\" alt=\"rpc\" width=\"200px\" height=\"100px\"></div></div></td><td><div class=\"form-group\"><h3>" +
      marko_escapeXml(programme.title) +
      "</h3><p>" +
      marko_escapeXml(programme.description) +
      "</p></div> </td></tr>");
  });

  out.w("</table> </div> </div> </div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "37");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/programming_schedule$1.0.0/src/app/views/programmes/list/list.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
