let projectsContainer = document.getElementById('projects');
window.onload = function projects(){
	for(i=1;i<=13;i++){
		let newLink = document.createElement('a');
		newLink.setAttribute('href','#');
		let newImg = document.createElement ('img');
		newImg.setAttribute('src','img/Layer '+i+'.png')
		newImg.setAttribute('alt','Layout '+i);
		newLink.appendChild(newImg);
		projectsContainer.appendChild(newLink);
		if(i==4||i==9){
			let br = document.createElement('br');
			projectsContainer.appendChild(br);
		};
	};

};