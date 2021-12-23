import React, { Component } from 'react';
// import { Button } from "react-bootstrap";
//import "assets/css/material-dashboard-react.css?v=1.10.0";
import axios from 'axios';
// import Jurisdiction from './Jurisdiction';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import Box from '@material-ui/core/Box';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SendIcon from '@material-ui/icons/Send';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
  import IconButton from '@material-ui/core/IconButton';
  import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
  import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
  import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
// import AvailableJurisdiction from './AvailableJurisdiction -old';

 const styles = theme => ({
 	button: {
	  	margin: theme.spacing(2),
		borderRadius : 30,
	},
	iconStyle:{
		backgroundColor :"#c6fafd",
		borderRadius : 15,
		boxShadow: "inset 0px 2px 5px #41eef8;",
        padding: 5,
		width: "3.5em"

	},
	box: {
		height: "20em",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "8",
		rowGap: "10px",
		width: "50px",
		justifyContent: "center",
	  },
	
	centerBox: {
	   justifyContent: "space-between",
	}
  });

var filteredTasks;
let setIndexData;

class AvailableJurisdiction extends Component {

	state = {
		open: false,
		tasks: [
			// {id: "1", taskName:"Read book",type:"available",isSelected:false, backgroundColor: "red", index:0},
			// {id: "2", taskName:"Pay bills", type:"available",isSelected:false, backgroundColor:"green", index:0},
			// {id: "3", taskName:"Go to the gym", type:"available",isSelected:false, backgroundColor:"blue", index:0},
			// {id: "4", taskName:"Play baseball", type:"available",isSelected:false, backgroundColor:"green", index:0}
		  ]
		}



