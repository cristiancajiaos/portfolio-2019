angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about/about.html',
    "<!DOCTYPE html>\r" +
    "\n" +
    "<section class=\"about\">\r" +
    "\n" +
    "    <section class=\"me\">\r" +
    "\n" +
    "        <div class=\"row mb-3\">\r" +
    "\n" +
    "            <div class=\"col-md-6 col-sm-12\">\r" +
    "\n" +
    "                <h1>\r" +
    "\n" +
    "                    Nombre<br />\r" +
    "\n" +
    "                    <small>Desarrollador Web</small>\r" +
    "\n" +
    "                </h1>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"col-md-6 col-sm-12\">\r" +
    "\n" +
    "                <img src=\"https://via.placeholder.com/1000x500\" class=\"img-fluid\" />\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <section class=\"description\">\r" +
    "\n" +
    "        <p>Titulado de <strong>Ingeniería de Ejecución en Informática</strong> en la <strong>Universidad Técnica Federico Santa María</strong>.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Desarrollador web con más de 3 años de experiencia en el ámbito laboral, dentro de la cual se incluyen labores en:</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <ul>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <strong>Open Latinoamérica</strong>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <strong>Tecnova</strong>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <strong>Equifax</strong>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <strong>Digital Maker</strong>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "            <li>\r" +
    "\n" +
    "                <strong>Auranet</strong>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <p>Fuera del ambito profesional: Leo, juego en la Switch, veo series y películas, y camino harto.</p>\r" +
    "\n" +
    "    </section>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('views/home/home.html',
    "<!DOCTYPE html>\r" +
    "\n" +
    "<section class=\"home\">\r" +
    "\n" +
    "    <div ng-show=\"vm.loadingSlides\">\r" +
    "\n" +
    "        <i class=\"fas fa-spinner fa-spin fa-fw\"></i> Cargando carrusel...\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-show=\"!vm.loadingSlides\">\r" +
    "\n" +
    "        <div uib-carousel active=\"vm.active\" interval=\"vm.myInterval\" no-wrap=\"vm.noWrapSlides\" class=\"mb-1\">\r" +
    "\n" +
    "            <div uib-slide ng-repeat=\"slide in vm.slides track by $index\" index=\"$index\">\r" +
    "\n" +
    "                <img ng-src=\"{{slide.imageUrl}}\" class=\"img-fluid\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</section>"
  );


  $templateCache.put('views/portfolio/portfolio.html',
    "<!DOCTYPE html>\r" +
    "\n" +
    "<section class=\"portfolio\">\r" +
    "\n" +
    "    <div ng-show=\"vm.loadingPortfolio\">\r" +
    "\n" +
    "        <i class=\"fas fa-spinner fa-spin fa-fw\"></i> Cargando portafolio...\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-show=\"!vm.loadingPortfolio\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <form novalidate>\r" +
    "\n" +
    "            <div class=\"form-group row\">\r" +
    "\n" +
    "                <label for=\"name\" class=\"col-md-3 col-sm-12 col-form-label\">\r" +
    "\n" +
    "                    Filtrar por nombre\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                <div class=\"col-md-9 col-sm-12\">\r" +
    "\n" +
    "                    <input class=\"form-control\" id=\"name\" name=\"name\" ng-model=\"vm.nameSearch\"/>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"form-group row\">\r" +
    "\n" +
    "                <label for=\"order\" class=\"col-md-3 col-sm-12 col-form-label\">\r" +
    "\n" +
    "                    Ordenar por\r" +
    "\n" +
    "                </label>\r" +
    "\n" +
    "                <div class=\"col-md-9 col-sm-12\">\r" +
    "\n" +
    "                    <select class=\"form-control\" id=\"order\" name=\"order\"\r" +
    "\n" +
    "                        ng-options=\"orderOption.value as orderOption.name for orderOption in vm.orderOptions\"\r" +
    "\n" +
    "                        ng-model=\"vm.order\">\r" +
    "\n" +
    "                    </select>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <section class=\"portfolio-elements\">\r" +
    "\n" +
    "            <div class=\"portfolio-element\" ng-repeat=\"portfolioElement in vm.portfolio | filter:vm.nameSearch | orderBy:vm.order\"\r" +
    "\n" +
    "                ng-style=\"{'background-size':'contain',background:'url(' + portfolioElement.imageUrl + ')'}\">\r" +
    "\n" +
    "                <div class=\"footer\">\r" +
    "\n" +
    "                    <div class=\"description\">\r" +
    "\n" +
    "                        <h2>\r" +
    "\n" +
    "                            {{portfolioElement.title}}\r" +
    "\n" +
    "                            <small>\r" +
    "\n" +
    "                                ({{portfolioElement.dateYear}})\r" +
    "\n" +
    "                                <i ng-class=\"{'fab':true}\" ng-repeat=\"tool in portfolioElement.tools\"\r" +
    "\n" +
    "                                    class=\"{{tool.icon}} fa-fw\" title=\"Aquí se usó {{tool.name}}\"></i>\r" +
    "\n" +
    "                            </small>\r" +
    "\n" +
    "                        </h2>\r" +
    "\n" +
    "                        <p>{{portfolioElement.description}}</p>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"controls\">\r" +
    "\n" +
    "                        Controles\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </section>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</section>"
  );

}]);
