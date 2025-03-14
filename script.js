       const arrNames = [
            "GENERIC",
            "WILLOW",
            "WOLFGANG",
            "WENDY",
            "WX78",
            "WICKERBOTTOM",
            "WOODIE",
            "WAXWELL",
            "WATHGRITHR",
            "WEBBER",
            "WINONA",
            "WARLY",
            "WORTOX",
            "WORMWOOD",
            "WURT",
            "WALTER",
            "WANDA"
        ]; // список
		
const portraits = [   
{  imgAlt: "Wilson Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/4/44/Wilson_Portrait.png/24px-Wilson_Portrait.png",
    width: 24,
    height: 24,
    title: "Wilson Portrait.png" },
    {  imgAlt: "Willow Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/f/fb/Willow_Portrait.png/24px-Willow_Portrait.png",
    width: 24,
    height: 24,
    title: "Willow Portrait.png" },
    {  imgAlt: "Wolfgang Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/9/90/Wolfgang_Portrait.png/24px-Wolfgang_Portrait.png",
    width: 24,
    height: 24,
    title: "Wolfgang Portrait.png" },
    {  imgAlt: "Wendy Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/f/fd/Wendy_Portrait.png/24px-Wendy_Portrait.png",
    width: 24,
    height: 24,
    title: "Wendy Portrait.png" },
    {  imgAlt: "WX-78 Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/5/5a/WX-78_Portrait.png/24px-WX-78_Portrait.png",
    width: 24,
    height: 24,
    title: "WX-78 Portrait.png" },
    {  imgAlt: "Wickerbottom Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/f/f8/Wickerbottom_Portrait.png/24px-Wickerbottom_Portrait.png",
    width: 24,
    height: 25,
    title: "Wickerbottom Portrait.png" },
    {  imgAlt: "Woodie Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/9/98/Woodie_Portrait.png/24px-Woodie_Portrait.png",
    width: 24,
    height: 25,
    title: "Woodie Portrait.png" },
    {  imgAlt: "Waxwell Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/9/9f/Waxwell_Portrait.png/24px-Waxwell_Portrait.png",
    width: 24,
    height: 24,
    title: "Waxwell Portrait.png" },
    {  imgAlt: "Wigfrid Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/8/86/Wigfrid_Portrait.png/24px-Wigfrid_Portrait.png",
    width: 24,
    height: 24,
    title: "Wigfrid Portrait.png" },
    {  imgAlt: "Webber Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/d/d4/Webber_Portrait.png/24px-Webber_Portrait.png",
    width: 24,
    height: 24,
    title: "Webber Portrait.png" },
	    {  imgAlt: "Winona Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/2/25/Winona_Portrait.png/24px-Winona_Portrait.png",
    width: 24,
    height: 25,
    title: "Winona Portrait.png" },
    {  imgAlt: "Warly Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/3/3b/Warly_Portrait.png/24px-Warly_Portrait.png",
    width: 24,
    height: 27,
    title: "Warly Portrait.png" },
    {  imgAlt: "Wortox Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/6/60/Wortox_Portrait.png/24px-Wortox_Portrait.png",
    width: 24,
    height: 24,
    title: "Wortox Portrait.png" },
	    {  imgAlt: "Wormwood Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/0/00/Wormwood_Portrait.png/24px-Wormwood_Portrait.png",
    width: 24,
    height: 24,
    title: "Wormwood Portrait.png" },

    {  imgAlt: "Wurt Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/1/1b/Wurt_Portrait.png/24px-Wurt_Portrait.png",
    width: 24,
    height: 21,
    title: "Wurt Portrait.png" },
    {  imgAlt: "Walter Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/a/ae/Walter_Portrait.png/24px-Walter_Portrait.png",
    width: 24,
    height: 24,
    title: "Walter Portrait.png" },
    {  imgAlt: "Wanda Portrait.png",
    src: "https://dontstarve.wiki.gg/images/thumb/1/17/Wanda_Portrait.png/24px-Wanda_Portrait.png",
    width: 24,
    height: 24,
    title: "Wanda Portrait.png" }
];
		
	     function fetchRandomString() {
        fetch('strings.pot')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n').filter(line => line.trim());// Filter out any empty lines

				 // Array to hold the filtered strings
                const filteredStrings = [];
				let previousStrings = [];
                let previousLine

                // Loop through the lines and check the previous line
                for (let i = 1; i < lines.length; i++) {
                    const currentLine = lines[i].trim();
                    previousLine = lines[i - 1].trim();

                    // Check if the previous line contains the specified strings
                    if (previousLine.includes('STRINGS.SKIN_QUOTES') || previousLine.includes('STRINGS.CHARACTERS')) {
                        if (!currentLine.includes('STRINGS') && !currentLine.includes('only_used_by')) {
                            filteredStrings.push(currentLine);
							previousStrings.push(previousLine)
                        }

                    }
                }

                // Check if there are any valid filtered strings
                if (filteredStrings.length === 0) {
                    document.getElementById('output').textContent = 'No valid strings found.';
                    return;
                }

				// Get a random string from the array
				let rNum = Math.floor(Math.random() * filteredStrings.length)
				
                const randomString = filteredStrings[rNum];
				 
							// fetch same prev
			let fetchedPrev = previousStrings[rNum].split(".")
				 
				 
	//	icon code 
	
	const container = document.getElementById('charIco');
	
	function InsertImg(index) {
            // Clear the container before inserting a new image
            container.innerHTML = '';

            if (index >= 0 && index < portraits.length) {
                const obj = portraits[index];
                const img = document.createElement('img');
                img.src = obj.src;
                img.width = obj.width;
                img.height = obj.height;
                img.alt = obj.alt;
                // img.style.margin = '10px';
                container.appendChild(img);
            } else {
                alert('Invalid index. Please enter a valid index within the range.');
            }
        }
			
                // Display the random string
                document.getElementById('output').textContent = randomString.replace(/msgid/g, '').trim();
				// может отдельный объект там под индексы хз
				InsertImg(arrNames.indexOf(fetchedPrev[2]));
				// document.getElementById('charIco').textContent = InsertImg(arrNames.indexOf(fetchedPrev[2]));
				
				//icon testing
				//zdocument.getElementById('testIco').textContent = 
				
				


            })
            .catch(error => {
                console.error('Error fetching the file:', error);
            });
	     }
	     // Add event listener to the button
        document.getElementById('fetchButton').addEventListener('click', fetchRandomString);




function funcTest() {
  var x = document.getElementById("charIco");
  if (x.style.display === "none" || x.style.display === "" ) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

		 // Call fetchRandomString on page load
        fetchRandomString();