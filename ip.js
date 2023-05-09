chrome.runtime.sendMessage({}, function(response) {
    if (response.domainToIP !== null) {
        const tqShowIP = document.createElement('div');
        tqShowIP.id = 'tqShowIP';
        tqShowIP.className = 'tqShowIP_right';
        tqShowIP.textContent = response.domainToIP;
        document.body.appendChild(tqShowIP);

        tqShowIP.addEventListener('mouseover', function() {
            if (this.classList.contains('tqShowIP_right')) {
                this.classList.remove('tqShowIP_right');
                this.classList.add('tqShowIP_left');
            } else {
                this.classList.remove('tqShowIP_left');
                this.classList.add('tqShowIP_right');
            }
        });
    }
});
