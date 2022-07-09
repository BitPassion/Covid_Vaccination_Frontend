function hourOptions () {
	let hours = [];
	for(let i=0; i<24; i++){
		if(i<10){
			hours.push({value: i, label: ("0"+ i + ":00h")});
		}
		else{
			hours.push({value: i, label: (i+":00h")});
		}
	}    
	return hours;
}

export default hourOptions;