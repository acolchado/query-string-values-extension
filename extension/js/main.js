// main.js
var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "error", function( readyEvent ) {
  console.log(readyEvent);
});
client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.display = "none";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );