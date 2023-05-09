
const elLegend = document.getElementById("legend");

function drawLegend(highestText, lowestText) {

    const ctx = elLegend.getContext("2d");

    ctx.clearRect(0, 0, elLegend.width, elLegend.height);

    const lingrad = ctx.createLinearGradient(0, 0, 0, 200);

    lingrad.addColorStop(1, "#F7F7E9");
    lingrad.addColorStop(0, "#723122");

    ctx.fillStyle = lingrad;
    ctx.fillRect(15, 10, 15 + 3, 200 - 20);

    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "white";
    ctx.rect(15, 10, 15 + 3, 200 - 20);
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.font = "16px 'Helvetica Neue'";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    
    ctx.fillText(highestText, 65, 10);
    
    ctx.fillStyle = '#FFFFAAAA';
    ctx.font = "12px 'Helvetica Neue'";
    ctx.fillText('ppb', 65, 10 + 15);
    
    ctx.fillStyle = "white";
    ctx.font = "16px 'Helvetica Neue'";
    ctx.fillText(lowestText, 65, 200 - 35);

    ctx.fillStyle = '#FFFFAAAA';
    ctx.font = "12px 'Helvetica Neue'";
    ctx.fillText('ppb', 65, 200 - 35 + 15);
}
