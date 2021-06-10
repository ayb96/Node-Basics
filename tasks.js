
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}



/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {

  
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.trim().split(" ")[0] == "hello"){
    hello(text);
  }
  else if (text === 'help\n'){
    help();
  }else if (text === 'list\n'){
    list();
  }
  else if (text.trim().split(" ")[0] == "add"){
    add(text.trim().split(" ")[1]);
  }
  else if (text.trim().split(" ")[0] == "remove"){
    remove(text.trim().split(" ")[1]);
  }
  else{
    
    
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(x){
  const y = x.replace(/\r?\n|\r/,'');
  console.log( y.trim() +"!");
}

/**
 * list
 *
 * @returns {void}
 */
 var List = ["task1", "task2", "task3", "task4", "task5"];
 function list(){
   
   List.map(x=>{
        console.log(x)
   })
   taskNumber=List.length;
   console.log("Number of tasks:", taskNumber)
   

  
}

/**
 * help function lists all the possible commands we have in the main function
 */

function help(){
  console.log("quit command",)
  console.log("extended hello command")
  console.log("unknown command")

  
}


function add(x){
  if(x == undefined){
      console.log("error");
  }else{
    List.push(x);
    console.log(List)
  }
}
function remove(x){
  
  if(0 <= x && x< (List.length)) {
    List.splice(x-1,1)
    console.log(List)
  }else if(x === undefined){
    result = List.splice(List.length-1,1)
    console.log(List)
    
  }else{
    console.log("error")
  }
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Ayoub")
