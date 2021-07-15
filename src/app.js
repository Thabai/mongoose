require('./db/connection');
const { add, list, update, del} = require('./utils');
const yargs = require('yargs');
const command = process.argv[2];
const title = yargs.argv.title;
const titleNew = yargs.argv.titleNew;
const yearEnt = yargs.argv.year;
const watchedEnt = yargs.argv.watched;

const app = () => {
    if (command === 'add') {
        if (yearEnt) {
        add({movie: title, year: yearEnt});
    } else {
        add({movie: title});
    }
    } else if (command === 'list') {
           list();
    } else if (command === 'update') {
        if(watchedEnt) {
            update({movie: title}, {watched: watchedEnt});
        }
        else if (yearEnt) {
            update({movie: title}, {year: yearEnt});
        } else if(titleNew)  {
            update({movie: title}, {movie: titleNew}); 
        }
    } else if (command === 'delete') {
        del({movie: title});
    }
};

app();