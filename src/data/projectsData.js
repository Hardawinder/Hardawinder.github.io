import pagination  from '../assets/svg/projects/paginationWeb.png'
import gif from '../assets/svg/projects/gifSearch.svg'
import rest from '../assets/svg/projects/rest.svg'
import bmi from '../assets/svg/projects/bmi.png'
import randomProfile from '../assets/svg/projects/randomProfile.png'
import previousPort from '../assets/svg/projects/previousPort.png'



export const projectsData = [
    {
        id: 1,
        projectName: 'Restaurent Website',
        projectDesc: 'This project contains dishes and restaurent information . You can change it into any languages.',
        tags: ['VueJs', 'SpringBoot', 'Bootstrap'],
        code: 'https://github.com/Hardawinder/Restaurent-Application.git',
        demo: 'https://github.com/Hardawinder/Restaurent-Application.git',
        image: rest
    },
    {
        id: 2,
        projectName: 'Gif Search',
        projectDesc: 'This project uses a api to genearate a random gif which can be saved by user  usually these are memes.',
        tags: ['React', 'JQuery', 'CSS'],
        code: 'https://github.com/Hardawinder/gifSearchSite.git',
        demo: 'https://github.com/Hardawinder/gifSearchSite.git',
        image: gif
    },
    {
        id: 3,
        projectName: 'Pagination',
        projectDesc: 'This project project demonstrates the Vanilla Javascript knowedge by distributing the information into different pages',
        tags: ['Html', 'CSS', 'Vanilla Javascript'],
        code: 'https://github.com/Hardawinder/paginationAssignmentByHardawinderSingh',
        demo: 'https://github.com/Hardawinder/paginationAssignmentByHardawinderSingh',
        image: pagination
    },
    {
        id: 4,
        projectName: 'BMI',
        projectDesc: 'This project calculates the BMI based on the info given by the user , this is a standlone programme',
        tags: ['Html', 'CSS', 'EJS','Templating','Vanilla Javascript'],
        code: 'https://github.com/Hardawinder/bmiByHardawinderSingh',
        demo: 'https://github.com/Hardawinder/bmiByHardawinderSingh',
        image: bmi
    },
    {
        id: 5,
        projectName: 'Random Profile',
        projectDesc: 'This project picks customer from a api,it can be used as some random giveaways by putting the data inside of it ',
        tags: ['Html', 'CSS', 'API','Problem Solving','Vanilla Javascript'],
        code: 'https://github.com/Hardawinder/RandomProfilePictures',
        demo: 'https://github.com/Hardawinder/RandomProfilePictures',
        image: randomProfile
    },
    {
        id: 6,
        projectName: 'Portfolio',
        projectDesc: 'This project is portfolio website used earlier which also demonstrate all projects',
        tags: ['Html', 'CSS', 'EJS','Templating','Vanilla Javascript'],
        code: 'https://github.com/Hardawinder/portFolioByhsd',
        demo: 'https://github.com/Hardawinder/portFolioByhsd',
        image: previousPort
    },
]


// Do not remove any fields.
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