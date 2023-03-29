function createHTML(ans) {
    console.log(ans)
    return `<html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    <body>
        <div class="newTeam">
            <div class="manager">
                <h2>${ans.managerName}</h2>
                    <ul>
                        <li>"ID:"${ans.managerID}</li>
                        <li>"Email:"${ans.managerEmail}</li>
                        <li>"Office Number:"${ans.managerOffice}</li>
                    </ul>
            </div>
            <div class="manager">
            <h2>${ans.engineerName}</h2>
                <ul>
                    <li>"ID:"${ans.engineerID}</li>
                    <li>"Email:"${ans.engineerEmail}</li>
                    <li>"Office Number:"${ans.engineerOffice}</li>
                </ul>
            </div>
            <h2>${ans.internName}</h2>
            <ul>
                <li>"ID:"${ans.internID}</li>
                <li>"Email:"${ans.internEmail}</li>
                <li>"School Name:"${ans.internSchool}</li>
            </ul>
        </div>
         </div>

    </body>
    </html>`
}

module.exports = createHTML;