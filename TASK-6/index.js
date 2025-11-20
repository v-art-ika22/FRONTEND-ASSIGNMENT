
        const tbody = document.getElementById("userTableBody");
        const spinner = document.getElementById("spinner");

        
        async function fetchUsers() {
            spinner.style.display = "block";  
            tbody.innerHTML = "";               

            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                  await new Promise(resolve => setTimeout(resolve, 1000));

                renderUsers(data);
            } 
            catch (error) {
                console.log("Error fetching users:", error);
            }

            spinner.style.display = "none";     
        }


        function renderUsers(users) {
            users.forEach(user => {
                const tr = document.createElement("tr");

                tr.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                `;

                tbody.appendChild(tr);
            });
        }

    
        document.getElementById("refreshBtn").addEventListener("click", fetchUsers);

        
        fetchUsers();