const yargs = require('yargs')
const notes = require('./notes.js')
//customizing yargs version
yargs.version('1.1.0')

//Create add command

yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOption :true,
            type:'string'
        },
        body:{
            describe:'body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
     notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'read',
    describe:'Read a note',
    handler: ()=>{
        console.log('Reading a note')
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv)=>{
        notes.removenote(argv.title)
    }
})
yargs.command({
    command : 'list',
    describe: 'List of Notes',
    handler: () => {
        notes.listnote()
    }
})
yargs.command({
    command: 'read',
    describe:'Reads Note',
    build:{
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readnote(argv.title)
    }
})
// console.log(yargs.argv)
yargs.parse()