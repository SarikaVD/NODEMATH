const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;

// Middleware

app.use(express.json());

// CALCULATOR API

app.post('/calculate', (req,res) => {
    const { operation, num1, num2 } = req.body;

    if ( typeof num1 !== 'number' || typeof num2 !== 'number' ) {
        return res.status(400).json({error: "Please enter only numbers."});
    }
    let result;
    let result_num1;
    let result_num2;

    // OPERATIONS TO BE PERFORMED

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;

        case 'subtract':
            result = num1 - num2;
            break;
        
        case 'multiply':
            result = num1 * num2;
            break;
    
        case 'divide':
            if (num2 === 0) {
                return res.status(400).json({ error: "Divison by zero is not defined."});
            }
            result = num1 / num2;
            break;
        
        case 'percentage':
            result = (num1 / num2) * 100 ;
            break;
    
        case 'power':
            result = Math.pow (num1 , num2);
            break;

        case 'square':
            result_num1 = num1 * num1;
            result_num2 = num2 * num2;
                break;
    
        case 'sqrt':
            if (num1 < 0 ) {
                return res.status(400).json({error: "Square root of a negative number is not allowed"});
            }
            result_num1 = Math.sqrt(num1);
            result_num2 = Math.sqrt(num2);
            break;

        default:
            return res.status(400).json({error: "Invalid operation. Use add, subtract, multiply, divide, percentage, power, square or sqrt."});
        
    }

    res.json({ operation, num1, num2, result, result_num1, result_num2 });
});

// Start the server

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    console.log( `Calculator API is running on http://localhost:${PORT}`);
});        



