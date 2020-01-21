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
    "        <p>Desarrollador web con más de 3 años de experiencia en el ámbito laboral, dentro de la cual se incluyen labores en <strong>Open Latinoamérica</strong>, <strong>Tecnova</strong>, <strong>Equifax</strong>, <strong>Digital Maker</strong> y <strong>Auranet</strong>.</p>\r" +
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
    "        <i class=\"fas fa-spinner fa-spin fa-fw\"></i> Cargando item a mostrar...\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div ng-show=\"!vm.loadingSlides\">\r" +
    "\n" +
    "        <h1>{{vm.returnedItem.title}}<br/><small>({{vm.returnedItem.dateYear}})</small>\r" +
    "\n" +
    "            <i ng-repeat=\"tool in vm.returnedItem.tools\"\r" +
    "\n" +
    "                class=\"fab {{tool.icon}} fa-fw\" title=\"En este proyecto se usó {{tool.name}}\"></i>\r" +
    "\n" +
    "        </h1>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <img ng-src=\"{{vm.returnedItem.imageUrl}}\" class=\"img-fluid\" alt=\"Imagen de {{vm.returnedItem.title}}\"/>\r" +
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
    "        <div uib-carousel active=\"vm.active\" interval=\"vm.myInterval\" no-wrap=\"vm.noWrapSlides\" class=\"carousel mb-1\">\r" +
    "\n" +
    "            <div uib-slide ng-repeat=\"slide in vm.portfolio track by $index\" index=\"$index\">\r" +
    "\n" +
    "                <img ng-src=\"{{slide.imageUrl}}\" class=\"img-fluid\">\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</section>"
  );

}]);
