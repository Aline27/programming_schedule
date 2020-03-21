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
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><link rel=\"stylesheet\" type=\"text/css\" href=\"/css/style.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"header\"><h1> Programação RPC </h1></div><table class=\"table_style\">");

  var for__8 = 0;

  marko_forEach(data.programmes, function(programme) {
    var keyscope__9 = "[" + ((for__8++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(programme.title) +
      "</td><td>" +
      marko_escapeXml(programme.human_start_time) +
      "</td></tr>");
  });

  out.w("</table> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "13");

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
