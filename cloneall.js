var names = ["creationix-1.json", "creationix-2.json", "creationix-3.json", "luvit.json"];

names.forEach(function (name) {
  var data = JSON.parse(require('fs').readFileSync(name, "utf8"));
  data.forEach(function (repo) {
    if (repo.fork) return;
    console.log("git submodule add " + repo.ssh_url);
  });
});