		async componentDidMount() {
			let juriData = [];
		  //   const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
		  // const fetchdata = await response.json();
		  // console.log(fetchdata);
		 await axios.get("https://localhost:5001/WeatherForecast").then(
			result => {result.data.forEach((jurisdiction) => {
				let data = {id:jurisdiction.temperatureF,taskName:jurisdiction.summary,type:"available",isSelected:false,index:0}
				// let data = {id:jurisdiction.temperatureF,taskName:jurisdiction.summary,isSelected:false,index:0}
				juriData.push(data);
				//console.log(jurisdiction);
				});
			  this.setState({
				isLoaded: true,
				tasks: juriData
			  });
			  console.log(this.state.tasks);
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			error => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
			);
		}	
	onDoubleClick = (event, cat, type) => {
    	//console.log('clicked on div: ', cat);
    	//console.log(type);
		console.log('double click');
		//let taskName = cat;//event.dataTransfer.getData(cat);

	    let tasks = this.state.tasks.filter((task) => {
			//console.log(task.type);
	        if (task.isSelected) {				
	            if(type == "selected")
				{
					task.type = "available";
					task.index = 0;
					setIndexData = this.state.tasks.filter( task => { return task.type === "selected" });
					setIndexData.filter((selectedData,index) => {
						selectedData.index = index + 1;
					});
				}
				else{					
					task.type = "selected";
					setIndexData = this.state.tasks.filter( task => { return task.type === "selected" });
					setIndexData.filter((selectedData,index) => {
						selectedData.index = index + 1;
					});
				}
				task.isSelected = false;
	        }
			
			console.log(task);
	        return task;
	    });
		//console.log(tasks.filter( task => { return task.type == "selected" }));
		filteredTasks = "";
		filteredTasks = tasks.filter( task => { return task.type == "selected" });
		this.setState({
	        ...this.state,
	        tasks
	    });
		//event.dataTransfer.setData("taskName", cat);
	} 

	// onClick = (event, cat, type) => {
    // 	//console.log('clicked on div: ', cat);
    // 	//console.log(type);
	// 	let taskName = cat;//event.dataTransfer.getData(cat);

	//     let tasks = this.state.tasks.filter((task) => {
	// 		//console.log(task.type);
	//         if (task.taskName == taskName) {
				
	//             if(type == "selected")
	// 			{
	// 				task.type = "available";
	// 			}
	// 			else{
					
	// 				task.type = "selected";
	// 			}
	//         }
	//         return task;
	//     });
	// 	// console.log(tasks.filter( task => { return task.type == "selected" }));
	// 	filteredTasks = tasks.filter( task => { return task.type == "selected" });
	// 	console.log("filteredtasks" + typeof(filteredTasks));
	//     this.setState({
	//         ...this.state,
	//         tasks
	//     });
	// 	//event.dataTransfer.setData("taskName", cat);
	// } 

    onClick = (event, cat) => {
		console.log('single click');
    	//console.log('clicked on div: ', cat);
    	//console.log(type);
		let taskName = cat;//event.dataTransfer.getData(cat);

	    let tasks = this.state.tasks.filter((task) => {
			//console.log(task.type);
	        if (task.taskName == taskName) {
				
	            if(task.isSelected)
				{
					task.isSelected = false;
				}
				else{
					
					task.isSelected = true;
				}
	        }
	        return task;
	    });
		//console.log("Filtered tasks" + JSON.stringify(tasks.filter( task => { return task.isSelected == true })));
	    //filteredTasks = tasks.filter( task => { return task.type == "selected" });
		filteredTasks = {};
		filteredTasks= tasks.filter( task => { return task.isSelected == true });
		//console.log("filteredtasks" + JSON.stringify(tasks));
		this.setState({
	        ...this.state,
	        tasks
	    });
		//event.dataTransfer.setData("taskName", cat);
	} 

	onMove = (event,move) => {    	
	    let tasks = this.state.tasks.filter((task) => {
	        if (task.isSelected && move !== "moveAllToLeft" && move !== "moveAllToRight") {	
				if(move === "moveRight"){
					task.type = "selected";
					setIndexData = this.state.tasks.filter( task => { return task.type === "selected" });
					setIndexData.filter((selectedData,index) => {
						task.index = index + 1;
					});
				
				}
				else if(move === "moveLeft"){
					task.type = "available";
					task.index = 0;
					setIndexData = this.state.tasks.filter( task => { return task.type === "selected" });
					setIndexData.filter((selectedData,index) => {
						selectedData.index = index + 1;
					});
				}	
	        }
			else if(move === "moveAllToLeft"){
				task.type = "available";
				task.index = 0;
				setIndexData = this.state.tasks.filter( task => { return task.type === "selected" });
				setIndexData.filter((selectedData,index) => {
					selectedData.index = index + 1;
				});
				
			}
			else if(move === "moveAllToRight"){
				task.type = "selected";
				setIndexData = this.state.tasks.filter( task => { return task.type === "selected" });
				setIndexData.filter((selectedData,index) => {
					selectedData.index = index + 1;
				});
				
			}	
			task.isSelected = false;		
	        return task;
	    });
		//console.log(tasks.filter( task => { return task.type == "selected" }));
		filteredTasks = {};
		filteredTasks = tasks.filter( task => { return task.type == "selected" });
		this.setState({
	        ...this.state,
	        tasks
	    });
	} 

	onDragStart = (event, taskName) => {
    	console.log('dragstart on div: ', taskName);
    	event.dataTransfer.setData("taskName", taskName);
	}
	onDragOver = (event) => {
	    event.preventDefault();
	}

	onDrop = (event, cat) => {
	    let taskName = event.dataTransfer.getData("taskName");

	    let tasks = this.state.tasks.filter((task) => {
	        if (task.taskName == taskName) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
	        tasks
	    });
	}

	// handleOpen = () => {
	// 	this.setState({
	//         // ...this.state,
	//         open: true
	//     });
	// }

	// handleClose= () => {
	// 	this.setState({
	//         // ...this.state,
	//         open: false
	//     });
	// }


	render() {

		const { classes } = this.props;

		var tasks = {
	      available: [],
	      selected: []
	    }
	
	this.state.tasks.sort((a, b) => a.index > b.index ? 1 : -1).forEach ((task) => {
        // this.state.tasks.forEach ((task) => {
			tasks[task.type].push(
			  <div key={task.id} 
		  //	onClick={function(evt){(evt.target).ondblclick = () =>{console.log('on double click');}}}
			  onClick={(event)=>{this.onClick(event, task.taskName, task.type)}} 
			  //	(event)=>{this.onSingleClickHandler(event, task.taskName, task.type)}} 
  			  onDoubleClick={(event)=>{this.onDoubleClick(event, task.taskName, task.type)}}
				onDragStart = {(event) => this.onDragStart(event, task.taskName)}
				draggable
				className="draggable"
				style = {task.isSelected? {backgroundColor: "green"}:{backgroundColor: "rgb(69, 108, 134)"}}>
				{task.taskName} {task.index>0?task.index:""}
			  </div>
			);
		  });

	    return (
		  <div>

	      <div className="drag-container">
	        {/* <h2 className="head">To Do List Drag & Drop</h2> */}
		    <div className="inProgress"
			//	onClick={(event)=>{this.onClick(event, task.taskName, task.type)}}
	    		onDragOver={(event)=>this.onDragOver(event)}
      			onDrop={(event)=>{this.onDrop(event, "available")}}>
	          {tasks.available}			 
	        </div>
			<Box m={5} pt={2} p ={2} className = {classes.button , classes.iconStyle ,classes.centerBox , classes.box}>
				<IconButton 
					className={classes.iconStyle}
					aria-label="Forward" 
					variant="contained" 
					color="primary"
					onClick={(event)=>this.onMove(event,"moveRight")}
				>
					<ArrowForwardIosIcon fontSize="large"/>
				</IconButton>
				
				<IconButton 
					className={classes.iconStyle}
					aria-label="Forward" 
					variant="contained" 
					color="primary" 
					onClick={(event)=>this.onMove(event,"moveAllToRight")}
				>
					<DoubleArrowIcon fontSize="large"/>
				</IconButton>	
				<IconButton 
					className={classes.iconStyle}
					aria-label="Back" 
					variant="contained" 
					color="primary" 
					onClick={(event)=>this.onMove(event,"moveLeft")}
				>
					<ArrowBackIosIcon fontSize="large"/>
				</IconButton>
					{/* <Button variant="contained" color="primary" onClick={(event)=>this.onMove(event,"moveRight")}>
						move right
					</Button>
					<Button variant="contained" color="primary" onClick={(event)=>this.onMove(event,"moveLeft")}>
						move left
					</Button> */}
				
				<Button 
					variant="contained" 
					color="primary" 
					onClick={(event)=>this.onMove(event,"moveAllToLeft")}
				>
					move all To left
				</Button>
					{/* <Button variant="contained" color="primary" onClick={(event)=>this.onMove(event,"moveAllToRight")}>
						move all To right
					</Button> */}
			</Box>

	        <div className="droppable"
	        	onDragOver={(event)=>this.onDragOver(event)}
          		onDrop={(event)=>this.onDrop(event, "selected")}>
	          <span className="group-header">Selected Jurisdiction</span>
	          {tasks.selected}
	        </div>	        
	      </div>
		  <Button 
		  	   className ={classes.button}
               onClick={() => {this.props.onClose()}}
               variant="contained" 
               color="secondary"
               startIcon={<CancelIcon />}
             >
               Cancel
             </Button>
             <Button 
			 	className ={classes.button}
                onClick={this.handleOpen} 
                variant="contained" 
                color="primary"
                startIcon={<AddCircleIcon />}
              >
                Create Jurisdiction
             </Button>
             <Button 
			   className ={classes.button}
               onClick={() => {this.props.onClose(filteredTasks)}} 
               variant="contained" 
               color="primary"
               startIcon={<SendIcon />}
             >
               Apply
             </Button>
           {/* <Jurisdiction open={this.state.open} onClose={this.handleClose}/>  */}
		  </div>
	    );
  	}
}

export default withStyles(styles)(AvailableJurisdiction);