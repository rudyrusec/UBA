// This script could be used to add interactive elements or animations

// Example: a function to animate the background slightly on page load
// window.onload = function() {
//     const body = document.body;
//     setTimeout(() => {
//         body.style.backgroundImage = 'linear-gradient(135deg, #121212 25%, #1E1E1E 25%, #1E1E1E 50%, #121212 50%, #121212 75%, #1E1E1E 75%, #1E1E1E)';
//         body.style.backgroundSize = '50px 50px';
//     }, 500);
// };

// // Example: an interactive effect when clicking a dashboard item
// const dashboardItems = document.querySelectorAll('.dashboard-item');

// dashboardItems.forEach(item => {
//     item.addEventListener('click', () => {
//         // You can add an effect like a temporary background color change
//         item.style.backgroundColor = '#333';
//         setTimeout(() => {
//             item.style.backgroundColor = '#222';
//         }, 200);
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const cmdline = document.getElementById('cmdline');
    const output = document.getElementById('output');

    cmdline.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = this.innerText;
            outputCommand(command);
            this.innerText = ''; // Clear the command line
        }
    });

    function outputCommand(command) {
        const p = document.createElement('p');
        p.textContent = `$ ${command}`;
        output.appendChild(p);
    }
});
