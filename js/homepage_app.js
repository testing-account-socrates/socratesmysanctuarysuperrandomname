const left = document.getElementById("left-side");

const handleOnDown = e => left.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    left.dataset.mouseDownAt = "0";  
    left.dataset.prevPercentage = left.dataset.percentage;
}

const handleOnMove = e => {
    if(left.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(left.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 1.2;
    
    const percentage = (mouseDelta / maxDelta) * 100,
    nextPercentageUnconstrained = parseFloat(left.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    left.dataset.percentage = nextPercentage;
    
    left.style.width = `${Math.min(100 - percentage,100)}%`;
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);