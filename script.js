document.addEventListener('DOMContentLoaded', () => {
    let ball = document.getElementById('ball');
    let initialHeight = 0; // initial height of the ball drop
    let gravity = 9.8; // acceleration due to gravity (m/s^2)
    let timeInterval = 0.05; // time interval for simulation (seconds)
    let speed = 0; // initial speed

    function updateBallPosition() {
        let newPosition = 0.5 * gravity * Math.pow(speed, 2) * Math.pow(timeInterval, 2);
        initialHeight += newPosition;
        speed = speed + gravity * timeInterval;
        ball.style.transform = `translateY(${initialHeight}px)`;
    }

    setInterval(updateBallPosition, timeInterval * 1000); // Update position every timeInterval seconds
});

// 