function loadAndRenderTemplate(url) {
  /**
   * Retrieve the HTML from a
   * HTML given, from the given templateUrl
   * to be injected into `index.html`
   */
  var client = new XMLHttpRequest();
  client.open('GET', url);
  client.onreadystatechange = function() {
    renderTemplate(client.responseText);
  }
  client.send();
}

function renderTemplate(template) {
  /**
   * Inject template into `index.html`
   */
  // TODO: add actual templating engine?
  document.getElementById('templated-section').innerHTML = template;
}

function showPage(page) {
  /**
   * Determine whether or not
   * route contains `template`, `templateUrl`
   * If the page doesn't contain either, throw an error
   */
  // TODO: Implement exception handling
  if (page.template) {
    renderTemplate(page.template);
  } else if (page.templateUrl) {
    loadAndRenderTemplate(page.templateUrl);
    window[page.controller]();
  } else {
    alert(`No template found for the page ${page.url}`);
  }
}

function goToPage(pageName) {
  /**
   * Redirects application state
   * to a page, based on the page name.
   * If the page is not found, raise an
   * exception to the developer
   */

  // TODO: Implement exception handling
  let page = Router.getRoute(pageName);

  if (!page) {
    alert("Page not found");
    return false;
  }

  let newState = (history.state && history.state[0] instanceof Object) ? history.state : [];
  newState.push({page: page});
  history.pushState(newState, page.url, page.url);
  showPage(page);
  return false; // Needed to avoid default link behavior
}

window.onpopstate = function() {
  let newState = (history.state && history.state[0] instanceof Object) ? history.state : [];
  let previousPage = (newState.length) ? newState.pop().page : Router.getRoute('home');
  history.replaceState(newState, previousPage.url, previousPage.url)
  renderTemplate(previousPage.template);
};
