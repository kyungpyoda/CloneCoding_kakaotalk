function getChatList() {
    //var profile = new image(60, 60);
    //profile.src = 'jerry_square.jpg';

    document.write('<li ondblclick="chatOpen()">');
    document.write('<img src="jerry_square.jpg" alt="">')
    document.write('<p id="g_text1">Fanna</p><p id="g_text2">Hello</p><p id="g_text3">오후 12:58</p>');
    //<span class="fa-stack">
    //<span class="fas fa-circle fa-stack-2x" style="color: red;"></span>
    //<strong class="fa-stack-1x fa-inverse">n</strong>
    //</span>
    document.write('</li>');
    document.write('<li>');
    document.write('</li>');    
    document.write('<li>');
    document.write('</li>');    
    document.write('<li>');
    document.write('</li>');    
    document.write('<li>');
    document.write('</li>');    
    document.write('<li>');
    document.write('</li>');

}
function chatOpen(name) {
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.items').style.display = 'none';
    document.querySelector('.chatting').style.display = 'block';
    document.querySelector('.main').style.gridTemplateRows = '32px 1fr';

}