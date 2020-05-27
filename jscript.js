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
                localStorage.setItem('chatter_name', lines[0]);
                localStorage.setItem('chatter_img', lines[1]);
                let chatter_name = localStorage.getItem('chatter_name');
                let chatter_img = localStorage.getItem('chatter_img');
                document.getElementById('chatChatter').innerText = chatter_name;
                
                lines.splice(0, 2);
                var time = String(new Date());
                var tdate = time.split(' ')[0] + ' ' + time.split(' ')[1]
                    + ' ' + time.split(' ')[2] + ' ' + time.split(' ')[3];
                localStorage.setItem('today', tdate);

                for(var line of lines) {
                    var temp = JSON.parse(line);
                    if(temp.who === 'system') {
                        //alert(temp.date);
                        document.write('<p class="system '+temp.date+'">---- '+temp.date+' ----</p>');
                        localStorage.setItem('today', temp.date);
                        continue;
                    }
                    document.write('<div class="'+temp.who+' '+temp.time+'"><img src="'+chatter_img+'"><p class="c_name">'+chatter_name+'</p><p class="c_content">'+temp.content+'</p><p class="c_time">'+temp.time+'</p></div>');
                }
                var elem = document.querySelector('.output');
                elem.scrollTop = elem.scrollHeight;
            }
            
        }
    };
    rawfile.send(null);
}