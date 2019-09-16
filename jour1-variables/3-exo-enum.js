var config;
(function (config) {
    config["root"] = ".";
    config["domaine"] = "http://localhost";
    config[config["port"] = 3000] = "port";
    config["route"] = "POST,DELETE,GET,PUT";
})(config || (config = {}));
;
console.log(config.route);
