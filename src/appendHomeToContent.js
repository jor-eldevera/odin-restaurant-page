export default function appendHomeToContent(content) {
    // Create the <img>
    const image = document.createElement("img");
    image.src = "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/302188674_518573220270654_8000495395238477754_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dAiIa8QnnDUAX-1JE49&_nc_ht=scontent-sea1-1.xx&oh=00_AfAZ5BcEJ0LP8Y26YWWPOcwund_f8XMcKx_6unCIkZn83Q&oe=63E163DA";
    content.appendChild(image);
    
    // Create the <h1>
    const header = document.createElement("h1");
    header.innerHTML = "Welcome to El Gallito mexican food truck!";
    content.appendChild(header);
    
    // Create the <p>
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "El Gallito is a mexican food truck located on Carr Road. We are open from 10AM to 9PM.";
    content.appendChild(paragraph);
}