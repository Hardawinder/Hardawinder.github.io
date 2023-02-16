"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectsData = void 0;

var _pagination = _interopRequireDefault(require("../assets/svg/projects/pagination.svg"));

var _gifSearch = _interopRequireDefault(require("../assets/svg/projects/gifSearch.svg"));

var _rest = _interopRequireDefault(require("../assets/svg/projects/rest.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projectsData = [{
  id: 1,
  projectName: 'Restaurent Website',
  projectDesc: 'This project contains dishes and restaurent information . You can change it into any languages.',
  tags: ['VueJs', 'SpringBoot', 'Bootstrap'],
  code: 'https://github.com/Hardawinder/Restaurent-Application.git',
  demo: 'https://github.com/Hardawinder/Restaurent-Application.git',
  image: _rest["default"]
}, {
  id: 2,
  projectName: 'Gif Search',
  projectDesc: 'This project uses a api to genearate a random gif which can be saved by user  usually these are memes.',
  tags: ['React', 'JQuery', 'CSS'],
  code: 'https://github.com/Hardawinder/gifSearchSite.git',
  demo: 'https://github.com/Hardawinder/gifSearchSite.git',
  image: _gifSearch["default"]
}, {
  id: 3,
  projectName: 'Pagination',
  projectDesc: 'This project project demonstrates the Vanilla Javascript knowedge by distributing the information into different pages',
  tags: ['Html', 'CSS', 'Vanilla Javascript'],
  code: 'https://github.com/Hardawinder/paginationAssignmentByHardawinderSingh',
  demo: 'https://github.com/Hardawinder/paginationAssignmentByHardawinderSingh',
  image: _pagination["default"]
}]; // Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/

exports.projectsData = projectsData;