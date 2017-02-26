var Router = {
  /**
   * Router object where all of
   * routes for the application
   * are stored.
   */
  routes: [],
  add: function(routes) {
    /**
     * Add application routes to
     * the `routes` array
     */
    this.routes.push(routes);
  },
  getRoutes: function() {
    /**
     * Return the `routes` array
     */
    return this.routes;
  },
  getRoute: function(pageName) {
    /**
     * Get a route from the `routes` array
     * based on the name of the page
     */
    let newPage = this.routes[0][pageName];
    return newPage;
  }
}
