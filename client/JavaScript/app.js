const routes = {
  home: { hash: '#home', function: renderHome },
  africa: { hash: '#africa', function: renderAfrica },
  america: { hash: '#america', function: renderAmerica },
  asia: { hash: '#asia', function: renderAsia },
  europe: { hash: '#europe', function: renderEurope },
  world: { hash: '#world', function: renderWorld },
  error: { function: renderNotFound },
}

const router = new Router(routes)
router.urlResolve()
