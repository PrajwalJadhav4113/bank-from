document.addEventListener("DOMContentLoaded", function() {
    const ackContainer = document.getElementById("ack-account-boxes");
    const mainContainer = document.getElementById("main-account-boxes");

    // Bank of India account numbers are 15 digits long
    const numBoxes = 15;

    // Generate Acknowledgement column boxes
    for (let i = 0; i < numBoxes; i++) {
        let input1 = document.createElement("input");
        input1.type = "text";
        input1.maxLength = 1;
        input1.className = "box-input";
        setupInputBehavior(input1);
        ackContainer.appendChild(input1);
    }

    // Generate Main Form column boxes
    for (let i = 0; i < numBoxes; i++) {
        let input2 = document.createElement("input");
        input2.type = "text";
        input2.maxLength = 1;
        input2.className = "box-input";
        setupInputBehavior(input2);
        mainContainer.appendChild(input2);
    }
    
    // Auto focus next box when typing
    function setupInputBehavior(input) {
        input.addEventListener("input", function() {
            // Only allow numbers
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length === this.maxLength) {
                let next = this.nextElementSibling;
                if (next && next.classList.contains('box-input')) {
                    next.focus();
                }
            }
        });

        // Handle backspace navigation
        input.addEventListener("keydown", function(e) {
            if (e.key === "Backspace" && this.value === "") {
                let prev = this.previousElementSibling;
                if (prev && prev.classList.contains('box-input')) {
                    prev.focus();
                }
            }
        });
    }
});
