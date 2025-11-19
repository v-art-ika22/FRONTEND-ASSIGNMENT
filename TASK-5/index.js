
        
        let products = [
            {name:"Laptop", category:"electronics"},
            {name:"Mobile", category:"electronics"},
            {name:"Headphone", category:"electronics"},
            {name:"T-Shirt", category:"clothing"},
            {name:"Jeans", category:"clothing"},
            {name:"Jacket", category:"clothing"},
            {name:"JavaScript Book", category:"books"},
            {name:"Web Dev Book", category:"books"},
            {name:"Smartwatch", category:"electronics"},
            {name:"Sweater", category:"clothing"}
        ];

        
        function showAll() {
            let result = "";
            for (let p of products) {
                result += p.name + " (" + p.category + ")<br>";
            }
            document.getElementById("output").innerHTML = result;
        }

      
        function showElectronics() {
            let result = "";
            for (let p of products) {
                if (p.category === "electronics") {
                    result += p.name + "<br>";
                }
            }
            document.getElementById("output").innerHTML = result;
        }

        
        function showClothing() {
            let result = "";
            for (let p of products) {
                if (p.category === "clothing") {
                    result += p.name + "<br>";
                }
            }
            document.getElementById("output").innerHTML = result;
        }

     
        function searchProduct() {
            let text = document.getElementById("search").value.toLowerCase();

            let result = "";
            for (let p of products) {
                if (p.name.toLowerCase().includes(text)) {
                    result += p.name + " (" + p.category + ")<br>";
                }
            }
            document.getElementById("output").innerHTML = result;
        }

        
        showAll();
   
