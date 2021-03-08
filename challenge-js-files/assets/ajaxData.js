() => {
    async function getData() {
        const response = await fetch("https://canvasjs.com/services/data/datapoints.php");

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();
        return data;
    }

    getData()
}