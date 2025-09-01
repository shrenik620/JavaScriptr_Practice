//JS = Synchronous
//single Threaded


//Execution Context
//execute one line of code at a time
//-----console.log 1
//------consople.log 2
//class stack   //Memory Heap

//blocking code
//----Block the flow of program
//-----Read File Sync


//Non Blocking code
//-----Dont block the flow
//----Read file Async





//generate random color
// const randomColor=function(){
//     const hex="0123456789ABCDEFGH";
//     let color='#';
//     for(let i=0;i<6;i++){
//         color += hex[Math.floor(Math.random()*16)];
//     }
//     return color;
// };
// console.log(randomColor());


  const randomColor = function () {
        const hex = "0123456789ABCDEFGH";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
      };
      let interval;
      const startColorChange = function () {
        if (!interval) {
          interval = setInterval(changeBgColor, 400);
        }
        function changeBgColor() {
          document.body.style.backgroundColor = randomColor();
        }
      };
      const stopColorChange = function () {
        clearInterval(interval);
        interval = null;
      };
      document
        .getElementById("Start")
        .addEventListener("click", startColorChange);
      document
        .getElementById("Stop")
        .addEventListener("click", stopColorChange);


const insert = document.getElementById('insert');

function showEventDetails(e, eventType) {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Event Type</th>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
          <th>Button</th>
          <th>ClientX</th>
          <th>ClientY</th>
          <th>Alt</th>
          <th>Ctrl</th>
          <th>Shift</th>
        </tr>
        <tr>
          <td>${eventType}</td>
          <td>${e.key !== undefined ? (e.key === " " ? "space" : e.key) : "-"}</td>
          <td>${e.keyCode !== undefined ? e.keyCode : "-"}</td>
          <td>${e.code !== undefined ? e.code : "-"}</td>
          <td>${e.button !== undefined ? e.button : "-"}</td>
          <td>${e.clientX !== undefined ? e.clientX : "-"}</td>
          <td>${e.clientY !== undefined ? e.clientY : "-"}</td>
          <td>${e.altKey}</td>
          <td>${e.ctrlKey}</td>
          <td>${e.shiftKey}</td>
        </tr>
      </table>
    </div>
  `;
}

// Key events
["keydown", "keyup", "keypress"].forEach(type => {
  window.addEventListener(type, (e) => showEventDetails(e, type));
});

// Mouse events
["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseenter", "mouseleave"].forEach(type => {
  window.addEventListener(type, (e) => showEventDetails(e, type));
});



