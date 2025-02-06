document.addEventListener('DOMContentLoaded', () => {
    const addToolForm = document.getElementById('addToolForm');
    const toolsList = document.getElementById('toolsList');

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
            console.table(tools);
            toolsList.innerHTML = tools.map(tool => `
                <div class="tool-card" data-id="${tool._id}">
                    <div class="tool-content">
                        <h3>${tool.name}</h3>
                        <p>${tool.description}</p>
                        <p><strong>Category:</strong> ${tool.category || 'N/A'}</p>
                    </div>
                    <div class="tool-actions">
                        <button class="edit-btn" onclick="editTool('${tool._id}')">
                            ✏️ Edit
                        </button>
                        <button class="delete-btn" onclick="deleteTool('${tool._id}')">
                            🗑️ Delete
                        </button>
                    </div>
                    <div class="edit-form" style="display: none;">
                        <input type="text" class="edit-name" value="${tool.name}">
                        <input type="text" class="edit-description" value="${tool.description}">
                        <input type="text" class="edit-category" value="${tool.category || ''}">
                        <button onclick="saveTool('${tool._id}')">Save</button>
                        <button onclick="cancelEdit('${tool._id}')">Cancel</button>
                    </div>
                </div>
            `).join('');
        } catch (error) {
            console.error('Error:', error);
            toolsList.innerHTML = '<p>Error loading tools</p>';
        }
    }

    // Make these functions available globally
    window.editTool = function(id) {
        const card = document.querySelector(`.tool-card[data-id="${id}"]`);
        card.querySelector('.tool-content').style.display = 'none';
        card.querySelector('.tool-actions').style.display = 'none';
        card.querySelector('.edit-form').style.display = 'block';
    };

    window.cancelEdit = function(id) {
        const card = document.querySelector(`.tool-card[data-id="${id}"]`);
        card.querySelector('.tool-content').style.display = 'block';
        card.querySelector('.tool-actions').style.display = 'flex';
        card.querySelector('.edit-form').style.display = 'none';
    };

    window.saveTool = async function(id) {
        const card = document.querySelector(`.tool-card[data-id="${id}"]`);
        const toolData = {
            name: card.querySelector('.edit-name').value,
            description: card.querySelector('.edit-description').value,
            category: card.querySelector('.edit-category').value
        };

        try {
            const response = await fetch(`/api/tools/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toolData)
            });

            if (response.ok) {
                loadTools();
            } else {
                throw new Error('Failed to update tool');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to update tool');
        }
    };

    window.deleteTool = async function(id) {
        if (confirm('Are you sure you want to delete this tool?')) {
            try {
                const response = await fetch(`/api/tools/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    loadTools();
                } else {
                    throw new Error('Failed to delete tool');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to delete tool');
            }
        }
    };

    // Load tools when page loads
    loadTools();
}); 