function doGet(e) {
  let html = HtmlService.createTemplateFromFile('index').evaluate();
  return html;
}