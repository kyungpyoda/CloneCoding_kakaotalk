var cname;
function getChatList() {
    //var profile = new image(60, 60);
    //profile.src = 'jerry_square.jpg';
    var name = 'Fanna';
    document.write('<li ondblclick="chatOpen(\''+name+'\')">');
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
function chatOpen() {
    //document.querySelector('.header').style.display = 'none';
    //document.querySelector('.items').style.display = 'none';
    //document.querySelector('.chatting').style.display = 'block';
    //document.querySelector('.main').style.gridTemplateRows = '32px 1fr';
    //localStorage.setItem('chatter', name);
    window.location.href = 'chatting.html';
}
function chatLoad() {
    var rawfile = new XMLHttpRequest();
    rawfile.open("GET", "https://kyungpyoda.github.io/CloneCoding_kakaotalk/fanna.txt", false);
    rawfile.onreadystatechange = function() {
        if (rawfile.readyState === 4) {
            if (rawfile.status === 200 || rawfile.status === 0) {
                var allText = rawfile.responseText;
                var lines = allText.split("\n");
                //alert(lines[1]);
                localStorage.setItem('chatter', '{"chatter_name":"'+lines[0]+'","chatter_img":"'+lines[1]+'"}');
                
                lines.splice(0, 2);
                for(var line of lines) {
                    document.write("<p>"+line+"</p>");
                }
            }
        }
    };
    rawfile.send(null);
}