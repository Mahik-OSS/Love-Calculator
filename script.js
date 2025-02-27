        // Function to get letter value (a=1, b=2, etc.)
        function getLetterValue(char) {
            return char.toLowerCase().charCodeAt(0) - 96;
        }

        // Function to process names and calculate result
        function processNames(name1, name2) {
            // Convert names to lowercase and remove spaces
            name1 = name1.toLowerCase().replace(/\s/g, '');
            name2 = name2.toLowerCase().replace(/\s/g, '');
            
            // Create arrays of characters
            let arr1 = [...name1];
            let arr2 = [...name2];
            
            // Find and remove common letters
            for (let i = arr1.length - 1; i >= 0; i--) {
                const index = arr2.indexOf(arr1[i]);
                if (index !== -1) {
                    arr1.splice(i, 1);
                    arr2.splice(index, 1);
                }
            }
            
            // Calculate sum of remaining letters
            let sum = 0;
            for (let char of [...arr1, ...arr2]) {
                sum += getLetterValue(char);
            }
            
            return sum;
        }

        // Function to handle form submission
        function handleSubmit(event) {
            event.preventDefault();
            
            // Get input values
            const name1 = document.getElementById('nameuser1').value;
            const name2 = document.getElementById('jaan').value;
            
            // Validate inputs
            if (!name1 || !name2) {
                alert('Please enter both names');
                return;
            }
            
            // Calculate result
            const result = processNames(name1, name2);
            
            // Navigate based on result
            if (result >110) {
                window.location.href = 'Marriage.html';
            } else if (result >90 && result<=110){
                window.location.href = 'Lover.html';
            }
            else if (result >75 && result<=90){
                window.location.href = 'Affection.html';
            }
            else if (result >50 && result<=75){
                window.location.href = 'Friendship.html';
            }
            else if (result >35 && result<=50){
                window.location.href = 'SisterandBrother.html';
            }
            else if (result >20 && result<=35){
                window.location.href = 'Enemy.html';
            }
            else{
                window.location.href = 'sad.html';
            }
        }

        // Add event listener when document loads
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.querySelector('form');
            form.addEventListener('submit', handleSubmit);
            
            // Remove the anchor tag from button click behavior
            const checkButton = document.getElementById('dekho');
            checkButton.addEventListener('click', function(e) {
                e.preventDefault();
                handleSubmit(e);
            });
        });