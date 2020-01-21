const express = require("express");
const path = require("path")

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({
    extended: true
}))

app.post("/api/text", async (req, res) => {
    let text = req.body.text;
    const textArr = text.toLowerCase().replace(/[0-9\s]/gi, "").split("").sort();
    const withSpaces = text.length;
    const withoutSpaces = text.split(" ").join('').length;
    const wordCount = text.split(/(\s+)/).filter(w => w.trim().length > 0).length;
    let characterCount = [];
    let textObj = new Object();
    for(var i=0; i<textArr.length; i++){
        var key = textArr[i].toString()
        if(textObj.hasOwnProperty(key)){
            textObj[key] = textObj[key] + 1;
        }
        else{
            textObj[key] = 1;
        }
        
    }
    var keys = Object.keys(textObj)
    for(var i=0; i< keys.length; i++){
        var temp = new Object();
        temp[keys[i]] = textObj[keys[i]];
        characterCount.push(temp)
    }
    const result = {
        "textLength":{"withSpaces":withSpaces,"withoutSpaces":withoutSpaces},
        "wordCount":wordCount,
        "characterCount":characterCount
    };
    res.json(result)
})


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`${port}`))