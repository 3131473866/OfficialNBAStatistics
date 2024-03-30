
function handleAreaClick(areaId) {
    const apiUrl = `https://www.balldontlie.io/api/v1/teams/${areaId}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Log the entire data object to the console to inspect its structure
            console.log(data);

            // Process the API response and update the teamInfo and tooltip elements
            const teamInfoElement = document.getElementById('teamInfo');
            const tooltipElement = document.getElementById('tooltip');

            // Create a string with all relevant details
            const teamDetailsString = `
                <p> <strong> Abbreviation: </strong> ${data.abbreviation}</p>
                <p> <strong> City: </strong> ${data.city}</p>
                <p> <strong> Conference: </strong> ${data.conference}</p>
                <p> <strong> Division: </strong> ${data.division}</p>
                <p> <strong> Full Name: </strong> ${data.full_name}</p>
                <p> <strong> Name: </strong> ${data.name}</p>
            `;

            // Insert the string into the HTML
            teamInfoElement.innerHTML = `<div><strong>Information for Area ${data.full_name}:</strong> ${teamDetailsString}</div>`;

            // Set the tooltip content
            tooltipElement.innerText = data.full_name;

            // Show the tooltip
            tooltipElement.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
