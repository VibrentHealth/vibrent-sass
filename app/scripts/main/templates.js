angular.module('vbr-style-guide').run(['$templateCache', function($templateCache) {$templateCache.put('components/vbr-checkbox/checkbox.html','checkbox will go here\n');
$templateCache.put('components/vbr-dropdown/dropdown.html','<label for="example">label</label>\n<select id="example">\n    <option value="" selected disabled >placeholder</option>\n    <option id="1" value="first">first</option>\n    <option id="2" value="second">second</option>\n    <option id="3" value="third">third</option>\n</select>\n');
$templateCache.put('components/vbr-input/input.html','\n<label for="example">label</label>\n<input id="example" type="text" placeholder="placeholder"/>\n');}]);