document.getElementById('headlinesForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        companyName: document.getElementById('companyName').value,
        product: document.getElementById('product').value,
        platform: document.querySelector('input[name="platform"]:checked').value,
        contentType: document.querySelector('input[name="contentType"]:checked').value
    };

    // Show loading message
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<div class="loading">Generating content...</div>';

    try {
        // Simulate API call (replace with actual API endpoint)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to generate content');
        }

        const data = await response.json();
        
        // Update results section with generated content
        resultsDiv.innerHTML = `
            <h2>Generated ${formData.contentType}</h2>
            <p>${data.title}</p>
        `;
    } catch (error) {
        // Display error message
        resultsDiv.innerHTML = `
            <div class="error">
                An error occurred while generating content. Please try again.
            </div>
        `;
        console.error('Error:', error);
    }
});
