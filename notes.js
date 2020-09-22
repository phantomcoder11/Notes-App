const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')


const addNote = (title,body)=>{
   const notes = loadNotes()
   //check for duplicate nodes

   const duplicateNotes = notes.find((note) => note.title === title)
   if(!duplicateNotes){
     //push the title and body elements to the notes.json
   notes.push({
    title: title,
    body:body
})
 //save the notes that the push command has changed
 saveNotes(notes)
 console.log(chalk.green.inverse('New note added!'))
   }
 else{
     console.log(chalk.red.inverse('Note title taken!'))
 } 

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = ()=>{

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON =dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }

}

//Remove command
const removenote = (title) => {
const notes = loadNotes()
const notestokeep = notes.filter((note) => note.title != title)
if(notestokeep.length == notes.length){
    console.log(chalk.red.inverse('NO NOTE REMOVED'))
}
else
console.log(chalk.green.inverse('NOTE SUCCESSFULLY REMOVED'))
saveNotes(notestokeep)
}


//listnote
const listnote = ()=>{
    const notes = loadNotes()

console.log(chalk.yellow.inverse('Your Notes'))
printnote(notes)

}
const printnote = (notes)=> {
    notes.forEach((note) => {
        console.log(note.title)
    })
}

//readnote
const readnote = (title)=>{
   const notes = loadNotes();
   const note = notes.find((note) => note.title === title)
   if(note){
       console.log(chalk.inverse(note.title))
       console.log(note.body)
   }else{
       console.log(chalk.red.inverse('No such note exists'))
   }
}

module.exports = {

addNote : addNote,
removenote : removenote,
listnote : listnote,
readnote : readnote
}