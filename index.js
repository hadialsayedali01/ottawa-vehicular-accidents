n = document.querySelector(".n")
y = document.querySelector(".y")
yPrime = document.querySelectorAll(".yPrime")
sumAbsDiv = document.querySelectorAll(".sumAbsDiv")

mathDict = {
    n:'The number of data points in testing.',
    y: 'The actual value.',
    yPrime: 'The value predicted by the model.',
    sumAbsDiv: 'The average of the absolute differences between each data point gives the mean absolute error.'
}


//hovering

//clicking

yPrime.forEach(element => {
    element.addEventListener('click',(e)=>{
        e.preventDefault()
        dialogGeneral.innerHTML=''
        dialogGeneral.textContent=mathDict['yPrime']
        dialogGeneral.appendChild(closeDialog);
        dialogGeneral.showModal()    
    }) 
});

n.addEventListener("click",(e)=>{
    e.preventDefault()
    dialogGeneral.innerHTML=''
    dialogGeneral.textContent=mathDict['n']
    dialogGeneral.appendChild(closeDialog);
    dialogGeneral.showModal()
})

y.addEventListener("click",(e)=>{
    e.preventDefault()
    dialogGeneral.innerHTML=''
    dialogGeneral.textContent=mathDict['y']
    dialogGeneral.appendChild(closeDialog);
    dialogGeneral.showModal()
})

sumAbsDiv.forEach(element => {
    element.addEventListener('click',(e)=>{
        e.preventDefault()
        dialogGeneral.innerHTML=''
        dialogGeneral.textContent=mathDict['sumAbsDiv']
        dialogGeneral.appendChild(closeDialog);
        dialogGeneral.showModal()    
    }) 
});

dialogDict = {
        intro:[
            `<pre>
                SELECT "Placeholder data" columnName;
            <pre>`,
            `<table border="1"><tbody><tr><td bgcolor="silver" class="medium">placeholderColumn</td></tr><tr><td class="normal" valign="top">Placeholder data</td></tr></tbody></table>`
        ],
        numCrashes:[
            `
            <pre>
            SELECT count(*) num_crashes FROM crashes;
            </pre>
            `,
            `<table border="1"><tbody><tr><td bgcolor="silver" class="medium">num_crashes</td></tr><tr><td class="normal" valign="top">74612</td></tr></tbody></table>`
        ],
        injuryPercentages:[
            `<pre>
                SELECT 
                    SUM(CASE WHEN Max_Injury LIKE '%Minor' THEN 1 END)/count(*)*100 AS none_percent,
                    SUM(CASE WHEN Max_Injury LIKE '%Minimal' THEN 1 END)/count(*)*100 AS minimal_percent,
                    SUM(CASE WHEN Max_Injury LIKE '%Minor' THEN 1 END)/count(*)*100 AS minor_percent,
                    SUM(CASE WHEN Max_Injury LIKE '%Major' THEN 1 END)/count(*)*100 AS major_percent,
                    SUM(CASE WHEN Max_Injury LIKE '%Fatal' THEN 1 END)/count(*)*100 AS fatal_percent
                FROM crashes;
            </pre>
            `,
            '<table border="1"><tbody><tr><td bgcolor="silver" class="medium">none_percent</td><td bgcolor="silver" class="medium">minimal_percent</td><td bgcolor="silver" class="medium">minor_percent</td><td bgcolor="silver" class="medium">major_percent</td><td bgcolor="silver" class="medium">fatal_percent</td></tr><tr><td class="normal" valign="top">10.2102</td><td class="normal" valign="top">6.7107</td><td class="normal" valign="top">10.2102</td><td class="normal" valign="top">0.8725</td><td class="normal" valign="top">0.1890</td></tr></tbody></table>'
            
        ]
    }

    dialogGeneral = document.createElement("dialog")
    closeDialog = document.createElement("button")
    closeDialog.textContent="Close"
    closeDialog.addEventListener("click",(event)=>{
        event.preventDefault()
        dialogGeneral.close()
    })

    dialogGeneral.appendChild(closeDialog)
    document.getElementsByTagName("html")[0].appendChild(dialogGeneral);

    document.getElementById("table-contents").addEventListener("click",()=>{
        dialogGeneral.innerHTML = 
        `
        <a href="#introduction">Introduction</a>
        <a href="#preprocessing">Preprocessing</a>
        <a href="#analysis">Analysis</a>
        <a href="#machine-learning">Machine Learning</a>
        `;
        dialogGeneral.appendChild(closeDialog);
        dialogGeneral.showModal();
        document.activeElement.blur();


    });
    
    document.getElementById("numCrashes").addEventListener("click",()=>{
        dialogGeneral.innerHTML=dialogDict.numCrashes[0]+dialogDict.numCrashes[1]
        dialogGeneral.appendChild(closeDialog);
        dialogGeneral.showModal();
    });

    document.getElementById("injuryPercentages").addEventListener("click",()=>{
        dialogGeneral.innerHTML=dialogDict.injuryPercentages[0]+dialogDict.injuryPercentages[1]
        dialogGeneral.appendChild(closeDialog);
        dialogGeneral.showModal();
    })