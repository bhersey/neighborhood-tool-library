document.addEventListener('DOMContentLoaded', () => {
    const addToolForm = document.getElementById('addToolForm');
    const toolsList = document.getElementById('toolsList');

    // Load tools when page loads
    loadTools();

    // Handle form submission
    addToolForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const toolData = {
            name: document.getElementById('toolName').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value
        };

        try {
            const response = await fetch('/api/tools', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toolData)
            });

            if (response.ok) {
                addToolForm.reset();
                loadTools();
            } else {
                throw new Error('Failed to add tool');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add tool');
        }
    });

    // Function to load and display tools
    async function loadTools() {
        try {
            const response = await fetch('/api/tools');
            const tools = await response.json();
            
            toolsList.innerHTML = tools.map(tool => `
                <div class="tool-card">
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                    <p><strong>Category:</strong> ${tool.category || 'N/A'}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error:', error);
            toolsList.innerHTML = '<p>Error loading tools</p>';
        }
    }
}); 