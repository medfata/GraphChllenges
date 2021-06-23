/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways
//create the queue
const Queue = function(){
    this.elements = [];
    this.enqueue = function(newElmeents){
        this.elements = [...this.elements, ...newElmeents];
    }
    this.dequeue = function(){
        return this.elements.shift();
    }
    this.size = function(){
        return this.elements.length;
    }
}
//create the network map
const SkyNet = new Map();
const ExitWays = [];
const isAnExitWay = function(node){
    return ExitWays.includes(node);
}
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
    //populate the synet map
    let oldConnections = SkyNet.get(N1) || [];
    SkyNet.set(N1, [...oldConnections, N2]);
}
for (let i = 0; i < E; i++) {
    const EI = parseInt(readline()); // the index of a gateway node
    //populat the exitways in array
    ExitWays.push(EI);
}
console.error(SkyNet);
// game loop
while (true) {
    const SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn
    //starting state 
    let queue = new Queue();
    queue.enqueue(SkyNet.get(SI));
    let parentNode  = SI;
    
    //creating the searched array
    let searched = [];
    //entring the graph connection loop 
    while(queue.size() != 0){
        //take the first element of the queue
        let childNode = queue.dequeue();
        console.error(childNode)
        //check if the node is already checked
        if(!searched.includes(childNode)){
            if(isAnExitWay(childNode)){
                console.log(parentNode+' '+childNode)
            }else{
                queue.enqueue(SkyNet.get(childNode));
                parentNode = childNode;
            }
           
            //check the node as searched
            searched.push(childNode);
        }
    }

    // Example: 0 1 are the indices of the nodes you wish to sever the link between
}
