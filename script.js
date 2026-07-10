const birthdayMessage = "Happy Birthday";
const birthdayElement = $("#birthday-text");

let i = 0;

function typeBirthday() {
    if (i < birthdayMessage.length) {

        let char = birthdayMessage.charAt(i);
        let span = $('<span class="letter"></span>').html(char);

        if (Math.random() > 0.55) {
            span.addClass('flicker-neon');
            span.css('animation-delay', Math.random() * 2 + 's');
            span.css('animation-duration', (Math.random() * 2 + 1.5) + 's');
        }

        birthdayElement.append(span);
        i++;

        setTimeout(typeBirthday,150);
    }
}

setTimeout(typeBirthday,6000);